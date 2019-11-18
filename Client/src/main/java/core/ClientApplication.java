package core;

import java.util.ArrayList;

public class ClientApplication implements java.io.Serializable {
    private int applicationNumber;
    private ClientInfo clientInfo;
    private ArrayList<Quotation> quotation;
    public ClientApplication() {}
    // length is the length of the applications list
    public ClientApplication(int length, ClientInfo info, ArrayList<Quotation> quotations) {
        // set application number
        setApplicationNumber(length + 1);
        setClientInfo(info);
        setQuotation(quotations);
    }
    // Java bean
    public int getApplicationNumber() {
        return applicationNumber;
    }

    public void setApplicationNumber(int applicationNumber) {
        this.applicationNumber = applicationNumber;
    }

    public ClientInfo getClientInfo() {
        return clientInfo;
    }

    public void setClientInfo(ClientInfo clientInfo) {
        this.clientInfo = clientInfo;
    }

    public ArrayList<Quotation> getQuotation() {
        return quotation;
    }

    public void setQuotation(ArrayList<Quotation> quotation) {
        this.quotation = quotation;
    }
}
