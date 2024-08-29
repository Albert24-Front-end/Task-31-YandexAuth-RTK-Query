import { ReactNode } from "react";

interface Paragraph {
    children: ReactNode;
}
const Paragraph = ({children}: Paragraph) => {
    return (
        <p>{children}</p>
    );
};
export default Paragraph