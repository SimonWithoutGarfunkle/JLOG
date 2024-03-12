import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <div className="header">
            <header>
                <h1>Le JLOG</h1>
                <p>Un JLOG, c'est comme un Blog mais pour Jacky !</p>
            </header>
            <menu>
                <button >Accueil</button>
                <button>Article surprise</button>
                <button>À propos</button>
            </menu>
        </div>
    );
    }

export default Header;