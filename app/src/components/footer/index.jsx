import React from 'react';
import { Grid, Toolbar, Typography, Container, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './styles.scss';

export default function Footer() {
  return (
    <footer>
      <Container>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Typography variant="body1" color="inherit">
                © {new Date().getFullYear()} igor
              </Typography>
            </Grid>
            <Grid item xs={6} className="footer--social">
              <Link
                href="https://github.com/ikovaliov"
                rel="noreferrer"
                target="_blank"
                color="inherit"
              >
                <GitHubIcon />
              </Link>
              <Link
                href="hhttps://www.linkedin.com/in/ikovaliov/"
                rel="noreferrer"
                target="_blank"
                color="inherit"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://www.instagram.com/ikovaliov_/"
                rel="noreferrer"
                target="_blank"
                color="inherit"
              >
                <InstagramIcon />
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </footer>
  );
}
