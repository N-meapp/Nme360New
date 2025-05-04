export default function ServicesCard({ service }) {


    return (
        <>
            <div className={`md:w-[295px] w-[95%] md:h-[391px] flex-shrink-0 rounded-lg p-[30px] flex-col flex justify-between`}
                style={{ backgroundColor: service.cardColor }}

            >
                <div className="w-12 h-12 md:w-[81px] md:h-[81px] rounded-full">
                    <img className="object-cover object-center" src={service.icon}></img>
                </div>
                <div className="w-full h-fit">
                    <h3 className={`text-lg md:text-2xl font-bold jamjuree`}
                        style={{ color: service.titleColor }}

                    >{service.title}</h3>
                    <h3 className="text-base font-light jamjuree md:leading-[30px] mt-[20px]">{service.description}</h3>
                </div>
            </div>
        </>
    )
}