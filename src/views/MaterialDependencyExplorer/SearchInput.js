import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import debounce from 'lodash/debounce';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    maxWidth: '80vw',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchInput({onSearch}) {
  const classes = useStyles();
  const [keyword, setKeyword] = React.useState("");

  const onChange = debounce((e) => {
    setKeyword(e.target.value);
    onSearch && onSearch(e.target.value);
  }, 700)

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search packages..."
        inputProps={{ 'aria-label': 'search packages' }}

        onChange={e => {
          e.persist();
          onChange(e);
        }}
      />
      <IconButton className={classes.iconButton} aria-label="search" onClick={() => onSearch(keyword)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
