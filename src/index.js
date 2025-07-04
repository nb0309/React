import React from "react";
import { createRoot } from "react-dom/client"; // ✅ Correct import for React 18
import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root")); // ✅ createRoot instead of render
root.render(<App />);
