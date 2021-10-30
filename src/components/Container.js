import Card from "./Card";

function Container({ videosArray, onDelete, onUpdate }){
    
    const videosToDisplay = videosArray.map((video) => <Card key={video.id} video={video} onDelete={onDelete} onUpdate={onUpdate} />)

    return(
        <div className="container-div">
            {videosArray[0] ? videosToDisplay : "No results."}
        </div>
    )
}

export default Container;