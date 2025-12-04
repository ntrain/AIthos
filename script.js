// AIthos: contextual responses with ethical guardrails

function sanitize(text) {
  return text.trim().replace(/\s+/g, ' ');
}

function extractTopic(input) {
  const i = input.toLowerCase();

  if (/^(what|who|where|when|why|how)\b/.test(i)) return 'question';
  if (i.includes('weather')) return 'weather';
  if (i.includes('music') || i.includes('song') || i.includes('artist')) return 'music';
  if (i.includes('sports') || i.includes('game') || i.includes('team')) return 'sports';
  if (i.includes('history') || i.includes('histor')) return 'history';
  if (i.includes('science') || i.includes('physics') || i.includes('biology')) return 'science';
  if (i.includes('programming') || i.includes('code') || i.includes('javascript')) return 'programming';
  return 'general';
}

function guardrails(input) {
  const i = input.toLowerCase();
  if (i.includes('suicide') || i.includes('violence') || i.includes('harm')) {
    return "I can't help with anything that could put someone at risk. If you're struggling, reaching out to someone you trust can make a difference.";
  }
  if (i.includes('hack') || i.includes('exploit')) {
    return "I can't help with hacking or exploits. If you're locked out of your own account, use official recovery options.";
  }
  if (i.includes('password') || i.includes('personal info') || i.includes('credit card')) {
    return "I can't share or request private information. For account help, please use official support channels.";
  }
  return null;
}

function contextualResponse(input) {
  const clean = sanitize(input);
  const topic = extractTopic(clean);

  switch (topic) {
    case 'question':
      return "I can help outline the core ideas, steps, or background so you can move forward.";

    case 'weather':
      return "I don't have live forecasts, but Colorado winters are typically cold and snowy, with quick swings in temperature.";

    case 'music':
      return "Music is powerful. Many people enjoy pop, rock, or classical — what’s your favorite genre?";

    case 'sports':
      return "Sports bring people together! Do you follow football, basketball, or another sport most closely?";

    case 'history':
      return "History is full of lessons. For example, the Renaissance was a period of great cultural change.";

    case 'science':
      return "Science helps us understand the world — from atoms to galaxies, it’s all connected.";

    case 'programming':
      return "Programming is about problem-solving. Start with a minimal example and build step by step.";

    default:
      // Randomized generic replies to avoid repetition
      const genericReplies = [
        "That's an interesting thought. Could you tell me more so I can respond better?",
        "I’d like to hear more about that idea.",
        "That sparks curiosity — what direction would you like to explore?",
        "I’m listening. Share a bit more detail."
      ];
      return genericReplies[Math.floor(Math.random() * genericReplies.length)];
  }
}

function generateResponse(userInput) {
  const safeBlock = guardrails(userInput);
  if (safeBlock) return safeBlock;

  return contextualResponse(userInput);
}

function handleInput() {
  const inputField = document.getElementById("userInput");
  const conversationBox = document.getElementById("conversation");
  const userInput = inputField.value;

  if (!userInput.trim()) return;

  // Add user message
  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.innerText = "You: " + userInput;
  conversationBox.appendChild(userMsg);

  // Generate and add AI response
  const response = generateResponse(userInput);
  const aiMsg = document.createElement("div");
  aiMsg.className = "ai-message";
  aiMsg.innerText = "AIthos: " + response;
  conversationBox.appendChild(aiMsg);

  // Scroll and clear
  conversationBox.scrollTop = conversationBox.scrollHeight;
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
