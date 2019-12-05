package models;

import java.util.Date;

public class MessageBlock {
    public MessageBlock(String sender, String content, Date date) {
        this.sender = sender;
        this.content = content;
        this.date = date;
    }
    public String sender;
    public String content;
    public Date date;
}
