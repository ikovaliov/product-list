import React, {useState, useEffect} from 'react';
import { Link, MenuItem, Typography, Button, Container, Toolbar, IconButton, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom';

import './styles.scss';

export default function Header() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const { mobileView, drawerOpen } = state;

  const headersData = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Products',
      href: '/products',
    },
    {
      label: 'About',
      href: '/about',
    },
  ];

  const logo = (
    <Typography
        variant="h6"
        component={RouterLink}
        to="/"
        className="header--logo"
      >
        LOGO
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          key={label}
          {...{
            key: label,
            color: 'inherit',
            to: href,
            component: RouterLink,
            className: 'header--menu-btn',
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const displayDesktop = () => {
    return (
      <Toolbar>
        {logo}
        <div className="header--navbar">{getMenuButtons()}</div>
      </Toolbar>
    )
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
       {logo}
        <IconButton
         {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
            {...{
              anchor: "right",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };
  

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth <= 991
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  return (
    <header>
      <Container>
         {mobileView ? displayMobile() : displayDesktop()}
      </Container>
    </header>
  );
}
