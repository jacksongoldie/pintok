import { useState, useEffect } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Search from "./Search";
import Filter from "./Filter";
import Container from "./Container";
import AddNew from "./AddNew";

function App() {

  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  function handleOnChange(e){
      setSearch(e.target.value)
  }

  function handleSelect(e){
    setSelectedCategory(e.target.value)
  }

  function getNewVideo(videoInfo){
    setVideos([...videos, videoInfo])
  }

  //videosToDisplay uses search and filter to send videos array to container
  function videosToDisplay(){
    if(search === '' && selectedCategory === 'all'){
      return videos;
    }
    else if(search !== '' && selectedCategory === 'all'){
      const searchedVideos = videos.filter((video) => 
        (video.description.toLowerCase().includes(search.toLowerCase()))
        || video.title.toLowerCase().includes(search.toLowerCase()) 
        || video.category.toLowerCase().includes(search.toLowerCase()));
      return searchedVideos;
    }
    else{
      const filteredVideos = videos.filter((video) => video.category === selectedCategory)
      
      const searchedAndFilteredVideos = filteredVideos.filter((video) => 
        (video.description.toLowerCase().includes(search.toLowerCase()))
        || video.category.toLowerCase().includes(search.toLowerCase()) 
        || video.title.toLowerCase().includes(search.toLowerCase()));
      return searchedAndFilteredVideos;
    }
  }

  useEffect(() => {
    fetch(`http://localhost:3004/videos`)
    .then(r => r.json())
    .then((videos) => setVideos(videos))
  }, [])

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Search search={search} handleOnChange={handleOnChange} />
      <Filter selectedCategory={selectedCategory} handleSelect={handleSelect} />
      <Container videosArray={videosToDisplay()} search={search} />
      <AddNew getNewVideo={getNewVideo} />
    </div>
  );
}

export default App;
