package spring;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import models.MessageModel;
import org.bson.Document;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

@RestController
public class MessageHandler {
    private MongoClient mongoClient;
    private MongoDatabase database;
    public MessageHandler() {
        mongoClient = new MongoClient("localhost");
        database = mongoClient.getDatabase("chatting_room");
    }

    @RequestMapping(value = "/messages", method = RequestMethod.GET)
    public List<Document> getMessages(@RequestParam String publicKey) {
        // TODO Get records from MongoBD
        MongoCollection<Document> collection = database.getCollection(publicKey);
        // Get room
        Document room = collection.find().first();
        List<Document> messages = new LinkedList<>();
        try (MongoCursor<Document> cursor = collection.find(Filters.exists("isInitial", false)).iterator()) {
            while (cursor.hasNext()) {
                Document message = cursor.next();
                // Decrypt Room private key with personal private Key
                String roomPrivateKey = SimpleEncryption.decryptString(
                        AfterServiceStarted.sCurrent.get("privateKey"),
                        (String)room.get(AfterServiceStarted.sCurrent.get("publicKey"))
                );
                // Decrypt Message with room private key
                Document decryptedData = SimpleEncryption.decryptMessage(roomPrivateKey, (String)message.get("encryptedData"));
                message.put("senderPublicKey", decryptedData.get("senderPublicKey"));
                message.put("content", decryptedData.get("content"));
                message.put("img", decryptedData.get("img"));
                message.put("datetime", decryptedData.get("datetime"));
                message.remove("_id");
                messages.add(message);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return messages;
    }

    // For encryption
    @RequestMapping(value = "/messages", method = RequestMethod.POST)
    public MessageModel encryptMessage(@RequestBody MessageModel message) {
        // Encrypt message
        message.encryptedData = SimpleEncryption.encryptMessage(message.roomPublicKey, message);
        return message;
    }

    /** This Message Will receive by everyone in group */
    @RequestMapping(value = "/receiveMessage", method = RequestMethod.POST)
    public void receiveMessage(@RequestBody MessageModel message, @RequestParam String publicKey) {
        //Store on the local Interact with akka (Encrypt and MongoDB)
        Document newMessage = new Document();
        newMessage.put("roomPublicKey", message.roomPublicKey);
        newMessage.put("lastHash", message.lastHash);
        newMessage.put("encryptedData", message.encryptedData);
        newMessage.put("datetime", message.datetime);
        MongoCollection<Document> collection = database.getCollection(publicKey);
        collection.insertOne(newMessage);
    }
}
