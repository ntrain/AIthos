function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();

  if (userText === "") return;

  // Display user message
  chatBox.innerHTML += `<p><strong>You:</strong> ${userText}</p>`;

  // Generate AIthos response
  const aiResponse = getAIthosResponse(userText);
  chatBox.innerHTML += `<p><strong>AIthos:</strong> ${aiResponse}</p>`;

  // Add feedback prompt
  chatBox.innerHTML += `<p><em>Did this response make you feel safe, supported, or confused?</em></p>`;

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIthosResponse(message) {
  message = message.toLowerCase();

  if (message.includes("trust") || message.includes("scared")) {
    return "It's completely valid to feel uncertain about AI. I'm here to be transparent and respectful. Would you like to talk more about what worries you?";
  } else if (message.includes("anxious") || message.includes("nervous")) {
    return "Thanks for sharing that. I'm here to support you however I can. Would calming suggestions be helpful?";
  } else if (message.includes("how do you work") || message.includes("decide")) {
    return "I generate responses based on patterns in language and data. I don’t have opinions or emotions, but I aim to be helpful and clear.";
  } else if (message.includes("privacy") || message.includes("data")) {
    return "I don’t collect or store personal information. You’re always in control of what you share.";
  } else {
    return "I'm here to listen and respond with care. Could you tell me more about what you're thinking or feeling?";
  }
}
