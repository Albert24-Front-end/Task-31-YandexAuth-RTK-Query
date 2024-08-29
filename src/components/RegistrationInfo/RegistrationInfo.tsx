import { Link } from "react-router-dom";
import { Paragraph, Span } from "../../components";
import { SignInButton } from "@clerk/clerk-react";
import { useState } from "react";
import axios from "axios";
import OauthPopup from "react-oauth-popup";
import { CLIENT_SECRET } from "../../utils/constants";


interface RegistrationInfo {
  linkText: string;
  hasAccountText: string;
  authWithText: string;
  navigatePath: string;
}

const YANDEX_CLIENT_ID = "b6e62b354fe34b8a9800ec557bdbc981";
const REDIRECT_URI = "https://oauth.yandex.ru/verification_code";

const RegistrationInfo = ({linkText, hasAccountText, authWithText, navigatePath}: RegistrationInfo)=> {

  const [token, setToken] = useState<string | null>(null);

  console.log("token", token)

  const handleCode = async (code: string) => {
    try {
      const response = await axios.post(
        "https://oauth.yandex.ru/token",
        {
          grant_type: "authorization_code",
          code,
          client_id: YANDEX_CLIENT_ID,
          client_secret: CLIENT_SECRET,
          redirect_uri: REDIRECT_URI,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setToken(response.data.access_token);
    } catch (error) {
      console.error("Ошибка при получении токена:", error);
    }
  };

  
  const handleClose = () => console.log("Окно авторизации закрыто");

  
    return (
        <div className="registration">
        <Span>
         {hasAccountText} <Link to={navigatePath}>{linkText}</Link>
        </Span>
        {/* p & img заменить на компоненты */}
        <Paragraph>{authWithText}</Paragraph>
        <div className="icons-wrapper">
        
        <SignInButton children={
          <Link className="reg__link google-link" to="/">
          <img src="./img/icons/google.svg" alt="Google" />
        </Link>
        } />
      
      <OauthPopup
          url={`https://oauth.yandex.ru/authorize?response_type=code&client_id=${YANDEX_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`}
          onCode={handleCode}
          onClose={handleClose}
          
        >
          <Link className="reg__link yandex-link" to="/">
          {/* <Image src={"./img/icons/yandex.svg"} alt={"Yandex"}/> */}
            <img src="./img/icons/yandex.svg" alt="Yandex" style={{width: 50, height: 50}} />
          </Link>
        </OauthPopup>
          

          
          
        </div>
        {token && <p>Токен: {token}</p>}
      </div>
    );
};
export default RegistrationInfo