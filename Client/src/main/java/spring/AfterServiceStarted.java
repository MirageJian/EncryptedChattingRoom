package spring;

import models.CurrentSession;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.io.FileReader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.AbstractMap;
import java.util.HashMap;
import java.util.Map;

@Component
public class AfterServiceStarted implements ApplicationRunner {
    public static Map<String, String> sCurrent;
    private static final String CLIENT_INFO_PATH = "ClientInfo.json";
    /**
     * 会在服务启动完成后立即执行
     */
    @Value("${server.port}")
    private String port;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // Read Client Info
        JSONObject currentJson = null;
        if (Files.exists(Paths.get(CLIENT_INFO_PATH))) {
            FileReader reader = new FileReader(CLIENT_INFO_PATH);
            JSONParser jsonParser = new JSONParser();
            currentJson = (JSONObject) jsonParser.parse(reader);
        }
        if (currentJson == null) {
            // TODO use json storage read pair, if there is no pair generate
            AbstractMap.SimpleEntry<String, String> personalPair = SimpleEncryption.generatePair();
            sCurrent = new HashMap<>();
            sCurrent.put("name", "Mike");
            sCurrent.put("publicKey", personalPair.getKey());
            sCurrent.put("privateKey", personalPair.getValue());
            currentJson = new JSONObject(sCurrent);
//        JSONArray messages = new JSONArray();
//        messages.add("Hey!");
//        messages.add("What's up?!");
//        sampleObject.put("messages", messages);
            Files.write(Paths.get(CLIENT_INFO_PATH), currentJson.toJSONString().getBytes());
        } else {
            sCurrent = new HashMap<String, String>(currentJson);
        }

        // TODO Use akka tell server this client online

//        HttpEntity<String> request = new HttpEntity<>(String.format("http://localhost:%s", port));
//        new RestTemplate().postForObject("http://localhost:8080/hosts", request, String.class);
    }
}