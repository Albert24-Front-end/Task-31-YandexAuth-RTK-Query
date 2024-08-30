import { Link } from "react-router-dom";
import { Paragraph, Span } from "../../components";
import { SignInButton } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import axios from "axios";
import OauthPopup from "react-oauth-popup";
import { CLIENT_SECRET } from "../../utils/constants";
import { useGetTokenMutation } from "../../store/API/yandexApi";
import { useNavigate } from "react-router-dom";



interface RegistrationInfo {
  linkText: string;
  hasAccountText: string;
  authWithText: string;
  navigatePath: string;
}

const YANDEX_CLIENT_ID = "b6e62b354fe34b8a9800ec557bdbc981";
const REDIRECT_URI = "http://localhost:5173/main";
const YANDEX_AUTH_URL = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${YANDEX_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

const handleLogin = () => {
  window.location.href = YANDEX_AUTH_URL;
};

const YandexAuth = () => {
  const navigate = useNavigate();
  const [getToken, { data: tokenData, isLoading }] = useGetTokenMutation();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      getToken({ code });
      localStorage.setItem('yandexToken', tokenData.access_token);
      navigate('/main');
    }
  }, [getToken]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {!tokenData ? (
        <a href={YANDEX_AUTH_URL}>
        <Link className="reg__link yandex-link" to="#" onClick={handleLogin}>
          <img src="./img/icons/yandex.svg" alt=".ru"  style={{width: 50, height: 50}} />
        </Link></a>
      ) : (
        <div>Токен: {tokenData.access_token}</div>
      )}
    </div>
  );
};


const RegistrationInfo = ({linkText, hasAccountText, authWithText, navigatePath}: RegistrationInfo)=> {

  // const [token, setToken] = useState<string | null>(null);

  //   console.log("token", token)

  //   const handleCode = async (code: string) => {
  //     try {
  //       const response = await axios.post(
  //         "https://oauth.yandex.ru/token",
  //         {
  //           grant_type: "authorization_code",
  //           code,
  //           client_id: YANDEX_CLIENT_ID,
  //           client_secret: CLIENT_SECRET,
  //           redirect_uri: REDIRECT_URI,
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/x-www-form-urlencoded",
  //           },
  //         }
  //       );
  //       setToken(response.data.access_token);
  //     } catch (error) {
  //       console.error("Ошибка при получении токена:", error);
  //     }
  //   };

    
  //   const handleClose = () => console.log("Окно авторизации закрыто");

  
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
      
      <YandexAuth />
      {/* <OauthPopup
          url={`https://oauth.yandex.ru/authorize?response_type=code&client_id=${YANDEX_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`}
          onCode={handleCode}
          onClose={handleClose}
        >
          <Link className="reg__link yandex-link" to="/">
            <img src="./img/icons/yandex.svg" alt="Yandex" style={{width: 50, height: 50}} />
          </Link>
        </OauthPopup> */}
          

          
          
        </div>
        {/* {token && <p>Токен: {token}</p>} */}
      </div>
    );
};
export default RegistrationInfo