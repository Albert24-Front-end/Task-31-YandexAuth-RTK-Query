import { ReactNode } from "react";

interface SpanProps {
    children: ReactNode;
    className?: string;
}
const Span =({children, className}: SpanProps)=> {
    return (
        <span className={className}>{children}</span>
    )
}
export default Span
// пропс children позволяет прописывать не просто текст, он дает возможность закинуть объекты-другие компоненты
