package models;

import java.util.HashMap;

public class CurrentSession extends UserSession {
    public CurrentSession(String name, String publicKey, String privateKey, String ip) {
        super(name, publicKey, ip);
        this.privateKey = privateKey;
    }

    public String privateKey;
    public HashMap<String, String> getMap() {
        HashMap<String, String> map = new HashMap<>();
        map.put("name", this.name);
        map.put("publicKey", this.publicKey);
        map.put("privateKey", this.privateKey);
        return map;
    }
}
