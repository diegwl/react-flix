import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { StyledFilmeInfo, StyledImg, StyledSinopse, StyledSinopseTitle, StyledTitle, StyledButton, StyledButtonLink } from './styles'

import { api, API_KEY } from '../../services/api'
import { toast } from 'react-toastify';

function Filme(){
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [trailer, setTrailer] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: API_KEY,
                    language: 'pt-BR',
                },
            })
            .then((response) => {
                setFilme(response.data);
                setLoading(false);
            })
            .catch(() => {
                navigate("/", { replace: true })
                return;
            })
        }

        async function loadTrailer() {
            await api.get(`/movie/${id}/videos`, {
                params: {
                    api_key: API_KEY,
                    language: 'pt-BR',
                },
            })
            .then((response) => {
                setTrailer(response.data.results[0].key)
            })
        }

        loadFilme();
        loadTrailer();

        return () => {
            
        }
    }, [id, navigate]);

    function salvarFilme() {
        const minhaLista = localStorage.getItem('@reactflix');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme) {
            toast.warn("Esse filme já está na sua lista!")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@reactflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!")
        return;
    }

    if(loading){
        return(
            <StyledFilmeInfo>
                <h1>Carregando detalhes...</h1>
            </StyledFilmeInfo>
        )
    }

    return(
        <StyledFilmeInfo>
            <StyledTitle>{filme.title}</StyledTitle>
            <StyledImg src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            
            <StyledSinopseTitle>Sinopse</StyledSinopseTitle>
            <StyledSinopse>{filme.overview}</StyledSinopse>
            <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>

            <div>
                <StyledButton onClick={salvarFilme}>Salvar</StyledButton>
                <StyledButton>
                    <StyledButtonLink target='blank' rel="external" href={`https://www.youtube.com/watch?v=${trailer}`}>
                        Trailer
                    </StyledButtonLink>
                </StyledButton>
            </div>
        </StyledFilmeInfo>
    )
}

export default Filme;