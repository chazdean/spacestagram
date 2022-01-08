import React from 'react';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Loading from './components/Loading';
import useApplicationData from './hooks/useApplicationData';
import './App.css';

function App() {
  const { photos, loading } = useApplicationData();
  
  const posts = photos.map((photo) => {
    return (
      <Post
        key={photo.id}
        id={photo.id}
        img={photo.img_src}
        roverName={photo.rover.name}
        cameraName={photo.camera.full_name}
        date={photo.earth_date}
      />
    );
  }) 

  return (
    <main className="layout">
      {console.log(posts)}
      <Navbar />
      <section className="layout__feed">
        { loading ? 
        <Loading 
          loading={loading}
        /> : posts}
      </section>
    </main>
  );
}

export default App;
