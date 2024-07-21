import { useRef } from "react";
import "./style.css";

export default function Root() {
    const events = [...JSON.parse(localStorage.getItem("events") || "[]")];

    const navigation = useRef(null);

    function navigationToCountdown(event) {
        console.log(event);
        localStorage.setItem("current-event", JSON.stringify(event));

        navigation.current.click();
    }

    return (
        <div className="container">
            <h1> Event list </h1>

            {!events || events?.length === 0 ? (
                <p> lack of events </p>
            ) : (
                <div className="container-events">
                    {events.map((event) => {
                        return (
                            <div key={event.name} className="single-event">
                                <h4>{event.name} </h4>
                                <p>
                                    aa
                                    {event.description.length > 70
                                        ? event.description.slice(0, 60) + "..."
                                        : event.description}
                                </p>

                                <i>
                                    {" "}
                                    {`${event.date.day}/${event.date.month}/${event.date.year}, ${event.time}`}{" "}
                                </i>

                                <br></br>
                                <div className="look-event">
                                    <a onClick={() => navigationToCountdown(event)}> See event </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            <a href="/countdown-screen" className="d-none" onClick={singleSpaNavigate} ref={navigation}></a>
            <div className="buttons">
                <a href="/home" className="go-to-home" onClick={singleSpaNavigate}>
                    {" "}
                    Go to HomePage{" "}
                </a>

                <a href="/add-event" className="add-event" onClick={singleSpaNavigate}>
                    {" "}
                    Add new event{" "}
                </a>
            </div>
        </div>
    );
}
