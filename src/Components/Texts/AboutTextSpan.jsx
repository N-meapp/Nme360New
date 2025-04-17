import { useContext, useEffect } from "react"
import { ScrollContext } from "../../main";

export default function AboutTextSpan({ text,id}) {
    const { scrollHeight, setScrollHeight } = useContext(ScrollContext);

    

    useEffect(()=>{

        const element = document.getElementById(id)
        
        const distanceFromTop = element?.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        
            if(distanceFromTop<screenHeight*0.8 ){
                element.style.color = '#606060'
            }else{
                element.style.color = '#BBBBBB'
            }
        
    },[scrollHeight])


    return (
        <>
            <span id={id} className=" transition-all duration-500">{text!='+'?text:null}</span>
            {text=='+' ?
                <br></br>
                : null}

        </>
    )
}
