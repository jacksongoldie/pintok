import ReactPlayer from 'react-player';

function Card({ video }){



    return(
        <div className="Card">
            <h1>{video.title}</h1>
            <ReactPlayer controls url={video.video} />
        </div>
    )
}

export default Card;