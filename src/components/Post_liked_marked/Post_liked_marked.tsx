import { Link } from "react-router-dom";
import CommentBlock from "./CommentBlock";

interface IPostProps {
  name: string;
  date: any;
  postText: string;
  photos: [
    {
      photo_id: number;
     photo_url: string; 
    }
  ];
  postId?: number;
  comments?: string[];
}

const Post_liked_marked = ({name, date, postText, photos, comments, postId}: IPostProps) => {
    return (
        <div className="Post _liked _marked">
          <div className="UserElem">
            <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
            <div className="user__description">
              <a href="#" className="main__text">
                {name}
              </a>
              <p className="secondary__text">{date}</p>
            </div>
            <div>{postId && <Link to={`/post/${postId}`}>Открыть пост</Link>}</div>  
          </div>
          <p className="Post__text">{postText}</p>
          <div className="media-container">
            {photos
            ? photos.map((photo)=>(
            <img
              className="media__item"
              src={photo.photo_url}
              alt="Post Item"
              key={photo.photo_id}
            />
          ))
            : ""}
          </div>
          <div className="PostControls">
            <div className="icon-wrapper like">
              <span className="count likes-count">-500</span>
              <svg
                className="icon icon-like"
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="icon"
                  d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
                />
              </svg>
            </div>
            <div className="icon-wrapper comment">
              <span className="count comments-count">500</span>
              <svg
                className="icon icon-comment"
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="comment"
                  d="M9.25 25.5C8.91848 25.5 8.60054 25.3683 8.36612 25.1339C8.1317 24.8995 8 24.5815 8 24.25V20.5H3C2.33696 20.5 1.70107 20.2366 1.23223 19.7678C0.763392 19.2989 0.5 18.663 0.5 18V3C0.5 2.33696 0.763392 1.70107 1.23223 1.23223C1.70107 0.763392 2.33696 0.5 3 0.5H23C23.663 0.5 24.2989 0.763392 24.7678 1.23223C25.2366 1.70107 25.5 2.33696 25.5 3V18C25.5 18.663 25.2366 19.2989 24.7678 19.7678C24.2989 20.2366 23.663 20.5 23 20.5H15.375L10.75 25.1375C10.5 25.375 10.1875 25.5 9.875 25.5H9.25ZM10.5 18V21.85L14.35 18H23V3H3V18H10.5Z"
                  fill="#6D6F7A"
                />
              </svg>
            </div>
            
            <div className="icon-wrapper mark">
              <svg
                className="icon icon-mark"
                viewBox="0 0 21 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="mark"
                  d="M2.5 24.8819C2.02381 25.0725 1.57143 25.031 1.14286 24.7574C0.714285 24.4838 0.5 24.0844 0.5 23.5591V2.85999C0.5 2.07349 0.78 1.39996 1.34 0.839407C1.9 0.278851 2.57238 -0.0009509 3.35714 2.42783e-06H17.6429C18.4286 2.42783e-06 19.1014 0.280281 19.6614 0.840837C20.2214 1.40139 20.5009 2.07444 20.5 2.85999V23.5591C20.5 24.0834 20.2857 24.4829 19.8571 24.7574C19.4286 25.032 18.9762 25.0735 18.5 24.8819L10.5 21.4499L2.5 24.8819Z"
                />
              </svg>
            </div>
          </div>
          {comments && comments.map((comment) => <CommentBlock text={comment} />)}
        </div>
    );
};
export default Post_liked_marked