// domain.com/new-meetup/
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    router.push("/");
  };

  return (
    <Fragment>
      <Head>
      <title>Add new Meetup</title>
      <meta name="description" content="Add you own meetups"/>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
