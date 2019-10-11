
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  progress: {
    margin: theme.spacing(2),
  },
}));

export default function SuspenseLoading({height}) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box className={clsx("animated fadeIn pt-3 pb-3 text-center", classes.wrapper)} style={{
      height: height || "auto"
    }}>
      <CircularProgress className={classes.progress} variant="determinate" value={progress} />
    </Box>
  );
}
