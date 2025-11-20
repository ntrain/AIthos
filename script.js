function sendMessage() {
  const input = document.getElementById("user-input");
  const input + document.getElementById("user-input");
    edd4a9a (Renamed scrypt.js to script.js and updated chatbot code)
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();

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

  input.value = "";
}

function getAIthosResponse(message) {
  message = message.toLowerCase();

  const empathyResponses = [
    "It's valid to feel uncertain about AI. I'm here to be transparent and respectful.",
    "Thanks for sharing that. I want to support you however I can.",
    "I don’t collect or store personal information. You’re always in control of what you share."
  ];

  if (message.includes("trust") || message.includes("scared")) {
    return empathyResponses[0];
  } else if (message.includes("anxious") || message.includes("nervous")) {
    return empathyResponses[1];
  } else if (message.includes("privacy") || message.includes("data")) {
    return empathyResponses[2];
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
  chatBox.innerHTML += `<div class="message user"><strong>Feedback:</strong> ${feeling}</div>`;
}

  //Display user message.
  chatBox.innerHTML += '<p><strong>You:</strong> ${userText}</p>;

  //Generate AIthos response
  const aiResponse = get AIthosResponse(userText);
  chatBox.innerHTML += '<p><strong>AIthos:</strong> ${aiResponse}</p>;
  
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIthosResponse(message) {
  return "It's conpletely valid to feel uncertain about AI. I'm here tobe transparent ad respectful. Would you like to talk more about what worries you?";
  }
  else if (message.includes("anxious") || message.includes("nervous")) {
    return "Thanks for sharing that. I'm here to support you however I can. Would calming suggestions be helpful?";
  }
  else if (message.include("How do you work?") || message.includes("decide")) {
    return "I generate responses based on patterns in language and data. I don't have opinions or emotions, but I aim to be helpful and clear.";
  }
  else if (message.includes("privacy") || message.includes("data") {
    return "I don't collect or store personla information. You're always in control of what you share.";
  }
  else {
    return "I'm here to listen and respond with care. Could you tell me more about what you're thinking or feeling?";
  }
}
    edd4a9a (Renamed scrypt.js to script.js and updated chatbot code)
