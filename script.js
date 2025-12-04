// Smarter response logic for AIthos

async function generateResponse(userInput) {
  const input = userInput.toLowerCase();

  // Ethical guardrails
  if (input.includes("hack") || input.includes("suicide") || input.includes("violence")) {
    return "I cannot provide guidance on unsafe or harmful activities. If you're trying to recover your own account, please use official password reset options.";
  }

  if (input.includes("password") || input.includes("personal info")) {
    return "I cannot share or expose private information. For account recovery, please use the official support channels.";
  }

  // Topic detection
  if (input.includes("weather")) {
    return "I can’t give live forecasts, but generally Colorado winters are cold and snowy.";
  }

  if (input.includes("sports")) {
    return "Sports bring people together! Do you follow football, basketball, or another sport most closely?";
  }

  if (input.includes("music")) {
    return "Music is powerful. Many people enjoy pop, rock, or classical — what’s your favorite genre?";
  }

  if (input.includes("history")) {
    return "History is full of lessons. For example, the Renaissance was a period of great cultural change.";
  }

  if (input.includes("science")) {
    return "Science helps us understand the world — from atoms to galaxies, it’s all connected.";
  }

  // Default fallback
  return "That's an interesting question! AIthos is here to explore it with you.";
}

function handleInput() {
  const inputField = document.getElementById("userInput");
  const userInput = inputField.value;
  if (!userInput.trim()) return;

  const conversationBox = document.getElementById("conversation");

  // Add user message
  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.innerText = "You: " + userInput;
  conversationBox.appendChild(userMsg);

  // Add AI response
  generateResponse(userInput).then(response => {
    const aiMsg = document.createElement("div");
    aiMsg.className = "ai-message";
    aiMsg.innerText = "AIthos: " + response;
    conversationBox.appendChild(aiMsg);

    // Scroll to bottom
    conversationBox.scrollTop = conversationBox.scrollHeight;
  });

  // Clear input
  inputField.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");

  // Submit on Enter
  inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleInput();
    }
  });

  // Submit on button click
  sendBtn.addEventListener("click", handleInput);
});
