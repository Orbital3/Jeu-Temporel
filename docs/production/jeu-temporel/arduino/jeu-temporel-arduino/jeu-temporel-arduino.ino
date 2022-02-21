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
      Serial.print("/but1 ")
      Serial.println(switchValue_one);
      previousValue_one = switchValue_one;
    }
  if (previousValue_two != switchValue_two) {
    Serial.print("/but2 ")
    Serial.println(switchValue_two);
    previousValue_two = switchValue_two;
  }
  if (previousValue_three != switchValue_three) {
    Serial.print("/but3 ")
    Serial.println(switchValue_three);
    previousValue_three = switchValue_three;
  }
  if (previousValue_four != switchValue_four) {
    Serial.print("/but4 ")
    Serial.println(switchValue_four);
    previousValue_four = switchValue_four;
  }

}
