import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add global styles for fonts
const style = document.createElement('style');
style.textContent = `
  :root {
    --primary: 44 62 80; /* #2C3E50 */
    --secondary: 224 201 177; /* #E0C9B1 */
    --accent: 212 181 149; /* #D4B595 */
    --background: 245 245 245; /* #F5F5F5 */
    --foreground: 51 51 51; /* #333333 */
    --border: 224 201 177; /* #E0C9B1 */
    --input: 224 201 177; /* #E0C9B1 */
    --ring: 212 181 149; /* #D4B595 */
    
    --radius: 0.5rem;
  }
  
  body {
    font-family: 'Lato', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }
  
  .section-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, #D4B595, transparent);
    width: 6rem;
    margin: 1.5rem auto;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
