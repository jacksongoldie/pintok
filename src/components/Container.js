import Card from "./Card";

function Container({ videosArray }){
    
    const videosToDisplay = videosArray.map((video) => <Card key={video.id} video={video} />)




    return(
        <div className="container-div">
            {videosToDisplay}
        </div>
    )
}

export default Container;