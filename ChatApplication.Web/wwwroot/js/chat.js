class Message {
    constructor(username, text, when) {
        this.userName = username;
        this.text = text;
        this.when = when;
    }
}

//userName is declared in razor page
const username = userName;
const textInput = document.getElementById("messageText");
const chat = document.getElementById("chat");
const messagesQueue = [];
const when = "";
document.getElementById('submitButton').addEventListener('click', () => {
    var currentDate = new Date();
    when.innerHTML = (currentDate.getMonth() + 1) + "/"
        + currentDate.getDate() + "/"
        + currentDate.getFullYear() + " "
    //+ currentDate.toLocaleString('en-US',)
})

function clearInputField() {
    messagesQueue.push(textInput.value);
    textInput.value = "";
}

function sendMessage() {
    let text = messagesQueue.shift() || "";
    if (text.trim() === "") return;

    let when = new Date();
    let message = new Message(username, text);
    sendMessageToHub(message);
}

function addMessageToChat(message) {
    let isCurrentUserMessage = message.userName === username;
    let container = document.createElement("div");
    container.className = isCurrentUserMessage ? "container darker" : "container";

    let sender = document.createElement("p");
    sender.className = "sender";
    sender.innerHTML = message.userName;
    let text = document.createElement("p");
    text.innerHTML = message.Text;

    let when = document.createElement("span");
    when.className = isCurrentUserMessage ? "time-leftt" : "time-right";
    var currentDate = new Date();
    when.innerHTML = (currentDate.getMonth() + 1) + "/"
        + currentDate.getDate() + "/"
        + currentDate.getFullYear() + " ";
    container.appendChild(sender);
    container.appendChild(text);
    container.appendChild(when);
    chat.appendChild(container);
}