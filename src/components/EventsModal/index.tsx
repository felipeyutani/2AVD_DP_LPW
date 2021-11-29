import { useState, FormEvent } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { Container } from './styles'
import api from '../../services/api'

interface NewEventsModalOpen {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function EventsModal({ isOpen, onRequestClose }: NewEventsModalOpen) {
    const [nomeevento, setNomeevento] = useState('')
    const [local, setLocal] = useState('')
    const [diasemana, setDiasemana] = useState('')
    const [horario, setHorario] = useState('')

    async function AddEventos(event: FormEvent) {
        event.preventDefault()
    
        const data = {
          nomeevento,
          local,
          diasemana,
          horario,
        }
    
        await api.post('/events', data)
    
        setNomeevento('')
        setLocal('')
        setDiasemana('')
        setHorario('')
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
        <button type="button" 
            onClick={onRequestClose} 
            className="react-modal-close"
        >
            <img src={closeImg} alt="Fechar Modal" />
        </button>
        <Container onSubmit={AddEventos}>
            <input 
                placeholder="Nome do evento"
                type="text"
                value={nomeevento}
                onChange={event => setNomeevento(event.target.value)}
            />

            <input 
                placeholder="Local"
                type="text"
                value={local}
                onChange={event => setLocal(event.target.value)}
            />

            <input 
                placeholder="Dia da semana"
                type="text"
                value={diasemana}
                onChange={event => setDiasemana(event.target.value)}
            />

            <input 
                placeholder="Horário"
                type="text"
                value={horario}
                onChange={event => setHorario(event.target.value)}
            />

            <button type="submit">
                Cadastrar
            </button>
        </Container>
    </Modal>
    )
}