import { useState } from 'react'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { EventsModal } from './components/EventsModal';
import { GlobalStyle } from './styles/global'

export function App() {
    const [ NewEventsModalOpen, setNewEventsModalOpen ] = useState(false)

    function handleOpenModal() {
        setNewEventsModalOpen(true)
    }

    function handleCloseModal() {
        setNewEventsModalOpen(false)
    }

    return (
        <div className="App">
        <Header onOpenEventsModal={handleOpenModal} />
        <Dashboard />
        <EventsModal
            isOpen={NewEventsModalOpen}
            onRequestClose={handleCloseModal}
        />
        <GlobalStyle />
        </div>
    );
}