export default function CareersCard({card}){
    return(
        <>
         <div className="relative bg-white w-[95%] min-h-40 p-6 rounded-lg shadow-md transform transition hover:scale-105">
            <div className="absolute bottom-0 left-0 w-full"></div>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{card.position}</h3>
                <i className="fas fa-plus cursor-pointer text-gray-600 toggle-icon"></i>
            </div>
            <p className="text-gray-600 mt-2">{card.skills}</p>
            <p className="text-gray-700 mt-3"><strong>Experience: </strong>{ card.experience}</p>
        </div>
        </>
    )
}