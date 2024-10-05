import { useGetSubscribersQuery } from "../../store/API/subscribersApi";
import Heading from "../typography/Heading/Heading";
import FriendItem from "./FriendItem";

const FriendsBlock =()=> {
    const {data} = useGetSubscribersQuery (null)
    return (
        <div className="FriendsBlock">
          <div className="Friends__title">
            <Heading text="Друзья" variant="h2"/>
            <span className="count">{data?.length}</span>
          </div>
          <div className="Friends__wrapper">
            {data && data.map((friend) => 
                <FriendItem name={friend.name}/>
            )}
          </div>
        </div>
    );
};

export default FriendsBlock;