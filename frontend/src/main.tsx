import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
).render(
    <React.StrictMode>

        <BrowserRouter>

            <App />

        </BrowserRouter>

        <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={12}
            toastOptions={{
                duration: 3000,
                style: {
                    borderRadius: "12px",
                    background: "#ffffff",
                    color: "#0f172a",
                    border: "1px solid #e2e8f0",
                },
            }}
        />

    </React.StrictMode>
);
console.log(import.meta.env);