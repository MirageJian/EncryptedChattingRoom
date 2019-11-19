package spring;

import models.MessageBlock;

import java.util.AbstractMap;

public class SimpleEncryption {
    // TODO Delete it
    private static int id = 0;
    /**
     * Key is public key, Value is private key
     * */
    public static AbstractMap.SimpleEntry<String, String> generatePair() {
        // TODO Generate Key Pair
        return new AbstractMap.SimpleEntry<>("key" + id++, "value" + id++);
    }
    public static String encryptString(String publicKey, String decryptedData) {
        // TODO Encrypt data
        return decryptedData;
    }

    public static String encryptMessageBlock(String publicKey, MessageBlock decryptedData) {
        // TODO Encrypt data
        return decryptedData.toString();
    }

    public static <T> T decrypt(String privateKey, T encryptedData) {
        // TODO Encrypt data
        return encryptedData;
    }
}
