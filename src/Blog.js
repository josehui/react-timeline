import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MainFeaturedPost from './MainFeaturedPost';
import Timeline from './Timeline';


const mainFeaturedPost = {
  title: 'Take the cloud platform survey',
  description:
    "This will help us to understanding more on your background and use case",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Take the survey',
};

export default function Blog() {
  
  return (
    <div>
        {/* <Header title="Cloud Platform Onbaording" sections={sections} /> */}
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Timeline /> 
 
      </main>
    </div>
  );
}
