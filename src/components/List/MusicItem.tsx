interface MusicElemProps {
    imgUrl: string;
    mainText: string;
    secondaryText: string;
    isActive: boolean;
    alt: string;
}
const MusicElem = ({imgUrl, mainText, secondaryText, isActive}: MusicElemProps) => {
    return (
        <div className="MusicElem">
             <img src={imgUrl} alt="Album" />
             <div className="music__description">
               <p className="main__text">{mainText}</p>
               <p className="secondary__text">{secondaryText}</p>
             </div>
             <div className={`plus-button ${isActive && "_active"}`}></div>
        </div>
    );
};
export default MusicElem;