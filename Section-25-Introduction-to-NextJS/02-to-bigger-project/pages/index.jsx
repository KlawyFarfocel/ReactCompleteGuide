import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

// export async function getServerSideProps(context){
//     const req=context.req;
//     const res=context.res;
//     return{
//         props:{
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://szrot:zaq12wsx@cluster0.nzzrsfn.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name='description' content="List of higly active React meetups"/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}
