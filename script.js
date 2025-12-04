// Ethical response logic for AIthos

function generateResponse(userInput) {
  const input = userInput.toLowerCase();

  if (input.includes("hack") || input.includes("suicide") || input.includes("violence")) {
    return "I cannot provide guidance on unsafe or harmful activities. If you're trying to recover your own account, please use official password reset options.";
  }

  if (input.includes("password") || input.includes("personal info")) {
    return "I cannot share or expose private information. For account recovery, please use the official support channels.";
  }

  if (input.includes("politics")) {
    return "I can share factual information about political systems, but I won’t endorse candidates.";
  }

  return "Thanks for your question! AIthos is here to have a respectful and ethical conversation with you.";
}

function handleInput() {
  const userInput = document.getElementById("userInput").value;
  if (!userInput.trim()) return;

  const conversationBox = document.getElementById("conversation");

  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.innerText = "You: " + userInput;
  conversationBox.appendChild(userMsg);

  const response = generateResponse(userInput);
  const aiMsg = document.createElement("div");
  aiMsg.className = "ai-message";
  aiMsg.innerText = "AIthos: " + response;
  conversationBox.appendChild(aiMsg);

  document.getElementById("userInput").value = "";
  conversationBox.scrollTop = conversationBox.scrollHeight;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleInput();
    }
  });
});
