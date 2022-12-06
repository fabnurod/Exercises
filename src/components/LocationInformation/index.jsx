import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguajeIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = (props) => {
  const { userState } = props;
  let { location, twitter_username, company, blog } = userState;
  twitter_username = `@${twitter_username || 'No available'}`;
  location = location || 'No available';
  company = company || 'No available';
  blog = blog || 'No available';

  return (
    <Grid container>
      <Grid item xs={3}>
        <Stack>
          <LocationOnIcon />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>

      <Grid item xs={3}>
        <Stack>
          <TwitterIcon />
          <Typography>{twitter_username}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack>
          <LanguajeIcon />
          <Typography>{blog}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack>
          <BusinessIcon />
          <Typography>{company}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
