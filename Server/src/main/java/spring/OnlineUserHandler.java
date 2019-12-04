package spring;

import model.UserSession;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@RestController
public class OnlineUserHandler {
    private static ArrayList<UserSession> sOnlineUsers = new ArrayList<>();
    // Get list of online
    @RequestMapping(value = "/online", method = RequestMethod.GET)
    public ArrayList<UserSession> listOnline() {
        return sOnlineUsers;
    }
    // Put user in online list
    @RequestMapping(value = "/online", method = RequestMethod.POST)
    public UserSession putOnline(@RequestBody UserSession userSession, HttpServletRequest request) {
        userSession.ip = request.getRemoteAddr();
        sOnlineUsers.add(userSession);
        // Print for debug
        System.out.println(String.join(",", userSession.name, userSession.ip, userSession.publicKey));
        return userSession;
    }
    // Put user in online list
    @RequestMapping(value = "/online", method = RequestMethod.DELETE)
    public @ResponseBody
    String deleteOnline(@RequestParam String publicKey) {
        sOnlineUsers.removeIf(userSession -> userSession.publicKey.equals(publicKey));
        // Print for debug
        System.out.println(String.join(":", "Delete", publicKey));
        return publicKey;
    }
}
