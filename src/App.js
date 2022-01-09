import React from 'react';
import Post from './components/Post';
import { Page, Frame, Loading } from '@shopify/polaris';
import useApplicationData from './hooks/useApplicationData';

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
     loading ? 
        <div style={{height: '100px'}}>
            <Frame>
                <Loading />
            </Frame>
        </div>
        : 
        <Page
            narrowWidth
            title="Spacestagram"
            subtitle="Brought to you by NASA's Mars Rover image API"
            >
            {posts}
        </Page>   
  );
}

export default App;
