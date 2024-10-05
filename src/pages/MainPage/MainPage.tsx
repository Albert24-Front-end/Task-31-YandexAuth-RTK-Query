import { useState } from "react";
import { List, Navbar, WhatsNew, History, Post_liked_marked } from "../../components";
import { Header } from "../../components/UI/Header/Header";
import { Loader } from "../../components/UI/Loader/Loader";
import { useGetAllPostsQuery } from "../../store/API/postApi";
// import "./MainPage.scss";
import { SCMainPage } from "./MainPage.styled";
import { IPost } from "../../store/API/types";

export const MainPage = () => {
  const {data, isLoading} = useGetAllPostsQuery(null);
  
  const [favouritePosts, setFavouritePosts] = useState<IPost[]>([]);

  const clickHandler = (post: IPost) => {
  
    const isFavourite = favouritePosts.some(favPost => favPost.id === post.id);
  
    if (isFavourite) {
      // Если пост уже в избранном, удаляем его
      const updatedFavourites = favouritePosts.filter(favPost => favPost.id !== post.id);
      setFavouritePosts(updatedFavourites);
      console.log('Updated Favourites after removal:', updatedFavourites);
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites))
    } else {
      const updatedFavourites = [...favouritePosts, post];
      setFavouritePosts(updatedFavourites);
      console.log('Updated Favourites after addition:', updatedFavourites);
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites))
    }
   
  };



  return (
    <SCMainPage>
      <Header/>
      <aside className="LeftSide">
        <Navbar/>
        <List listType="subscribes"/>
      </aside>
      <main className="Main">
        <WhatsNew/>
        <History/>
        {isLoading && <Loader/>}
        {data ? data.message.map((post)=> (
          <Post_liked_marked 
                name={post.user_fk.name}
                date={post.reg_date}
                postText={post.main_text}
                photos={post.photos}
                postId={post.id}
                isFavourite={favouritePosts.some(favPost => favPost.id ==post.id)}
                onAddFavouritesClick={()=>clickHandler(post)}/>
        )): (<h1>Постов нет</h1>)}
      </main>
      <aside className="RightSide">
      <List listType="closeFriends"/>
      <List listType="music"/>
      </aside>
    </SCMainPage>
  );
};

