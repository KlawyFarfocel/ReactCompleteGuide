import { useParams } from "react-router-dom"

export default function EventDetail(){
    const params=useParams()
    return(
        <h1>Event {params.eventId} Detail Page</h1>
    )
}