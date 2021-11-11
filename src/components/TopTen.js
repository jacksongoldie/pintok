import Card from './Card';

function TopTen({ videos, onUpdate }){
    //, onDelete, onUpdate  onDelete={onDelete} 

    const sorted = videos.sort((a, b) => b.likes - a.likes);
    
    const topTen = sorted.slice(0, 10).map((video) => {
        const index = sorted.indexOf(video) + 1;
        return <Card key={video.id} video={video} onUpdate={onUpdate} index={index}/>
    })
    
    return (
        <h1>{topTen}</h1>
    )
}

export default TopTen;