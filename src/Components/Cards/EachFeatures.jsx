export default function EachFeatures({title,description,image}){
    return(
        <>
        <div className="w-full justify-items-center">
    <img className="w-full md:w-1/2" src={image}></img>
    <h3 className="text-2xl jamjuree font-semibold">
    {title}
    </h3>
    <p className="text-xs md:text-base md:leading-loose mt-3 text-center">
    {description}
    </p>
  </div>
        </>
    )
}