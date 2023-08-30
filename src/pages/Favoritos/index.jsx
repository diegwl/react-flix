import { useEffect, useState } from 'react';
import { StyledContainer, StyledDetails, StyledFilme, StyledFilmeTitle, StyledLista, StyledOptions, StyledTitle, StyledButton, StyledImg, StyledMain } from './styles';
import { toast } from 'react-toastify';


function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        
        const minhaLista = localStorage.getItem("@reactflix");
        setFilmes(JSON.parse(minhaLista) || []);

    }, []);

    function excluirFilme (id, title) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })
        setFilmes(filtroFilmes || []);
        localStorage.setItem("@reactflix", JSON.stringify(filtroFilmes))
        toast.success(`Filme ${title} removido com sucesso`)
    }

    return(
        <StyledContainer>
            <StyledTitle>Meus Filmes</StyledTitle>

            {filmes.length === 0 && <StyledFilmeTitle>Você não possui nenhum filme salvo :(</StyledFilmeTitle>}

            <StyledLista>
                {filmes.map((item) => {
                    return(
                        <StyledFilme key={item.id}>
                            <StyledMain>
                                <StyledImg src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                                <StyledFilmeTitle>{item.title}</StyledFilmeTitle>
                            </StyledMain>
                            <StyledOptions>
                                <StyledDetails to={`/filme/${item.id}`}>Ver detalhes</StyledDetails>
                                <StyledButton onClick={() => excluirFilme(item.id, item.title)}>Excluir</StyledButton>
                            </StyledOptions>
                        </StyledFilme>
                    )
                })}
            </StyledLista>
        </StyledContainer>
    )
};

export default Favoritos;