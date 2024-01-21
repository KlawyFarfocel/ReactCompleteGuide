import { Await, defer, json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventDetail() {
  const { event, events } = useRouteLoaderData("eventDetail");
  return (
    <>
      <Suspense fallback={<p>Loading event...</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading events...</p>}>
        <Await resolve={events} >
          {loadedEvents => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}
export async function EventDetailLoader({ request, params }) {
  const id = params.eventId;
  return defer({
    event:  await loadEvent(id),
    events:  loadEvents(),
  });
}
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // throw new Response(JSON.stringify({message:"Could not fetch events!"}),{status:500})
    throw json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event!" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}
