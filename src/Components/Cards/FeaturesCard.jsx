import { useEffect } from "react"

export default function FeaturesCard({ bg, icon, color, text, description, limitedCard, setLimitedCard, selectedCard, setSelectedCard,shrinkText }) {

    const handleHeight =()=>{
        if(limitedCard==text){
            return '142px'
        }else if(selectedCard == text){
            return '261px'
        }else{
            return '201.5px'
        }
    }

    useEffect(()=>{
        window.scrollTo({ top: 0});

    },[])

    // 261 142 201.5

    return (
        <>
            <div onMouseEnter={()=>{
                setLimitedCard(shrinkText)
                setSelectedCard(text)
            }} 
            onMouseLeave={()=>{
                setLimitedCard(null)
                setSelectedCard(null)
            }} className="" id="card-par1">
                <div id="card1" className={`w-[225px] transition-[height] duration-500 overflow-hidden rounded-xl p-[16px]`}
                    style={{ height: handleHeight(), backgroundColor: bg }}

                >
                    <div className="h-[130px] w-full content-center">
                        <img src={icon} alt="sdf" className="text-[#D8D1FF] w-[72px]">
                        </img>
                    </div>
                    <div id="card-con1" className="card-con flex items-center justify-between h-[32px] w-full mb-8">
                        <span className={`text-[${color}] text-lg font-semibold`}>{text}</span>
                        <svg className="rotate-[135deg]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill={color} d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1" /></svg>
                    </div>

                    <div id="cardHover1" className={`text-left left-0 w-full text-[${color}] p-0 text-[12px] rounded-lg `}>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}