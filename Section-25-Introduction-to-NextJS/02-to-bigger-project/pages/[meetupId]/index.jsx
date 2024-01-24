import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://szrot:zaq12wsx@cluster0.nzzrsfn.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://szrot:zaq12wsx@cluster0.nzzrsfn.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetupData = JSON.stringify(
    await meetupsCollection.findOne({ _id: new ObjectId(meetupId) })
  );

  return {
    props: {
      meetup: JSON.parse(meetupData),
    },
  };
}

export default function Meetup(props) {
  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.description}/>
      </Head>
      <MeetupDetail details={props.meetup} />;
    </>
  );
}
