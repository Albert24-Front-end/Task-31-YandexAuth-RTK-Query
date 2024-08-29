import { List, Navbar, WhatsNew, History, Post_liked_marked, Post_Repost_liked_marked } from "../../components";
import { useGetAllPostsQuery } from "../../store/API/postApi";
// import "./MainPage.scss";
import { SCMainPage } from "./MainPage.styled";

export const MainPage = () => {
  const {data, isLoading} = useGetAllPostsQuery(null);
  console.log("data", data)
  return (
    <SCMainPage>
      <aside className="LeftSide">
        <Navbar/>
        <List listType="subscribes"/>
      </aside>
      <main className="Main">
        <WhatsNew/>
        <History/>
        {isLoading && <h1>Loading...</h1>}
        {data ? data.message.map((post)=> (
          <Post_liked_marked 
                name={post.user_fk.name}
                date={post.reg_date}
                postText={post.main_text}
                photos={post.photos}/>
        )): (<h1>Постов нет</h1>)}
        <Post_liked_marked name={"Александр Майков"} date={"Сегодня 9:37"} postText={"Момент спокойствия и умиротворения"} photos={""}/>
        <Post_Repost_liked_marked/>
      </main>
      <aside className="RightSide">
      <List listType="closeFriends"/>
      <List listType="music"/>
      </aside>
    </SCMainPage>
  );
};

