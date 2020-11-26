import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Paper, Grid } from '@material-ui/core';
// import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import WorkOutlineSharpIcon from '@material-ui/icons/WorkOutlineSharp';
import ComputerIcon from '@material-ui/icons/Computer';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import "./style.css";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

export default function UserCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            {/* User Image */}
            <CardMedia
                className={classes.media}
                image="https://i.pinimg.com/originals/2e/2f/ac/2e2fac9d4a392456e511345021592dd2.jpg"
                title="Paella dish"
            />
            {/* User name, title, location */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Firstname Lastname
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Software Engineer
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <LocationOnSharpIcon className="icon" />San Francisco
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Grid container spacing={1}>
                        {/* Bio */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper} ><AccountCircleSharpIcon className="icon" />Hi there! I'm a software engineer and student at UCB.</Paper>
                        </Grid>
                        {/* Org */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper} ><WorkOutlineSharpIcon className="icon" />UC Berkeley</Paper>
                        </Grid>
                        {/* GitHub */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper} ><ComputerIcon className="icon" /><a href="#">github.com</a></Paper>
                        </Grid>
                        {/* Website */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper} ><LanguageSharpIcon className="icon" /><a href="#">website.com</a></Paper>
                        </Grid>
                    </Grid>
                </CardContent>
            </Collapse >
        </Card >
    );
}