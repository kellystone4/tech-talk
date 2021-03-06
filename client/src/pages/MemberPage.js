import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import CardUser from "../components/CardUser";
import StickyFooter from "../components/StickyFooter";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#f3e5f5'
    },
}));

function MemberPage() {
    const classes = useStyles();
    const [members, setMembers] = useState([]);

    useEffect(() => {
        loadMembers()
    }, []);

    // Function to retrieve all members' data from the database
    function loadMembers() {
        API.User.getUser()
            .then(res => {
                console.log(res.data)
                setMembers(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className={classes.root}>
            <Navbar />
            <Container>
                <div className={classes.root}>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        {/* Create a card to display each member user's info */}
                        {members.map(member => {
                            return (
                                <Grid item xs={12} sm={6} key={member.id}>
                                    {/* // Pass props to the card component to render each user's individual information */}
                                    <CardUser bio={member.bio} email={member.email} firstName={member.firstName} lastName={member.lastName} loc={member.location} org={member.organization} photo={member.photo} role={member.role} website={member.website} github={member.github}>

                                    </CardUser>
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
            </Container>
            <StickyFooter />

        </div>
    );
};

export default MemberPage;