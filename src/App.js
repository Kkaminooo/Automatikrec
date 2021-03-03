import logo from './logo.svg';
import './App.css';


function Header(){
    return (
    <div className="App">
        <header className="App-header">
            <header className="header container">
                <div className="header-logo">Tutaj ma być logo</div>
                <ul className="header-list">
                    <li>Wykonawcy</li>
                    <li>O nas</li>
                    <li>Sklep</li>
                    <li>Kontakt</li>
                </ul>
            </header>
        </header>
    </div>
    )
}


// Karuzela


// koniec Karuzeli






function App() {
    return (
       <Header/>
    );
}

export default App;
