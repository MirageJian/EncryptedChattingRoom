package models;

import java.util.Date;

public class MessageModel {
    public String roomPublicKey;
    public String lastHash;
    public String encryptedData;
    // Below is decrypted information
    public String senderPublicKey;
    public String content;
    public String img;
    public Date datetime;
}
