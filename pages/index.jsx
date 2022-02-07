import React from 'react';
import Head from 'next/Head'
import { Container, Grid } from '@mui/material'

function Index() {
  return (
    <>
      <Head>
        <title>Escritório da Benigna</title>
      </Head>

      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12}>
            Home
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Index;