import ReactPlayer from 'react-player';
//import { useState } from 'react';

function Card({ video, onDelete, onUpdate }){

    //const [likes, setLikes] = useState(0);

    function handleLike(){
        fetch(`http://localhost:3004/videos/${video.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {likes: ++video.likes, })
        })
        .then( r => r.json())
        //set state of videos to get updated item back from fetch
        .then((video) => onUpdate(video))
    }


    function handleDelete(){
        fetch(`http://localhost:3004/videos/${video.id}`,{
            method: 'DELETE',
        })
        .then(r => r.json())
        .then(() => onDelete(video))
}


    return(
        <div className="Card">
            <h1>{video.title}</h1>
            <p>Video notes: {video.notes}</p>
            <span onClick={handleLike}>{video.likes > 0 ? `❤️ ${video.likes} likes` : `♡${video.likes} likes`}</span>
            <ReactPlayer controls url={video.video} />
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Card;