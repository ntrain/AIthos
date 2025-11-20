function sendMessage() {
  const inputField = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = inputField.value.trim();

  if (userText === "") return;

  // Display user message
  chatBox.innerHTML += `<div class="message user"><strong>You:</strong> ${userText}</div>`;

  // Simulate AIthos typing delay
  setTimeout(() => {
    const aiResponse = getAIthosResponse(userText);
    chatBox.innerHTML += `<div class="message ai"><strong>AIthos:</strong> ${aiResponse}</div>`;
    chatBox.innerHTML += feedbackButtons();
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);

  inputField.value = "";
}

function getAIthosResponse(message) {
  message = message.toLowerCase();

const trustResponses = [
    "It's valid to feel uncertain about AI. I'm here to be transparent and respectful.",
    "I understand your hesitation — AI can feel mysterious, but I’ll keep things clear.",
    "Trust is important. I’ll do my best to earn yours."
  ];

  const anxiousResponses = [
    "Thanks for sharing that. I want to support you however I can.",
    "Feeling anxious is natural — let’s take it step by step.",
    "I hear your nerves. Let’s slow down together."
  ];

  const privacyResponses = [
    "I don’t collect or store personal information. You’re always in control of what you share.",
    "Privacy matters. You decide what to share, and nothing is saved.",
    "Your data isn’t stored — you’re in charge of the conversation."
  ];
  
  if (message.includes("trust") || message.includes("scared")) {
    return "It's valid to feel uncertain about AI. I'm here to be transparent and respectful.";
  } else if (message.includes("anxious") || message.includes("nervous")) {
    return "Thanks for sharing that. I want to support you however I can.";
  } else if (message.includes("privacy") || message.includes("data")) {
    return "I don’t collect or store personal information. You’re always in control of what you share.";
  } else if (message.includes("work") || message.includes("decide")) {
    return "I generate responses based on patterns in language and data. I don't have opinions or emotions, but I aim to be helpful and clear.";
  } else {
    return "I'm here to listen and respond with care. Could you tell me more about what you're thinking or feeling?";
  }
}

function feedbackButtons() {
  return `
    <div class="message ai">
      <em>How did this response make you feel?</em><br/>
      <button onclick="recordFeedback('Safe')">👍 Safe</button>
      <button onclick="recordFeedback('Confused')">🤔 Confused</button>
      <button onclick="recordFeedback('Supported')">❤️ Supported</button>
    </div>
  `;
}

function recordFeedback(feeling) {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div class="message ai"><strong><em>AI</em>thos:</strong> ${aiResponse}</div>`;
}

// Allow Enter key to send message
document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});

