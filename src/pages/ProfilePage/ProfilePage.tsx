import { Navbar, List, WhatsNew, Post_liked_marked, Post_Repost_liked_marked, ProfileHeader, UserPosts, Bio, Heading} from "../../components";
import { SCProfilePage } from "./ProfilePage.styled";
import { Header } from "../../components/UI/Header/Header";
import { useGetUserQuery } from "../../store/API/authAPI";
import FriendsBlock from "../../components/FriendsBlock/FriendsBlock";
import { useGetAllPostsQuery } from "../../store/API/postApi";
import { IPost } from "../../store/API/types";
import { CreatePostForm } from "../../components/forms/CreatePostForm";



export const ProfilePage = () => {
  
  const {data, isLoading} = useGetAllPostsQuery(null);
  const userId = localStorage.getItem("userId");
  
  // data - данные, отправляемые бэкэндом
  // isError - Статус, показывающий наличие-отсутствие ошибки, возвращает true/false
  // isLoading - Статус, показывающий наличие загрузки, возвращает true/false
  // error - объект ошибки, при ее наличии  возвращает error
  // isSuccess - Статус успешности загрузки, возвращает true/false
  

  const userIdNumber = userId?Number(userId) : undefined;
  const posts = data?.message || [];

  const filterPostsByUserId = (posts: IPost[], userId: number) => {
    return posts.filter(post => post.user_id == userId)
  }
  const filteredPosts = userIdNumber !== undefined ? filterPostsByUserId(posts, userIdNumber) : []

 console.log("userId", userId) 
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
        <CreatePostForm/>
       
      <Heading variant="h2" text="Мои посты"/>
      <br />
      {/* dataHits */}
      {filteredPosts ? (filteredPosts.map((post)=>(
        <Post_liked_marked 
        name={post.user_fk.name}
        date={post.reg_date}
        postText={post.main_text}
        photos={post.photos}
        postId={post.id}
        isOwner={true}
        />
      ))
    ): (<Heading variant="h2" text="У вас пока нет постов"/>)}
     
      {/* <Heading variant="h2" text="Лента"/>
       <br />
       <hr />
       <br />
        {isLoading && <h1>Loading...</h1>}
        {data ? data.message.map((post)=> (
          <Post_liked_marked 
                name={post.user_fk.name}
                date={post.reg_date}
                postText={post.main_text}
                photos={post.photos}
                postId={post.id}/>
        )): (<h1>Постов нет</h1>)} */}
       
        {/* <Post_Repost_liked_marked/> */}
      
      </main>
      <aside className="RightSide">
        <Bio/>
      
        <FriendsBlock/>
      
        <List listType="music"/>
      
      </aside>
    </SCProfilePage>
  );
};
