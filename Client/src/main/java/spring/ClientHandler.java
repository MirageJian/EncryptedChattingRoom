package spring;

import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Sorts;
import com.mongodb.util.JSON;
import models.*;
import org.bson.Document;
import org.springframework.web.bind.annotation.*;

import java.util.*;
/**
 * Implementation of the core service that uses the Service Registry.
 */
@RestController
public class ClientHandler {
	private MongoClient mongoClient;
	private MongoDatabase database;
	public ClientHandler() {
		mongoClient = new MongoClient("localhost");
		database = mongoClient.getDatabase("chatting_room");
	}
	// Get list of people
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public HashMap<String, Object> getServer() {
	    HashMap<String, Object> map = new HashMap<>();
	    map.put("onlineApi", AfterServiceStarted.SERVER_ONLINE_API);
	    map.put("session", AfterServiceStarted.sCurrent);
		return map;
	}
	// Room resource
	@RequestMapping(value = "/rooms", method = RequestMethod.GET)
	public List<Map<String, Object>> getRooms() {
		// Get collections from MongoBD
		List<Map<String, Object>> rooms = new LinkedList<>();
		for (String name : database.listCollectionNames()) {
			MongoCollection<Document> collection = database.getCollection(name);
			// Find First
			FindIterable<Document> finder = collection.find();
			Map<String, Object> room = finder.first();
			Document message = collection.find(Filters.exists("isInitial", false))
					.sort(Sorts.descending("datetime"))
					.first();
			if (message != null) {
				// Decrypt Room private key with personal private Key
				String roomPrivateKey = SimpleEncryption.decryptString(
						AfterServiceStarted.sCurrent.get("privateKey"),
						(String)room.get(AfterServiceStarted.sCurrent.get("publicKey"))
				);
				// Decrypt Message with room private key
				Document decryptedData = SimpleEncryption.decryptMessage(roomPrivateKey, (String)message.get("encryptedData"));
				room.put("recentMessage", decryptedData.get("content"));
				room.put("recentDate", decryptedData.get("datetime"));
			}
			if (room != null){
                room.remove("_id");
                rooms.add(room);
            }
		}
		return rooms;
	}
	// Get rooms list
	@RequestMapping(value = "/rooms", method = RequestMethod.GET, params = "publicKey")
	public Document getRoom(@RequestParam String publicKey) {
		MongoCollection<Document> collection = database.getCollection(publicKey);
		Document doc = collection.find().first();
		// JSON to object for getting room participants
		doc.replace("participants", JSON.parse((String) doc.get("participants")));
		doc.remove("_id");
		return doc;
	}
	// Delete chatting room
	@RequestMapping(value = "/rooms", method = RequestMethod.DELETE, params = "publicKey")
	public void deleteRoom(@RequestParam String publicKey) {
		MongoCollection<Document> collection = database.getCollection(publicKey);
		// When delete all documents, the collection will be delete.
        collection.drop();
	}
	/** This Message Will receive by everyone in group */
	@RequestMapping(value = "/rooms", method = RequestMethod.POST)
	public Map<String, Object> createRoom(@RequestBody RoomModel input) {
		Document initMessage = new Document();
		AbstractMap.SimpleEntry<String, String> roomPair = SimpleEncryption.generatePair();
		// Put room info and current session info
		initMessage.append("isInitial", true);
		initMessage.append("publicKey", roomPair.getKey());
		initMessage.append("name", input.name);
		initMessage.append("img", input.img);
		// Add client into participate
		ParticipantModel client = new ParticipantModel(
				AfterServiceStarted.sCurrent.get("name"),
				AfterServiceStarted.sCurrent.get("publicKey"),
				AfterServiceStarted.sCurrent.get("ip")
		);
		input.participants.add(client);
		List<Document> participants = new LinkedList<>();
		// Encrypt private key of room
		for (ParticipantModel p : input.participants) {
			String roomPrivateKey = SimpleEncryption.encryptString(p.publicKey, roomPair.getValue());
			initMessage.append(p.publicKey, roomPrivateKey);
			// To JSON data
            Document doc = new Document();
            doc.put("name", p.name);
            doc.put("publicKey", p.publicKey);
            doc.put("ip", p.ip);
			participants.add(doc);
		}
		initMessage.append("participants", JSON.serialize(participants));
		// Store on the local Interact with akka (Encrypt and MongoDB)
		MongoCollection<Document> collection = database.getCollection(roomPair.getKey());
		collection.insertOne(initMessage);
		return initMessage;
	}
}
