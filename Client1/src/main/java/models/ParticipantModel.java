package models;

import java.io.Serializable;

public class ParticipantModel implements Serializable {
    public ParticipantModel(String name, String publicKey, String ip) {
        this.name = name;
        this.publicKey = publicKey;
        this.ip = ip;
    }

    public String name;
    public String publicKey;
    public String ip;
}
