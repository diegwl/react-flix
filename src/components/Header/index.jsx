import { StyledHeader, StyledLogo, StyledFavoritos } from './styles';

function Header(){
    return(
        <StyledHeader>
            <StyledLogo to={'/'}>React Flix</StyledLogo>
            <StyledFavoritos to={'/favoritos'}>Meus Filmes</StyledFavoritos>
        </StyledHeader>
    )
}

export default Header;