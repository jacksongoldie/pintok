import { useState } from "react"
import Search from "./Search";
import Filter from "./Filter";
import Container from "./Container";

function Home({ videos, onDelete, onUpdate }){

    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    function handleOnChange(e){
        setSearch(e.target.value)
    }

    function handleSelect(e){
        setSelectedCategory(e.target.value)
      }

    //videosToDisplay uses search and filter to send videos array to container
    function videosToDisplay(){
        if(search === '' && selectedCategory === 'all'){
        return videos;
        }
        else if(search !== '' && selectedCategory === 'all'){
        const searchedVideos = videos.filter((video) => 
            (video.comments.toString().toLowerCase().includes(search.toLowerCase()))
            || video.title.toLowerCase().includes(search.toLowerCase()) 
            || video.category.toLowerCase().includes(search.toLowerCase()));
        return searchedVideos;
        }
        else{
        const filteredVideos = videos.filter((video) => video.category === selectedCategory)
        
        const searchedAndFilteredVideos = filteredVideos.filter((video) => 
            (video.comments.toString().toLowerCase().includes(search.toLowerCase()))
            || video.category.toLowerCase().includes(search.toLowerCase()) 
            || video.title.toLowerCase().includes(search.toLowerCase()));
        return searchedAndFilteredVideos;
        }
    }

    return(
        <div>
            <Search search={search} handleOnChange={handleOnChange} />
            <Filter selectedCategory={selectedCategory} handleSelect={handleSelect} />
            <Container videosArray={videosToDisplay()} search={search} onDelete={onDelete} onUpdate={onUpdate} />
        </div>
    )
}

export default Home;