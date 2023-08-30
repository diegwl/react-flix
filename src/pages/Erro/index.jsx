import { Link } from "react-router-dom";
import { StyledErro, StyledTitle, StyledLink } from './styles'

function Erro(){
    return(
        <StyledErro>
            <StyledTitle>404</StyledTitle>
            <h2>Página não encontrada!</h2>
            <StyledLink to="/">Veja todos os filmes!</StyledLink>
        </StyledErro>
    )
}

export default Erro;