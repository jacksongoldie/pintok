import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Home from './Home';
import AddNew from "./AddNew";
import TopTen from "./TopTen";

function App() {

  const [videos, setVideos] = useState([]);

  function getNewVideo(videoInfo){
    setVideos([...videos, videoInfo])
  }

  function onDelete(deletedVideo){
    const updatedVideos = videos.filter((video) => video !== deletedVideo)
    setVideos(updatedVideos)
  }

  function onUpdate(updatedVideo){
    const updatedVideos = videos.map((video) => {
      if(video.id === updatedVideo.id){
        return updatedVideo;
      }
      else{
        return video;
      }
    })
    setVideos(updatedVideos)
  }

  useEffect(() => {
    fetch(`http://localhost:3004/videos`)
    .then(r => r.json())
    .then((videos) => setVideos(videos))
    .catch(error => window.alert('Is server connected?'))
  }, [])

  return (
    <div className='items-center justify-center'>
      <Header />
      <NavBar />
      <Switch>
          <Route exact path='/'>
            <Home videos={videos} onDelete={onDelete} onUpdate={onUpdate} />
          </Route>
          <Route path='/addnew'>
            <AddNew getNewVideo={getNewVideo} videos={videos} onDelete={onDelete} onUpdate={onUpdate} />
          </Route>
          <Route path='/topten'>
            <TopTen videos={videos} onUpdate={onUpdate}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
