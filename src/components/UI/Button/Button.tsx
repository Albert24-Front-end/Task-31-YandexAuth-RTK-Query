 interface Button {
        text: string;
        disabled?:boolean;
        type: "button" |  undefined | "submit" | "reset";
        onClick?: ()=>void;
    }
const Button = ({text, disabled, type, onClick}:Button) => {
   
    
    return (
        <button type={type} disabled={disabled} onClick={onClick}>{text}</button>
    )
}
export default Button