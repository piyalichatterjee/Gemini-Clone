// let geminiKey = "AIzaSyDlNZeQaCvd9_uhuRNPZ3mwDOdUUFX2ixk";
import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({
// apiKey: import.meta.env.VITE_GEMINI_API_KEY,
// });

// export async function main(prompt: string) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: prompt,
//   });
//   console.log(response.text);
//   return response.text;
// }

export async function main(params: string): Promise<string> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        `React.js (often just called React) is a **free and open-source front-end JavaScript library** for building user interfaces (UIs) based on UI components. Developed and maintained by Facebook (now Meta) and a community of individual developers and companies, React is widely used for creating single-page applications, mobile applications, and complex web applications. Here's a breakdown of its key characteristics and what makes it so popular: 1. **Component-Based Architecture:** * React encourages you to break down your UI into independent, reusable pieces called "components." Think of them like Lego blocks. * Each component manages its own state and renders itself. *  component. This modularity makes UIs easier to develop, test, and maintain. 2. **Declarative Nature:** * You describe *what* you want your UI to look like for a given state, and React figures out *how* to update the DOM efficiently to match that state. * This is in contrast to imperative programming, where you manually instruct the browser step-by-step how to manipulate the DOM. * Benefit: Makes your code more predictable and easier to debug, as you focus on the desired outcome rather than the steps to get there. 3. **Virtual DOM:** * Instead of directly manipulating the browser's Document Object Model (DOM), React uses a "Virtual DOM." * When a component's state changes, React first updates its virtual representation of the UI. * It then compares this new Virtual DOM with the previous one, identifies only the differences, and efficiently updates *only those changed parts* in the real DOM. * Benefit: Significantly improves performance by minimizing direct interaction with the slow real DOM. 4. **JSX (JavaScript XML):** * React uses JSX, a syntax extension that allows you to write HTML-like code directly within your JavaScript files. * Example:  * Benefit: Makes UI structure more intuitive and cohesive with the JavaScript logic that controls it. Browsers can't read JSX directly, so it's transpiled into regular JavaScript before execution. 5. **Unidirectional Data Flow:** * React generally promotes a "one-way" data flow, meaning data flows down from parent components to child components via "props" (properties). * This makes it easier to understand how data changes and reduces the complexity of managing application state. 6. **"Learn Once, Write Anywhere":** * While React.js is for web development, the core principles of React can be applied to other platforms. * **React Native:** A framework for building native mobile applications (iOS and Android) using React. * **React 360:** For creating virtual reality experiences. **What React is NOT:** * **It's NOT a full-fledged framework:** Unlike Angular, which provides a comprehensive solution for routing, state management, HTTP requests, etc., React is primarily concerned with the UI layer. You often combine React with other libraries for tasks like routing (e.g., React Router) and global state management (e.g., Redux, MobX, or React's Context API). * **It's NOT tied to any specific backend:** React only handles the frontend. You can use it with any backend technology (Node.js, Python, Ruby, Java, PHP, etc.) that can serve your application's data. **Why is it so popular?** * **Performance:** Thanks to the Virtual DOM. * **Reusability & Maintainability:** Component-based architecture. * **Developer Experience:** JSX, declarative syntax, and a robust ecosystem make development enjoyable and efficient. * **Strong Community & Ecosystem:** A vast array of tools, libraries, and community support. * **Backed by Facebook:** Ensures continuous development and long-term viability. * **High Demand:** React developers are highly sought after in the job market. In essence, React.js provides a powerful and flexible way to build modern, interactive, and efficient user interfaces for the web and beyond.`
      );
    }, 2000);
  });
}
