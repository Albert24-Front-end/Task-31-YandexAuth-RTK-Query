import { useParams } from "react-router-dom";
import { Heading, List, Navbar, Post_liked_marked } from "../../components";
import { Header } from "../../components/UI/Header/Header";
import { SCMainPage } from "../MainPage/MainPage.styled";
import { useGetPostbyIdQuery } from "../../store/API/postApi";

const PostPage =()=> {

  const { id } = useParams();

  const { data, isLoading} = useGetPostbyIdQuery(id!); // {id!} - id точно есть всегда, undefined невозможен

  function clickHandler() {
    console.log("clicked")
  }
    return(
        <SCMainPage>
          <Header/>
      <aside className="LeftSide">
        <Navbar/>
        <List listType="subscribes"/>
      </aside>
      <main className="Main">
        {isLoading && <Heading text="Loading..." variant="h1"/>}
        {data && (
          <Post_liked_marked 
                name={data.message?.user_fk.name}
                date={data.message?.reg_date}
                postText={data.message?.main_text}
                photos={data.message?.photos}
                comments={data.message.comments}
                isFavourite={true}
               onAddFavouritesClick={clickHandler}
               />
        )}
      </main>
      <aside className="RightSide">
      <List listType="closeFriends"/>
      <List listType="music"/>
      </aside>
    </SCMainPage>
    );
};
export default PostPage;