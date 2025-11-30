// Get DOM elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Track recent AI responses to avoid repetition
let recentResponses = [];
let messageCount = 0;
const FEEDBACK_TRIGGER = 6; // ask for feedback after 6 user messages (once)

// Send message
function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  displayMessage(message, "user-message");
  userInput.value = "";
  messageCount++;

  showTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();
    const response = getAIResponse(message);
    displayMessage(response, "ai-message");

    // Ask for feedback once at the end
    if (messageCount === FEEDBACK_TRIGGER) {
      setTimeout(() => {
        const feedbackDiv = document.createElement("div");
        feedbackDiv.className = "ai-message feedback-message";
        feedbackDiv.textContent = "Before we wrap up, how was your experience with AIthos today?";
        chatBox.appendChild(feedbackDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 1200);
    }
  }, 1200);
}

// Display a message bubble
function displayMessage(text, className) {
  const messageDiv = document.createElement("div");
  messageDiv.className = className;
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Typing indicator (animated via CSS)
function showTypingIndicator() {
  const indicator = document.createElement("div");
  indicator.className = "ai-message typing-indicator";
  chatBox.appendChild(indicator);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = document.querySelector(".typing-indicator");
  if (indicator) indicator.remove();
}

// Intent-based AI response logic with expanded library
function getAIResponse(userText) {
  const intents = {
    empathy: [
      "I hear you — that sounds tough.",
      "Thanks for sharing. How are you feeling about it?",
      "You're not alone in this.",
      "That must be really difficult to carry.",
      "It’s okay to feel this way — I’m here.",
      "I appreciate your honesty, it matters.",
      "That sounds painful. Let’s take it slowly.",
      "I can sense this matters a lot to you.",
      "It’s brave of you to say that out loud.",
      "Let’s go gently — I’m right here with you."
    ],
    curiosity: [
      "Can you tell me more?",
      "What made you think about that?",
      "That’s interesting — what’s behind it?",
      "I’d love to understand more about your perspective.",
      "What led you to that thought?",
      "Could you expand on that idea?",
      "That sparks my curiosity — share more?",
      "What’s the story behind that?",
      "What feels most important about this to you?",
      "If you had to sum it up, how would you describe it?"
    ],
    encouragement: [
      "That’s a great step forward.",
      "I respect your perspective.",
      "Let’s take this one step at a time.",
      "You’re showing real strength here.",
      "That’s inspiring — keep going.",
      "You’re doing better than you think.",
      "That’s progress worth celebrating.",
      "Your effort really shows.",
      "Small steps count — you’re on your way.",
      "I appreciate the care you’re bringing to this."
    ],
    neutral: [
      "I’m here to listen whenever you’re ready.",
      "Would you like me to explain something or just be present?",
      "Let’s explore this together.",
      "I’m glad we’re having this conversation.",
      "Take your time — I’m not going anywhere.",
      "I’m here with you in this moment.",
      "We can unpack this step by step.",
      "I value what you’re sharing.",
      "Where would you like to start?",
      "What feels like the next best step?"
    ]
  };

  // Simple intent detection
  let chosenIntent = "neutral";
  const lowerText = userText.toLowerCase();

  const empathySignals = ["sad", "frustrated", "angry", "upset", "anxious", "worried"];
  const encouragementSignals = ["happy", "excited", "good", "great", "relieved", "hopeful"];

  if (empathySignals.some(w => lowerText.includes(w))) {
    chosenIntent = "empathy";
  } else if (lowerText.includes("?")) {
    chosenIntent = "curiosity";
  } else if (encouragementSignals.some(w => lowerText.includes(w))) {
    chosenIntent = "encouragement";
  }

  // Choose a response and avoid recent repeats
  let response = randomChoice(intents[chosenIntent]);
  let safetyCounter = 0;
  while (recentResponses.includes(response) && safetyCounter < 10) {
    response = randomChoice(intents[chosenIntent]);
    safetyCounter++;
  }

  // Update recent memory (limit 3)
  recentResponses.push(response);
  if (recentResponses.length > 3) recentResponses.shift();

  return response;
}

// Helper: pick a random array item
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Send on Enter
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

// Warm welcome on load
window.onload = () => {
  displayMessage("Hello, I’m AIthos. I’m here to listen and connect with you.", "ai-message");
};
