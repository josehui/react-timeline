import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import { styled } from '@mui/material/styles';
import About from './About'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

export default () => {
  return (
    <Router>
        <Route path={`/architectures/:postId`}>
            <About />
        </Route>
        <Route path="/">
            <Box sx={{ flexGrow: 1, maxWidth: 'lg', margin: 'auto'}}>
                <Grid container spacing={5} alignItems="center" >
                    <Grid item >
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.theconversation.com/files/18108/original/rffw88nr-1354076846.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Route>
    </Router>
    
  );
}
