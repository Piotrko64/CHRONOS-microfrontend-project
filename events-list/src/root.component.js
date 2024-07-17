export default function Root(props) {
    const events = [...JSON.parse(localStorage.getItem("events") || "[]")];
    console.log(events.map((e) => e.name));

    return (
        // <h1>
        //     {events.map((event) => {
        //         return (
        //             <div class="single-event">
        //                 <h4>`${event.name}` </h4>
        //             </div>
        //         );
        //     })}
        // </h1>
        <>
            <h1> Lista wydarzeń </h1>
            <div className="container-events">
                {events.map((e) => {
                    return (
                        <div key={e.name} className="single-event">
                            <h4>{e.name} </h4>
                            <p> {e.description}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
