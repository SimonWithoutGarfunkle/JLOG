import  './Card.css';

interface CardProps {
    title: string;
    image: string;
    content: string;
    userId: number;
    publishedAt: string;
    thumbnail: string;
    category: string;
    }


const Card: React.FC<CardProps> = (props) => {
    const publishedDate = new Date(props.publishedAt).toLocaleDateString();

    return (
        <div className="card">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p><span className="category">{props.category}</span>  Le {publishedDate} par utilisateur{props.userId}</p>
        </div>
    );
}

export default Card;