import { Link, useNavigate, Outlet, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import { useState } from 'react';
import Modal from '../UI/Modal.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';


export default function EventDetails() {
const [isDeleting,setIsDeleting]=useState(false);

const eventId=useParams().id;
const navigate=useNavigate()
const{data,isPending,error,isError}=useQuery({
  queryFn:({signal})=>fetchEvent({id:eventId,signal:signal}),
  queryKey:['events',eventId]
})
const{mutate, isPending:isPendingDeletion,isError:isErrorDeleting,error:errorDeleting}=useMutation({
  mutationFn:deleteEvent,
  onSuccess:()=>{
    queryClient.invalidateQueries({queryKey:['events'],refetchType:'none'})
    navigate("/events")
  }
})
if(data){
  console.log(data);
}
function handleStartDelete(){
  setIsDeleting(true)
}
function handleStopDelete(){
  setIsDeleting(false)
}
function handleDelete(){
  mutate({id:eventId})
}
  return (
    <>
      {
        isDeleting&&
        <Modal onClose={handleStopDelete}>
        <h2>Are you sure?</h2>
        <p>Do you really want to delete this event? This action cannot be undone</p>
        <div className="form-actions">
          {isPendingDeletion && <p>Deleting, Please wait...</p>}
          {!isPendingDeletion &&
            <>
              <button className='button-text' onClick={handleStopDelete}>Cancel</button>
              <button className="button" onClick={handleDelete}>Delete</button>
            </>
          }

        </div>
        {isErrorDeleting &&
        <ErrorBlock title={"An error occured!"} message={errorDeleting.info?.message || "Failed to delete event. Try again later!"}/>
        }
        </Modal>
      }
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        <header>
          <h1>{data && data.title}</h1>
          <nav>
            <button onClick={handleStartDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        {data &&
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt="" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>{data.date} @ {data.time}</time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        }
      </article>
    </>
  );
}
