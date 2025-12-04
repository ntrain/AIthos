// AIthos: smarter, contextual responses with guardrails

function sanitize(text) {
  return text.trim().replace(/\s+/g, ' ');
}

function extractTopic(input) {
  const i = input.toLowerCase();

  // Simple intent patterns
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

  const starters = [
    "Here’s a helpful way to look at it:",
    "A quick, clear take:",
    "Let’s get you a direct answer:",
  ];
  const starter = starters[Math.floor(Math.random() * starters.length)];

  switch (topic) {
    case 'question':
      return `${starter} You asked: "${clean}". I don't have live data access, but I can help outline the core ideas, steps, or background so you can move forward.`;

    case 'weather':
      return `${starter} I don't have live forecasts, but Colorado winters are typically cold and snowy, with quick swings in temperature. If you’re planning something, layering is smart.`;

    case 'music':
      return `${starter} If you're exploring music, try building a short playlist around one mood. Pick a lead track you love and add 4–6 songs that match its energy.`;

    case 'sports':
      return `${starter} For sports questions, focus on one team or player and a single metric (wins, efficiency, recent form). It makes comparisons clear and useful.`;

    case 'history':
      return `${starter} A solid approach is timeline → causes → effects. Pick a specific event, place it in time, note key drivers, then what changed because of it.`;

    case 'science':
      return `${starter} Break science topics into concept → example → application. Define it briefly, show a concrete example, then one way it’s used in the real world.`;

    case 'programming':
      return `${starter} Start with a minimal reproducible example. One file, clear inputs/outputs, and log the exact error or behavior. It makes debugging fast.`;

    default:
      return `${starter} "${clean}"—tell me the one outcome you want here (learn something, decide, plan, or fix). I’ll tailor the next step to that.`;
  }
}

function generateResponse(userInput) {
  // Guardrails first
  const safeBlock = guardrails(userInput);
  if (safeBlock) return safeBlock;

  // Contextual reply
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
