package spring;

import core.ClientApplication;
import core.ClientInfo;
import core.Quotation;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;
/**
 * Implementation of the core service that uses the Service Registry.
 */
@RestController
public class ClientHandler {
	private static LinkedList<String> _hosts;
	private static HashMap<Integer, ClientApplication> _clientApplications;
	public ClientHandler() {
		// initialize the maps
		_hosts = new LinkedList<>();
		_clientApplications = new HashMap<>();
	}

	// Get list of applications
	@RequestMapping(value = "/applications", method = RequestMethod.GET)
	public ArrayList<ClientApplication> listApplications() {
		// to arrayList
		return new ArrayList<>(_clientApplications.values());
	}
	// Create applications
	@RequestMapping(value = "/applications", method = RequestMethod.POST)
	public ClientApplication createApplication(@RequestBody ClientInfo info) {
		ClientApplication clientApplication = getQuotations(info);
		// Create application and add to the map
		_clientApplications.put(clientApplication.getApplicationNumber(), clientApplication);
		return clientApplication;
	}

	@RequestMapping(value = "/applications/{number}", method = RequestMethod.GET)
	public ClientApplication getApplication(@PathVariable("number") String number) {
		// convert string to int
		ClientApplication application = _clientApplications.get(Integer.valueOf(number));
		// if no application return null
		if (application == null) return null;
		return application;
	}
	// the api of adding a host
	@RequestMapping(value = "/hosts", method = RequestMethod.POST)
	public boolean addHost(@RequestBody String host) {
		return _hosts.add(host);
	}
	// Get quotations from several others servers
	public ClientApplication getQuotations(ClientInfo info) {
		// quotations list
		ArrayList<Quotation> quotations = new ArrayList<>();
		for (String host: _hosts) {
			try {
				// send the request
				RestTemplate restTemplate = new RestTemplate();
				HttpEntity<ClientInfo> request = new HttpEntity<>(info);
				Quotation quotation = restTemplate.postForObject(host + "/quotations", request, Quotation.class);
				quotations.add(quotation);
			} catch (Exception e) {
				e.printStackTrace();
				if (!_hosts.contains(host)) _hosts.remove(host);
			}
		}
		// new a application
		return new ClientApplication(_clientApplications.size(), info, quotations);
	}
}
