import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Provider } from "react-redux";
import { store } from "./store/store"
import AuthCallback from "./components/AuthCallback/AuthCallback";
import PostPage from "./pages/PostPage/Postpage";
import { router } from "./utils/routes";


  function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <div className="App">
        <div className="container">
        <RouterProvider router={router}/>
        </div>
      </div>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
