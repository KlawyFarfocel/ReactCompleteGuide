import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS =[
    {
        id: 'm1',
        title :"A first meetup",
        image:"https://picsum.photos/1920/1080",
        address:"Some address 4, 13245 Some City",
        description:"First meetup description"
    }
]

export default function HomePage(){
    return(
        <MeetupList meetups={DUMMY_MEETUPS}/>
    )
}