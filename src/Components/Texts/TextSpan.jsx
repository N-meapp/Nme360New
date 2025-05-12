import { useContext, useEffect } from "react"
import { ScrollContext } from "../../main";

export default function TextSpan({ text, id, isFirst, i }) {
    const { scrollHeight, setScrollHeight } = useContext(ScrollContext);



    useEffect(() => {

        const offset = 6; // adjust as needed
        const element = document.getElementById(id);
        const distanceFromTop = element?.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (isFirst) {
            if (distanceFromTop < screenHeight * 0.8 - i * offset) {
                element.style.opacity = 0;
            } else {
                element.style.opacity = 1;
            }
        } else {
            
            if (distanceFromTop < screenHeight * 0.5 - i * offset ) {

                
                element.style.opacity = 1;
            } else {
                element.style.opacity = 0;
            }
        }

    }, [scrollHeight])


    return (
        <>
            <span id={id} className="quote transition-all duration-500">{text != '+' ? text : null}</span>
            {text == '+' ?
                <br></br>
                : null}

        </>
    )
}
