import Card from "./Card";

function Container({ videosArray, onDelete, onUpdate, onEdit }){
    
    const videosToDisplay = videosArray.map((video) => <Card key={video.id} video={video} onDelete={onDelete} onUpdate={onUpdate} />)

    return(
        <div>
            {videosArray[0] ? videosToDisplay : <span className='p-8 text-gray-700 font-bold'>No results.</span>}
        </div>
    )
}

export default Container;