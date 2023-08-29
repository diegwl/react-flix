import './styles.css';
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link className='logo' to={'/'}>React Flix</Link>
            <Link className='favoritos' to={'/favoritos'}>Meus Filmes</Link>
        </header>
    )
}

export default Header;