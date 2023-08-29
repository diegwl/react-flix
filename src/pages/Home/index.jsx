import { useEffect, useState } from "react";
import { api, API_KEY } from '../../services/api'
import { Link } from 'react-router-dom'
import './styles.css'

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
          <div className="loading">
            <h2>Carregando Filmes...</h2>
          </div>  
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <div className="title">
                                <strong>{filme.title}</strong>
                            </div>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;