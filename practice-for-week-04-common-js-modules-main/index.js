let { message1, message2, message3 } = require("./messages");
const sayHelloTo = require("./send-messages/say-hello-to");
const giveMessageToMrsPotato = require("./send-messages/give-message-to-mrs-potato");
[msg1, msg2, msg3] = [message1, message2, message3];

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);