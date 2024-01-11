import classes from "./MeetupDetail.module.css"
export default function MeetupDetail(props){
    return(
        <section className={classes.detail}>
            <img src={props.details.image} alt={props.details.title}/>
            <h1>{props.details.title}</h1>
            <address>{props.details.address}</address>
            <p>{props.details.description}</p>
        </section>
    )
}