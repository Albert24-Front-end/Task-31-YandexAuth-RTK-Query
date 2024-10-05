import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/base.scss";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { PUBLISHABLE_KEY } from "./utils/constants.ts";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { store } from "./store/store.ts";
import { theme } from "./theme/theme.ts";
import { router } from "./lib/routes.tsx";

// export const baseUrl = "http://161.35.153.209:5430/api"
// export const YANDEX_CLIENT_ID = import.meta.env.VIRE_CLERK_YANDEX_CLIENT_ID
// export const YANDEX_CLIENT_SECRET = import.meta.env.VIRE_CLERK_YANDEX_CLIENT_SECRET
// export const REDIRECT_URI = "http://localhost:5173/main";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <ClerkProvider
      appearance={{ baseTheme: dark }}
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/main"
    >
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="container">
          <RouterProvider router={router}/>
          </div>
        </div>
      </ThemeProvider>
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);
