package model;

public class UserSession {
    public UserSession(String name, String publicKey, String ip) {
        this.name = name;
        this.publicKey = publicKey;
        this.ip = ip;
    }

    public String name;
    public String publicKey;
    public String ip;
}
