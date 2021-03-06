import React from 'react';
import { matchPath, withRouter, Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LinkIcon from '@material-ui/icons/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = (props) => makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    boxShadow: '0px 2px 5px -4px grey'
  },
  paper: {
    padding: theme.spacing(1, 3),
    borderRadius: 0,
  },
  activeLink: {
    fontWeight: "700",
    color: props.appBar ? "#fff" : "inherit"
  },
  link: {
    textDecoration: "none",
    color: props.appBar ? "#fff" : "inherit",
    "&:hover": {
      textDecoration: "none",
      color: props.appBar ? "#fff" : "inherit",
    }
  },
  separator: {
    color: (props.appBar ? "#fff" : "inherit")
  }
}));

function getPaths(pathname) {
  let paths = ['/'];

  if (pathname === '/') return paths;

  pathname.split('/').reduce((prev, curr) => {
    let currPath = prev + '/' + curr;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

function findRouteName(url, routes = []) {
  const aroute = routes.find((route) => {
    return (0, matchPath)(url, { path: route.path, exact: route.exact });
  });
  return aroute && aroute.name ? aroute.name : null;
};

const CustomSeparator = (props) => {
  const classes = useStyles(props)();

  const { location, appRoutes, appBar } = props;
  const paths = getPaths(location.pathname);

  const items = paths.map((path, i) => {
    const routeName = findRouteName(path, appRoutes);

    if (!routeName) return null;

    if (i === paths.length - 1) {
      return <Typography color="textPrimary" key={i} className={classes.activeLink}>{routeName}</Typography>
    }
    return <RouterLink to={path} className={classes.link} key={i}>
      {routeName}
    </RouterLink>
  });

  let Component = (
    <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" className={classes.separator}/>}>
      {items.filter(o => o)}
    </Breadcrumbs>
  );

  if (appBar) return Component;

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        {Component}
      </Paper>
    </div>
  );
}

export default withRouter(CustomSeparator);
