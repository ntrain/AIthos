function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  // Add user message
  const chatBox = document.getElementById("chat-box");
  const userBubble = document.createElement("div");
  userBubble.className = "user-message";
  userBubble.textContent = message;
  chatBox.appendChild(userBubble);

  // Clear input
  input.value = "";

  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;

  // Simulate AIthos response
  setTimeout(() => {
    const aiBubble = document.createElement("div");
    aiBubble.className = "ai-message";
    aiBubble.textContent = getAIResponse(message);
    chatBox.appendChild(aiBubble);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
}

function getAIResponse(userMessage) {
  // Simple canned responses for demo
  const responses = [
    "I hear you, Nicole. Let's explore that idea together.",
    "That’s an interesting thought — can you tell me more?",
    "I’d like to challenge that perspective gently. What if we looked at it another way?",
    "I’m here to enrich your thinking, not just agree. Let’s dig deeper."
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

// Allow Enter key to send message
document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
