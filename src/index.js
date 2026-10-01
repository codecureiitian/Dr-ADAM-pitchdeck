import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import PitchDeck from "./sample";

const root = createRoot(document.getElementById("root"));
root.render(<PitchDeck />);
