import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import addImg from '../../assets/add.svg'

interface HeaderProps {
  onOpenEventsModal: () => void;
}

export function Header({ onOpenEventsModal }: HeaderProps) {
  return (
		<Container>
            <Content>
                <img src={logoImg} alt="eventos" width="300" />
                    <img src={addImg} alt="Add Eventos" onClick={onOpenEventsModal} width="80" />
            </Content>
		</Container>
    )
}