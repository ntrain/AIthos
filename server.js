// server.js
import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

// Endpoint AIthos front-end will call
app.post("/api/respond", async (req, res) => {
  const { query } = req.body;

  try {
    // Call Azure OpenAI reasoning engine
    const response = await fetch(
      "https://YOUR_AZURE_OPENAI_ENDPOINT/openai/deployments/YOUR_MODEL/chat/completions?api-version=2023-05-15",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "YOUR_AZURE_OPENAI_KEY"
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: query }],
          max_tokens: 200
        })
      }
    );

    const data = await response.json();
    res.json({ answer: data.choices[0].message.content });
  } catch (error) {
    console.error("Error contacting Azure OpenAI:", error);
    res.json({ answer: "There was a problem connecting to the reasoning engine." });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
