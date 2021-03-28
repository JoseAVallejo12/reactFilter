import { Container, Grid, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import getUserAPI from "../app/redux/actions/usersActions";
import UserCard from "./UserCard";

const UserGrid = (props) => {

  useEffect(() => {
    props.getUserAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Grid container wrap='wrap' direction='row' spacing={5}>
        {props.users.length
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
          : ""}
        </Grid>
    </Container>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, { getUserAPI })(UserGrid);
