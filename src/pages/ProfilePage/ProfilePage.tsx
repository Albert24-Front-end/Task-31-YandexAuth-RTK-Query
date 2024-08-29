import { Navbar, List, WhatsNew, Post_liked_marked, Post_Repost_liked_marked, ProfileHeader, UserPosts, Bio} from "../../components";
import { SCProfilePage } from "./ProfilePage.styled";
import { Header } from "../../components/UI/Header/Header";
import { useGetUserQuery } from "../../store/API/authAPI";



export const ProfilePage = () => {
  const { data } = useGetUserQuery("193")
  // data - данные, отправляемые бэкэндом
  // isError - Статус, показывающий наличие-отсутствие ошибки, возвращает true/false
  // isLoading - Статус, показывающий наличие загрузки, возвращает true/false
  // error - объект ошибки, при ее наличии  возвращает error
  // isSuccess - Статус успешности загрузки, возвращает true/false
  console.log("user data:", data)
  return (
    <SCProfilePage>
      <Header/>
      <aside className="LeftSide">
      <Navbar/>
      
      <List listType="subscribes"/>
      
      </aside>
      <ProfileHeader/>
     
      <main className="Main">
      <WhatsNew/>
       
        <UserPosts/>
       
        <Post_liked_marked name={"Александр Майков"} date={"Сегодня 9:37"} postText={"Момент спокойствия и умиротворения"}/>
       
        <Post_Repost_liked_marked/>
      
      </main>
      <aside className="RightSide">
        <Bio/>
      
        <List listType="closeFriends"/>
      
        <List listType="music"/>
      
      </aside>
    </SCProfilePage>
  );
};
