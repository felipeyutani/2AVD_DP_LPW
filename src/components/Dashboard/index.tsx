import { Container } from "./styles";
import { useEffect, useState } from 'react'
import api from '../../services/api'
import likeImg from '../../assets/like.svg'
import dislikeImg from '../../assets/dislike.svg'

interface EventsProps {
    id: string;
    nomeevento: string;
    local: string;
    diasemana: string;
    horario: string;
    like: number;
    dislike: number;
}

export function Dashboard(){
    const [eventos, setEventos] = useState<EventsProps[]>([])

    useEffect(() => {
        ListarEventos()
    }, [])
    
    async function ListarEventos() {
        const ListEventos = await api.get('/events')
        setEventos(ListEventos.data)
    }
    
    async function DeleteEventos(id: string) {
        await api.delete(`/events/${id}`)
        alert('Dados excluidos com sucesso!!')
        setEventos(eventos.filter(event => event.id !== id))
    }

    async function Like(id: string) {
        await api.post(`/events/like/${id}`)
            .then(response => {
                const data = eventos.map(event => {
                    let reactionNumbers = event;

                    if(event.id === id) {
                        reactionNumbers = response.data;
                    }

                    return {
                        ...reactionNumbers
                    }
                })

                setEventos(data);
            })
    }

    async function Dislike(id: string) {
        await api.post(`/events/dislike/${id}`)
            .then(response => {
                const data = eventos.map(event => {
                    let reactionNumbers = event;

                    if(event.id === id) {
                        reactionNumbers = response.data;
                    }

                    return {
                        ...reactionNumbers
                    }
                })
                
                setEventos(data);
            })
    }
    
    return(
        <Container>
        <ul>
          {eventos.map((event, index) =>
            <li key={index.toString()}>
                <h2>{event.nomeevento} - {event.local}</h2>
                <span>{`Evento: ${event.nomeevento} `}</span>
                <span>{`Local: ${event.local} `}</span>
                <span>{`Dia da Semana: ${event.diasemana} `}</span>
                <span>{`Horário: ${event.horario} `}</span>
                <button type="button" name="like" onClick={() => Like(event.id)}>
                    <img src={likeImg} alt="like event" width="25" />
                    {event.like}</button>
                <button type="button" name="deslike" onClick={() => Dislike(event.id)}>
                    <img src={dislikeImg} alt="dislike event" width="25" />
                    {event.dislike}</button>
                <a href='/'><button type="button" onClick={() => DeleteEventos(event.id)}>Excluir</button></a>
            </li>
          )}
        </ul>
        </Container>
    )
}
