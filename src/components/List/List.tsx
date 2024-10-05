import Heading from "../typography/Heading/Heading";
import ListItem from "./ListItem";
import MusicItem from "./MusicItem";
import {listData} from "./Data"
import { useGetSubscribersQuery } from "../../store/API/subscribersApi";
import { ISubscriber } from "../../store/API/types";

const { subscribes, closeFriends, music } = listData

interface ListProps {
  listType: "subscribes" | "music" | "closeFriends";
  isOnline?: boolean;
  isActive?: boolean;
}

const List =({listType}: ListProps)=>{

  const { data } = useGetSubscribersQuery(null);

  // console.log("data", data);

  const renderList =()=> {
  switch (listType) {
    case "subscribes":
    return (
      <div className="List">
          <div className="List__title">
            <Heading variant="h2" text="Подписки"/>
            <span className="count">
            {data ? data.length : ""}
            </span>
          </div>
          {data &&
              data.map((userElem: ISubscriber) => (
                <ListItem
                  mainText={userElem.username}
                  secondaryText={userElem.name}
                  key={userElem.id}
                  imgUrl="/img/users/andrey-kashirskiy.jpeg"
                  alt={"user"}
                  badgeNumber={null}
                />
              ))}
        </div>
    )
    case "music":
    return (
      <div className="MusicBlock">
          <div className="MusicBlock__title">
          <Heading variant="h2" text="Вы недавно слушали"/>
            <span className="count">{music ? music.length : ""}</span>
          </div>
          {music && music.map((musicItem)=>(
            <MusicItem
            imgUrl={musicItem.imgUrl}
            alt={musicItem.alt}
            mainText={musicItem.mainText}
            secondaryText={musicItem.secondaryText}
            isActive={musicItem.isActive}
            />
          ))}
        </div>
    )

    case "closeFriends":
    return (
      <div className="List">
          <div className="List__title">
            <Heading variant="h2" text="Близкие друзья"/>
            <span className="count">
              {closeFriends ? closeFriends.length : ""}
            </span>
          </div>
          {closeFriends && closeFriends.map((userElem) => (
            <ListItem
            isOnline={userElem.isOnline}
            imgUrl={userElem.imgUrl}
            alt={userElem.alt}
            mainText={userElem.mainText}
            secondaryText={userElem.secondaryText}
            badgeNumber={userElem.badgeNumber}/>
          ))}
        </div>
    )
    default:
    break;
  }}
    return renderList()
};
export default List