import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenEventsModal: () => void;
}

export function Header({ onOpenEventsModal }: HeaderProps) {
  return (
		<Container>
            <Content>
                <img src={logoImg} alt="eventos" />
                <button type="button" onClick={onOpenEventsModal}>
                Incluir Evento
                </button>
            </Content>
		</Container>
    )
}