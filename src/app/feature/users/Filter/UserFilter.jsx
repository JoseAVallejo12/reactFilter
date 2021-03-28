import { Grid, makeStyles,TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { filteredUsers } from '../../../core/redux/actions/usersActions';
import { getUserAPI } from "../../../core/redux/actions/usersActions";
import UserGrid from '../Grid/userGrid';
import './UserFilter.scss';

const useStyles = makeStyles({
  root: {
    margin: '20px 0 20px 0',
  },
});

const UserFilter = (props) => {
  const classes = useStyles();
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
  return (
    <div align="center">
      <Grid item lg={9} md={10} sm={10} xs={10}>
        <h1 align="center">Easy to use, stylish placeholders</h1>
        <TextField
          className={classes.root}
          fullWidth
          variant='outlined'
          label="Type Something to Search"
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