import { useState } from 'react'
import './App.css'
import MovieList from "./components/MovieList.jsx";
import MovieDetail from "./components/MovieDetail.jsx";
import MenuLanches from "./components/MenuLanches.jsx";
import img1 from "./assets/imagens/amsterdam.jpg";
import img2 from "./assets/imagens/nadaDeNovoNoFront.jpg";
import img3 from "./assets/imagens/paingain.jpg";

function App() {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Amsterdam",
            cover: img1,
            description: "Na década de 30, quando um trio de amigos (Christian Bale, Margot Robbie e John David Washington) é confundido com um grupo criminoso, essa turma cruza o caminho de uma organização secreta e se mete numa avalanche de enrascadas para tentar provar sua inocência.",
            duration: "2h 14m"
        },
        {
            id: 2,
            title: "Nada de Novo no Front",
            cover: img2,
            description: "Enquanto os burocratas decidem se acabam ou não com o confronto, jovens continuam sendo enviados diariamente aos campos de batalha. Nesse contexto, alguns jovens alemães se alistam para provar seu valor e logo descobrir que esse negócio de guerra não é brincadeira.",
            duration: "2h 27m"
        },
        {
            id: 3,
            title: "Sem Dor, Sem Ganho",
            cover: img3,
            description: "Daniel Lugo (Mark Wahlberg) é um instrutor de fisiculturismo na Flórida que, cansado de ser só mais um, decide montar um plano ousado para ficar rico. Ele recruta seus amigos malucos, Adrian (Anthony Mackie) e Paul (Dwayne Johnson), para sequestrar e extorquir um cliente rico da academia. ",
            duration: "2h 09m"
        }

    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showLanches, setShowLanches] = useState(false);
    const [selectedLanche, setSelectedLanche] = useState(null);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
        setShowLanches(false); // Garante que ao selecionar um novo filme, o menu de lanches não seja exibido imediatamente
    };

    const handleSelectMovie = () => {
        setShowLanches(true); // Ao clicar em "Selecionar", mostramos o menu de lanches
    };

    const handleLancheClick = (lanche) => {
        setSelectedLanche(lanche);
    };


    const handleBack = () => {
        if (selectedLanche) {
            setSelectedLanche(null);
        } else if (showLanches) {
            setShowLanches(false);
        } else if (selectedMovie) {
            setSelectedMovie(null);
        }
    };

    return (
        <div className='app'>
            <h1>R&B Cine House</h1>
            {selectedLanche ? (
                <div className="final-screen">
                    <h2>Você escolheu {selectedMovie.title} e o lanche {selectedLanche.icon}!</h2>
                    <h3>{selectedLanche.descricao}</h3>
                    <img src={selectedMovie.cover} alt={selectedMovie.title} className="movie-image"/>
                    <a
                        href={`https://wa.me/5563984299228?text=Eu%20escolhi%20o%20filme%20${encodeURIComponent(selectedMovie.title)}%20e%20o%20lanche%20${encodeURIComponent(selectedLanche.name)}!`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>Confirmar</button>
                    </a>
                    <button onClick={handleBack}>Voltar</button>
                </div>
            ) : showLanches ? (
                <MenuLanches selectedMovie={selectedMovie} onLancheClick={handleLancheClick} onBack={handleBack}/>
            ) : selectedMovie ? (
                <MovieDetail movie={selectedMovie} onSelect={handleSelectMovie} onBack={handleBack}/>
            ) : (
                <MovieList movies={movies} setSelectedMovie={handleMovieClick}/>
            )}
        </div>
    );
}

export default App
