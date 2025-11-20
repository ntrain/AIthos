function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = userInput.value.trim();

  if (userText === "") return; // Prevent empty messages

  // Display user message
  chatBox.innerHTML += `<div class="user-message"><strong>You:</strong> ${userText}</div>`;

  // Get AI response
  const aiResponse = getAIthosResponse(userText);

  // Display AI response
  chatBox.innerHTML += `<div class="ai-message"><strong>AIthos:</strong> ${aiResponse}</div>`;

  // Clear input
  userInput.value = "";

  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Allow pressing Enter to send message
document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevents accidental form submission
    sendMessage();
  }
});

function getAIthosResponse(input) {
  const text = input.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello! How are you feeling today?";
  } else if (text.includes("anxious")) {
    return "Thanks for sharing that. I’m here to support you. Would calming suggestions be helpful?";
  } else if (text.includes("how do you work")) {
    return "I generate responses based on patterns in language and data. I don’t have emotions, but I aim to be helpful and clear.";
  } else {
    return "I hear you. Tell me more so I can respond better.";
  }
}
