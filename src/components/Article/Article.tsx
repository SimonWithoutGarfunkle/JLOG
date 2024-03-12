import React from 'react';
import './Article.css';

interface ArticleProps {
    category: string;
    publishedAt: string;
    userId: number;
    updatedAt: string;
    title: string;
    image: string;
    content: string;
  }

  const Article: React.FC<ArticleProps> = (props) => {
    return (
      <div className="article">
      <article>
        <div className="publishInfo"><span className="category">{props.category}</span>  Publié le {props.publishedAt} par utilisateur{props.userId} - Mis à jour : {props.updatedAt}</div>
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.title} />
        <p>{props.content}</p>
      </article>
      </div>
    );
  }
  
  export default Article;