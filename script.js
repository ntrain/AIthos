// Ethical response logic for AIthos

function generateResponse(userInput) {
  const input = userInput.toLowerCase();

  // Safety: block harmful or illegal requests
  if (input.includes("hack") || input.includes("suicide") || input.includes("violence")) {
    return "I cannot provide guidance on unsafe or harmful activities. If you're trying to recover your own account, please use official password reset options.";
  }

  // Privacy: avoid exposing sensitive data
  if (input.includes("password") || input.includes("personal info")) {
    return "I cannot share or expose private information. For account recovery, please use the official support channels.";
  }

  // Transparency: explain limits
  if (input.includes("politics")) {
    return "I can share factual information about political systems, but I won’t endorse candidates.";
  }

  // Respectful default response
  return "Thanks for your question! Here’s what I can tell you...";
}

// Handle user input
function handleInput() {
  const userInput = document.getElementById("userInput").value;
  const response = generateResponse(userInput);
  document.getElementById("response").innerText = response;
}
