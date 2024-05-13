import React, {createContext, useReducer} from "react";
import {Events} from "./Events";

const EventsContext = createContext({})

const initialState = { Events }

export const EventsProvider = props => {
    function reducer(state, action) {
        console.warn(action)
        return state
    }

    /*cria o state(que receberá o valor de initialState) e o dispatcher,
    colocando-os no contexto para que estes possam ser utilizados
    globalmente por seus filhos*/
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <EventsContext.Provider value={{
            state, dispatch
        }}>
            {props.children}
        </EventsContext.Provider>
    )
}

export default EventsContext;