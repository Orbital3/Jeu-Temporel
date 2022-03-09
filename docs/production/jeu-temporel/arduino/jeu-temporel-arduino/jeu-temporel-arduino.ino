// Watch video here: https://www.youtube.com/watch?v=M4mVDnlnzSA

// UIP is a proper library for Arduino Nano Ethernet shield
// NOTE: UIPEthernet library is not needed if you are using Arduino UNO/Duemilanove/Mega/etc.
// UIPEthernet library is used for Arduino Nano Ethernet Shield

#include <UIPEthernet.h> // Used for Ethernet

//#include <EthernetUdp.h>
#include <SPI.h>    
#include <OSCMessage.h>

// **** ETHERNET SETTING ****
byte mac[] = { 0x90, 0xA2, 0xDA, 0xff, 0x99, 0xFF  };                                       
IPAddress ip(192, 168, 1, 168);                        
EthernetServer server(80);

int btn_one = 4,
    btn_two = 5,
    btn_three = 6,
    btn_four = 7;
int previousValue_one,
    previousValue_two,
    previousValue_three,
    previousValue_four;

void setup() {
  Serial.begin(38400);

  // start the Ethernet connection and the server:
  Ethernet.begin(mac, ip);
  server.begin();

  Serial.print("IP Address: ");
  Serial.println(Ethernet.localIP());
  
  pinMode(btn_one, INPUT_PULLUP);
  pinMode(btn_two, INPUT_PULLUP);
  pinMode(btn_three, INPUT_PULLUP);
  pinMode(btn_four, INPUT_PULLUP);
}

void loop() {
  // listen for incoming clients
 // EthernetClient client = server.available();

  /*if (client) 
  {  
    Serial.println("-> New Connection");

    // an http request ends with a blank line
    boolean currentLineIsBlank = true;

    while (client.connected()) 
    {
      if (client.available()) 
      {
        char c = client.read();

        // if you've gotten to the end of the line (received a newline
        // character) and the line is blank, the http request has ended,
        // so you can send a reply
        if (c == '\n' && currentLineIsBlank) 
        {
          client.println("<html><title>Hello World!</title><body><h3>Hello World!</h3></body>");
          break;
        }

        if (c == '\n') {
          // you're starting a new line
          currentLineIsBlank = true;
        }
        else if (c != '\r') 
        {
          // you've gotten a character on the current line
          currentLineIsBlank = false;
        }
      } 
    }*/

    // give the web browser time to receive the data
    delay(10);

    // close the connection:

Serial.println(digitalRead(btn_four));

  int switchValue_one = digitalRead(btn_one),
      switchValue_two = digitalRead(btn_two),
      switchValue_three = digitalRead(btn_three),
      switchValue_four = digitalRead(btn_four);

  if (previousValue_one != switchValue_one) {
      Serial.print("/but1 ");
      Serial.println(switchValue_one);
      previousValue_one = switchValue_one;
    }
  if (previousValue_two != switchValue_two) {
    Serial.print("/but2 ");
    Serial.println(switchValue_two);
    previousValue_two = switchValue_two;
  }
  if (previousValue_three != switchValue_three) {
    Serial.print("/but3 ");
    Serial.println(switchValue_three);
    previousValue_three = switchValue_three;
  }
  if (previousValue_four != switchValue_four) {
    Serial.print("/but4 ");
    Serial.println(switchValue_four);
    previousValue_four = switchValue_four;
  }
}



/*int btn_one = 4,
    btn_two = 5,
    btn_three = 6,
    btn_four = 7;
int previousValue_one,
    previousValue_two,
    previousValue_three,
    previousValue_four;

void setup() {
  Serial.begin(38400);
  pinMode(btn_one, INPUT_PULLUP);
  pinMode(btn_two, INPUT_PULLUP);
  pinMode(btn_three, INPUT_PULLUP);
  pinMode(btn_four, INPUT_PULLUP);
}

void loop() {
  int switchValue_one = digitalRead(btn_one),
      switchValue_two = digitalRead(btn_two),
      switchValue_three = digitalRead(btn_three),
      switchValue_four = digitalRead(btn_four);

  if (previousValue_one != switchValue_one) {
      Serial.print("/but1 ");
      Serial.println(switchValue_one);
      previousValue_one = switchValue_one;
    }
  if (previousValue_two != switchValue_two) {
    Serial.print("/but2 ");
    Serial.println(switchValue_two);
    previousValue_two = switchValue_two;
  }
  if (previousValue_three != switchValue_three) {
    Serial.print("/but3 ");
    Serial.println(switchValue_three);
    previousValue_three = switchValue_three;
  }
  if (previousValue_four != switchValue_four) {
    Serial.print("/but4 ");
    Serial.println(switchValue_four);
    previousValue_four = switchValue_four;
  }

}*/
