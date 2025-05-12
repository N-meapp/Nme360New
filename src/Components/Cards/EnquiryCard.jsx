export default function EnquiryCard({card}) {
    console.log(card);
    
    return (
        <>

            <div className="w-60 h-auto bg-white shadow-md rounded-lg p-4">
                <h3 className="font-semibold">{card.name}</h3>
                <h3>{card.email}</h3>
                <h3>{card.number}</h3>
                <h3>{card.subject}</h3>
                <h3 className="text-sm"><span className="font-semibold">message: </span>{card.message}</h3>

            </div>

        </>
    )
}