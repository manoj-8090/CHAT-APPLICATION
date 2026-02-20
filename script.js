// Connect to backend server (change URL if needed)
const socket = io("http://localhost:3000");

const chatBox = document.getElementById("chat-box");

function sendMessage() {
  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;

  if (username && message) {
    socket.emit("chatMessage", { username, message });
    document.getElementById("message").value = "";
  }
}

// Receive message from server
socket.on("chatMessage", (data) => {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<span>${data.username}:</span> ${data.message}`;
  chatBox.appendChild(div);

  chatBox.scrollTop = chatBox.scrollHeight;
});