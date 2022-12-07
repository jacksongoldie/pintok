import { useState } from 'react';

function Comment({video, onUpdate}){
    
    const [newComment, setNewComment] = useState('')

    function handleChange(e){
        setNewComment(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch(`https://6390cef665ff4183111f9f23.mockapi.io/mock/videos/${video.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {comments: [newComment, ...video.comments ] })
        })
        .then( r => r.json())
        .then((video) => onUpdate(video))
        setNewComment('')
    }

    return(
        <>
        <form onSubmit={handleSubmit} className='w-3/4'>
            <input className='w-2/4 my-2 py-2 border-b-2 border-blue-500 outline-none placeholder-gray-500 font-bold focus:border-blue-700' type="text" placeholder="Add comment..." name='comment' value={newComment} onChange={handleChange}/>
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1'>Add Comment</button>
        </form>
        </>
    )
}

export default Comment;