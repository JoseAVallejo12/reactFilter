import { Grid, TextField, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  input: {
    margin: '0 0 20px 0',
  },
});

const UserFilter = () => {
  const styles = useStyles();
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
        />
      </Grid>
    </div>
  );
};

export default UserFilter;
