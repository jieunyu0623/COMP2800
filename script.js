const socket = io('http://localhost:3000')
const msgContainer = document.getElementById('msg-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

function getName() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Users").doc(user.uid)
            .onSnapshot(function (snap) {
                let x = snap.data().name;
            });
    });
}
const name = prompt("Please insert name");
appendMessage('You joined');
socket.emit('new-user', name);

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`);
})
//when users connects says person joined
socket.on('user-connected', name => {
  appendMessage(`${name} connected`);
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`);
})

messageForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = messageInput.value;
  appendMessage(`You: ${message}`);
  socket.emit('send-chat-message', message);
  messageInput.value = '';
})

function appendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  msgContainer.append(messageElement);
}
