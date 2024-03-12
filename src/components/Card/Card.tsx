import  './Card.css';

interface CardProps {
    title: string;
    image: string;
    content: string;
    userId: number;
    publishedAt: string;
    thumbnail: string;
    category: string;
    onSelect: () => void;
    }


const Card: React.FC<CardProps> = (props) => {
    const dateParts: string[] = props.publishedAt.split(/\/|\s|:/);
    const publishedDate: string = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T${dateParts[3]}:${dateParts[4]}:${dateParts[5]}`).toLocaleDateString();

    return (
        <div className="card" onClick={props.onSelect}>
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <div className="content"><p>{props.content}</p></div>
            <div className="publishInfo"><span className="category">{props.category}</span>  Le {publishedDate} par utilisateur{props.userId}</div>
        </div>
    );
}

export default Card;