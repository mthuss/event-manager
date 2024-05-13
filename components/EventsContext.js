import React, {createContext, useEffect, useReducer} from "react";
import {Events} from "./Events";
import AsyncStorage from '@react-native-async-storage/async-storage'

const EventsContext = createContext({})

// const initialState = { Events }
const initialState = {Events: []}

async function saveEvents(events) {
    try {
        //adiciona no BD os eventos com a chave "eventos"
        await AsyncStorage.setItem('events', JSON.stringify(events))
    } catch (e) {
        console.error("Erro ao salvar eventos: ", e)
    }
}

async function fetchEvents(){
    try {
        /* pega do BD o conjunto de itens identificado pela chave 'events',
        que definimos na função acima */
        const events = await AsyncStorage.getItem('events')
        /* caso haja algum evento salvo no banco de dados, 
        estes são carregados no estado Events. Caso contrário,
        é carregada uma lista vazia*/
        return{ Events: events ? JSON.parse(events) : [] }
    } catch (e) {
        console.error("Erro ao carregar os eventos: ", e)
        return{Events: []}
    }
}

export const EventsProvider = props => {
    /* esta função será acionada quando o EventsProvider for carregado.
    Assim, será executada assim que o aplicativo é aberto */
    useEffect(() => {
        async function fetchData() {
            const fetchedEvents = await fetchEvents()
            if(fetchedEvents.Events.length !== 0)
                dispatch({type: "loadEvents", payload: fetchedEvents})
        }
        fetchData()
    }, [])

    function reducer(state, action) {
        switch(action.type) {
            case 'addEvent': {
                const event = action.payload
                event.id = Math.random()
                /* desconstrói os eventos que já existem com o ...state.Events 
                e os adiciona numa lista com o evento novo */
                const updatedEventsList = [...state.Events, event]
                saveEvents(updatedEventsList)
                return{Events: updatedEventsList} //substitui o conteúdo de Events com a lista atualizada
            }
            case 'loadEvents': {
                const loadedEvents = action.payload.Events
                return {Events: loadedEvents}
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
        <EventsContext.Provider value={{state, dispatch}}>
            {props.children}
        </EventsContext.Provider>
    )
}

export default EventsContext;