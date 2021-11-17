import ReactPlayer from 'react-player';
import Comment from './Comment';

function Card({ video, onDelete, onUpdate, index }){
    //should use state instead of ++video.likes ??

    function handleLike(){
        fetch(`http://localhost:3004/videos/${video.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {likes: ++video.likes })
        })
        .then( r => r.json())
        .then((video) => onUpdate(video))
    }


    function handleDelete(){
        fetch(`http://localhost:3004/videos/${video.id}`,{
            method: 'DELETE',
        })
        .then(r => r.json())
        .then(() => onDelete(video))
}

    function handleCommentDelete(id, comment){
        const index = video.comments.indexOf(comment);
        const updatedComments = video.comments;
        updatedComments.splice(index, 1);

        fetch(`http://localhost:3004/videos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {comments: updatedComments })
        })
        .then( r => r.json())
        .then((video) => onUpdate(video))
    }


    const comments = video.comments.map((comment) => {
        const key = Math.random();
    return (
        <div key={key}>
            <li>
                {comment} 
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-1 rounded mx-1' onClick={() => handleCommentDelete(video.id, comment)}>
                x</button>
            </li>
        </div>
    )})

   
    return(
        <div className='bg-blue-300 py-6 flex items-center justify-center'>
            <div className='bg-white p-8 rounded-lg shadow-2xl'>
                <h1 className='font-bold text-xl leading-tight text-gray-900 pb-4'>{video.title}</h1>
                {index ?
                <p className='font-bold text-lg text-gray-700 pb-2'># {index} <br /> ❤️ {video.likes} likes</p> :
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleLike}>{video.likes > 0 ? `❤️ ${video.likes} likes` : `♡ ${video.likes} likes`}</button>}
                {index ? 
                null :
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  mx-1' onClick={handleDelete}>Delete Video</button>}
                <div className='py-4'>
                    <ReactPlayer controls url={video.video} />
                </div>
                <Comment video={video} onUpdate={onUpdate} />
                <ul className='font-bold text-gray-400 pb-4'>Comments: {comments}</ul>
            </div>
            
        </div>
    )
}

export default Card;