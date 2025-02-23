

import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "./config.js";

const genAI = new GoogleGenerativeAI(config.geminiApiKey);

const aiService = {
  async summarizeFeedback(feedbackText) {
    try {
      // Initialize the model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      // Send request to Gemini API
      const result = await model.generateContent(`Summarize this feedback in a para and not pointwise with all the positives negatives and improvements. Dont add any other points on your own. though if needed just provide few improvement recommendations. But response should be in positive manner to make faculty feel comfortable with it.: ${feedbackText}`);

      // Extract response
      const response = await result.response;
      const summary = response.text(); // Get the text output

      return summary;
    } catch (error) {
      console.error("Error summarizing feedback with Gemini:", error);
      throw error;
    }
  },
};

export default aiService;
