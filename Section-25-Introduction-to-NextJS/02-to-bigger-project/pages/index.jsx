
import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS =[
    {
        id: 'm1',
        title :"A first meetup",
        image:"https://picsum.photos/1920/1080",
        address:"Some address 4, 13245 Some City",
        description:"First meetup description"
    },
    {
        id: 'm2',
        title :"A second meetup",
        image:"https://picsum.photos/1921/1080",
        address:"Some address 4, 13245 Some City",
        description:"First meetup description"
    },
    {
        id: 'm3',
        title :"A third meetup",
        image:"https://picsum.photos/1922/1080",
        address:"Some address 4, 13245 Some City",
        description:"First meetup description"
    }
]

// export async function getServerSideProps(context){
//     const req=context.req;
//     const res=context.res;
//     return{
//         props:{
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps(){
    return{
        props:{
            meetups:DUMMY_MEETUPS
        },
        revalidate:10
    };
}

export default function HomePage(props){
    return(
        <MeetupList meetups={props.meetups}/>
    )
}