import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function MaterialFooter({color = "textSecondary"}) {
  return (
    <Typography variant="body2" color={color} align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Dependency Explorer
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Built with '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI.
      </Link>
    </Typography>
  );
}

export default MaterialFooter;
