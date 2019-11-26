package spring;

import models.MessageBlock;
import models.UserSession;
import org.json.simple.JSONArray;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;
/**
 * Implementation of the core service that uses the Service Registry.
 */
@RestController
public class ClientHandler {
	public ClientHandler() {}
	// Get list of people
	@RequestMapping(value = "/people", method = RequestMethod.GET)
	public String getServer() {
		return AfterServiceStarted.SERVER_ONLINE_API;
	}
	// Room resource
	@RequestMapping(value = "/rooms", method = RequestMethod.GET)
	public UserSession[] getRooms() {
		// TODO Get collections from MongoBD
		return new UserSession[2];
	}
	@RequestMapping(value = "/rooms", method = RequestMethod.POST)
	public HashMap<String, String> createRoom(@RequestBody List<String> peoplePublicKeys) {
		HashMap<String, String> initMessage = new HashMap<>();
		AbstractMap.SimpleEntry<String, String> roomPair = SimpleEncryption.generatePair();
		// Put room info and current session info
		initMessage.put(roomPair.getKey(), null);
		peoplePublicKeys.add(AfterServiceStarted.sCurrent.get("publicKey"));
		// Encrypt private key
		for (String ppk : peoplePublicKeys) {
			String encryptedPrivateRoomKey = SimpleEncryption.encryptString(roomPair.getKey(), roomPair.getValue());
			initMessage.put(ppk, encryptedPrivateRoomKey);
		}
		// TODO Store on the local Interact with akka (Encrypt and MongoDB)
		return initMessage;
	}
	// Messages resource
	@RequestMapping(value = "/messages", method = RequestMethod.GET)
	public MessageBlock[] getMessages(@RequestParam String publicKey) {
		// TODO Get records from MongoBD
		return new MessageBlock[2];
	}
	@RequestMapping(value = "/messages", method = RequestMethod.POST)
	public MessageBlock createMessage(@RequestBody String content, String roomPublicKey) {
		MessageBlock messageBlock = new MessageBlock(AfterServiceStarted.sCurrent.get("publicKey"), content, new Date());
		String encryptMessage = SimpleEncryption.encryptMessageBlock(roomPublicKey, messageBlock);
		// TODO Store on the local Interact with akka (Encrypt and MongoDB)
		return messageBlock;
	}
}
