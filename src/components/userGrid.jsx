import { Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";

const UserGrid = (props) => {
  // console.log(props)
  return (
    <Container>
      <Grid container wrap='wrap' direction='row' spacing={5}>
        {!props.filter
          ? props.users.map((user) => (
              <Grid
                key={user.id}
                container
                justify='center'
                alignItems='center'
                item lg={3} md={4} sm={6} xs={12}
              >
                <Paper><UserCard user={user} /></Paper>
              </Grid>
            ))
          : props.userFilter.map((user) => (
            <Grid
              key={user.id}
              container
              justify='center'
              alignItems='center'
              item lg={3} md={4} sm={6} xs={12}
            >
              <Paper><UserCard user={user} /></Paper>
            </Grid>
          ))}
        </Grid>
    </Container>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, {})(UserGrid);
