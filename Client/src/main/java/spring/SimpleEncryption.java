package spring;

import com.mongodb.util.JSON;
import models.MessageBlock;
import models.MessageModel;
import org.bson.Document;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.util.AbstractMap;
import java.util.Map;

public class SimpleEncryption {
    // TODO Delete it
    private static int id = 0;

    /**
     * Key is public key, Value is private key
     */
    public static AbstractMap.SimpleEntry<String, String> generatePair() {
        // TODO Generate Key Pair
        return new AbstractMap.SimpleEntry<>("public" + id++, "private" + id++);
    }

    public static String encryptString(String publicKey, String decryptedData) {
        // TODO Encrypt data
        return decryptedData + "-encrypted";
    }

    public static String decryptString(String privateKey, String encryptedData) {
        // TODO Encrypt data
        return encryptedData.replace("-encrypted", "");
    }

    public static String encryptMessage(String publicKey, MessageModel decryptedData) {
        Document jsonObject = new Document();
        jsonObject.put("senderPublicKey", decryptedData.senderPublicKey);
        jsonObject.put("content", decryptedData.content);
        jsonObject.put("img", decryptedData.img);
        jsonObject.put("datetime", decryptedData.datetime);
        // TODO Encrypt data
        return jsonObject.toJson();
    }

    public static Document decryptMessage(String privateKey, String encryptedData) {
        // TODO Encrypt data
        Document messageModel = null;
        try {
            messageModel = Document.parse(encryptedData);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return messageModel;
    }

    public static <T> T decrypt(String privateKey, T encryptedData) {
        // TODO Encrypt data
        return encryptedData;
    }
}
