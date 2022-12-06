import { Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import LocationInformation from '../../components/LocationInformation';
import PaperInformation from '../../components/PaperInformation';

export const Description = (props) => {
  const { userState } = props;
  let { bio } = userState;
  if (bio === null) {
    bio =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mi ut libero faucibus porttitor. Nam faucibus, risus quis blandit sodales, libero ante maximus lacus, ut lobortis nunc mi sit amet ex. Nulla facilisi.';
  }

  return (
    <>
      <Stack sx={{ justifyContent: 'center' }}>
        <Typography variant="body1">{bio}</Typography>
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  );
};
