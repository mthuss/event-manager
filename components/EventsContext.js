import React, {createContext} from "react";
import Events from "./Events";

const EventsContext = createContext({})

export const EventsProvider = props => {
    return (
        <EventsContext.Provider value={{
            state: {Events}
        }}>
            {props.children}
        </EventsContext.Provider>
    )
}

export default EventsContext;