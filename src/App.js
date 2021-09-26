import * as React from 'react';
import Container from '@mui/material/Container';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './Blog';
import Header from './Header';
import Links from './Links'
import About from './About'
import Architecture from './Architecture'
import { createTheme, ThemeProvider } from '@mui/material/styles';



const sections = [
  { title: 'Home', url: '/home' },
  { title: 'Links', url: '/links' },
  { title: 'Architecture Center', url: '/architectures' },
  { title: 'About us', url: '/about' }
];

const theme = createTheme();


export default function App() {
  return (
    <Container maxWidth="lg">
      <Router>
        <div>
          {/* <hr /> */}
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Header title="Cloud Platform Onboarding" sections={sections} />
          <Switch>
            <Route path="/links">
              <Links />
            </Route>
            <Route path="/architectures">
              <Architecture />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Blog />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer
        title=""
        description="To the cloud"
      />
    
    </Container>



  );
}
