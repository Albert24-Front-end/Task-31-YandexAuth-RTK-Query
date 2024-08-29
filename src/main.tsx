import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/base.scss";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { PUBLISHABLE_KEY } from "./utils/constants.ts";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider
      appearance={{ baseTheme: dark }}
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/main"
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
