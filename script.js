const conversation = document.getElementById("conversation");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(text, type) {
  const el = document.createElement("div");
  el.classList.add(type === "user" ? "user-message" : "ai-message");
  el.textContent = text;
  conversation.appendChild(el);
  conversation.scrollTop = conversation.scrollHeight;
}

function handleSend() {
  const text = userInput.value.trim();
  if (!text) return;

  // User line
  addMessage(text, "user");

  // Simulated AIthos response (demo mode)
  setTimeout(() => {
    addMessage(`AIthos demo received: "${text}"`, "ai");
  }, 450);

  userInput.value = "";
}

sendBtn.addEventListener("click", handleSend);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSend();
});
