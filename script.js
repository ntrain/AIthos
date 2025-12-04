// AIthos front-end logic: sends user input to backend reasoning engine

async function generateResponse(userInput) {
  try {
    const response = await fetch("/api/respond", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: userInput })
    });

    const data = await response.json();
    return data.answer || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error contacting backend:", error);
    return "There was a problem connecting to the reasoning engine.";
  }
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
  generateResponse(userInput).then(response => {
    const aiMsg = document.createElement("div");
    aiMsg.className = "ai-message";
    aiMsg.innerText = "AIthos
