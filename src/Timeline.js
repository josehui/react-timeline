import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Link from '@mui/material/Link';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {TimelineData} from './data/timeline'


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));


let items=TimelineData

export default function CustomizedTimeline() {
  const classes = useStyles();
  const colors = ["grey","primary","secondary"];
  const variants = ["default","outlined"];
  let timelineitems=items.map((item, index, arr)=>{
    let dotColor = colors[index%colors.length]
    let dotVariant = variants[index%variants.length]
    let isLastItem  = index+1 != arr.length
    return (
        <TimelineItem key={index}>
        <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
            Beginner
        </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot color={dotColor} variant={dotVariant}>
            {/* icon */}
            <FastfoodIcon />
        </TimelineDot>
        { isLastItem && <TimelineConnector /> }
        </TimelineSeparator>
        <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            {item.Title}
            </Typography>
            <Typography>{item.Description}</Typography>
            <Link variant="subtitle1" href={item.Link_url}>
              {item.Link_description}
            </Link>
        </Paper>
        </TimelineContent>
        </TimelineItem>
    )
})

  return (
    <Timeline align="alternate">
      {timelineitems}
    </Timeline>
  );
}
