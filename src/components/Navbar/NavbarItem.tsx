import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface NavbarItemProps {
    itemText: string;
    icon: ReactNode;
    navigatePath: string;
}
const NavbarItem = ({ itemText, icon, navigatePath }: NavbarItemProps) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(navigatePath);
  }
    return (
        <li className="navbar__item" onClick={clickHandler}>
        <div>{icon}</div>
        <p className="item__name">{itemText}</p>
        
      </li>
    );
};
export default NavbarItem