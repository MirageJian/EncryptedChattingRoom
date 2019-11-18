package spring;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class AfterServiceStarted implements ApplicationRunner {
    /**
     * 会在服务启动完成后立即执行
     */
    @Value("${server.port}")
    private String port;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // add http params
        HttpEntity<String> request = new HttpEntity<>(String.format("http://localhost:%s", port));
        // send request
        new RestTemplate().postForObject("http://localhost:8080/hosts", request, String.class);
    }
}