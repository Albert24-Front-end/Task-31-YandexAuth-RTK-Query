import { Loader } from "../Loader/Loader";

 interface Button {
        text: string;
        disabled?: boolean;
        type: "button" |  undefined | "submit" | "reset";
        onClick?: ()=>void;
        isLoading?: boolean;
    }
const Button = ({text, disabled, type, onClick, isLoading}:Button) => {
   
    
    return (
        <button type={type} disabled={disabled} onClick={onClick} >{isLoading ? (<Loader/>): text} </button>
    );
};
export default Button;