import React, {createContext, useReducer} from "react";
import {Events} from "./Events";

const EventsContext = createContext({})

const initialState = { Events }

export const EventsProvider = props => {
    function reducer(state, action) {
        switch(action.type) {
            case 'addEvent': {
        //        console.warn(action.payload)
                const event = action.payload
                event.id = Math.random()
                /* desconstrói os eventos que já existem com o ...state.Events 
                e os adiciona numa lista com o evento novo */
                const updatedEventsList = [...state.Events, event]
                return{Events: updatedEventsList} //substitui o conteúdo de Events com a lista atualizada
            }
        }
        return {
            ...state,
        }
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