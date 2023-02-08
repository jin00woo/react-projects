import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "First meeetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/c/c5/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg",
//     address: "Some address",
//     description: "First meetup at here",
//   },
//   {
//     id: "m2",
//     title: "Second meeetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/c/c5/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg",
//     address: "Some address 2",
//     description: "Second meetup at here",
//   },
//   {
//     id: "m3",
//     title: "Third meeetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/c/c5/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg",
//     address: "Some address 3",
//     description: "Third meetup at here",
//   },
// ];

export default function HomePage(props) {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);
  //   useEffect(() => {
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://jin00woo:jinwoo0818@cluster0.mtyn9q7.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
