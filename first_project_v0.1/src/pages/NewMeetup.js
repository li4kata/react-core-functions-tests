import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();
  function addNewMeetupHandler(meetupDate) {
    fetch(
      "https://react-getting-started-f3dfa-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupDate),
        headers: {
          "content-type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addNewMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
