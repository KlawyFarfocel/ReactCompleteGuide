import MeetupDetail from "@/components/meetups/MeetupDetail";

export async function getStaticPaths(){
    return{
        paths:[
            {
                params:{
                    meetupId:'m1',
                },
            },
            {
                params:{
                    meetupId:'m2',
                }
            }
        ],
        fallback:false
    }
}

export async function getStaticProps(context){
    const meetupId=context.params.meetupId;
    return{
        props:{
            meetup:{
                id:meetupId,
                image:"https://picsum.photos/1920/1080",
                title:"New Meetup",
                address:"Some street 5, 123-45 Some City",
                description:"Some meetup description"
            }
        }
    }
}

export default function Meetup(props){
    return(
        <MeetupDetail details={props.meetup}/>
    )
}