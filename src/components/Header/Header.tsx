import React from 'react';
import './Header.css';

interface HeaderProps {
    onUserClick: () => void;
    onRandomArticle: () => void;
    onAboutClick: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className="header">
            <header>
                <h1>Le JLOG</h1>
                <p>Un JLOG, c'est comme un Blog mais pour Jacky !</p>
            </header>
            <menu>
                <button onClick={props.onUserClick}>Accueil</button>
                <button onClick={props.onRandomArticle}>Article surprise</button>
                <button onClick={props.onAboutClick}>À propos</button>
            </menu>
        </div>
    );
    }

export default Header;