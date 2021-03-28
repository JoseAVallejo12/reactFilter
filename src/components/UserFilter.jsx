import { Grid, TextField, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { filteredUsers } from '../app/redux/actions/usersActions';
import { getUserAPI } from "../app/redux/actions/usersActions";
import UserGrid from './userGrid';

const useStyles = makeStyles({
  input: {
    margin: '0 0 20px 0',
  },
});

const UserFilter = (props) => {
  const styles = useStyles();
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    props.getUserAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = ({ target }) => {
    if (target.value.length !== 0) {
      setFilter(true)
      props.filteredUsers(props.users, target.value)
    } else {
      setFilter(false)
    }
  }
  console.log(props)
  return (
    <div align="center">
      <Grid item lg={9} md={10} sm={10} xs={10}>
        <h1 align="center">Easy to use, stylish placeholders</h1>
        <h2 align="center">Search</h2>
        <TextField
          className={styles.input}
          fullWidth
          variant="outlined"
          label="type something to search"
          onChange={ handleChange }
        />
      </Grid>
      <UserGrid filter={filter} />
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer
}

export default connect(mapStateToProps, {filteredUsers, getUserAPI})(UserFilter);