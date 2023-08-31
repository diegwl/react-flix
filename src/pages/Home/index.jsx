import { useEffect, useState } from "react";
import { api, API_KEY } from '../../services/api'
import { StyledListaFilmes, StyledTitulo, StyledContainerTitulo, StyledFilme, StyledImagemFilme, StyledLinkFilme, StyledLoading } from './styles'

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: API_KEY,
                    language: "pt-BR",
                    page: 1,
                },
            })

            setFilmes(response.data.results);
            setLoading(false);
        }

        loadFilmes();

    }, []);

    if(loading) {
        return(
          <StyledLoading /> 
        )
    }

    return(
        <div className="container">
            <StyledListaFilmes>
                {filmes.map((filme) => {
                    return(
                        <StyledFilme key={filme.id}>
                            <StyledContainerTitulo>
                                <StyledTitulo>{filme.title}</StyledTitulo>
                            </StyledContainerTitulo>
                            <StyledImagemFilme src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <StyledLinkFilme to={`/filme/${filme.id}`}>Acessar</StyledLinkFilme>
                        </StyledFilme>
                    )
                })}
            </StyledListaFilmes>
        </div>
    )
}

export default Home;