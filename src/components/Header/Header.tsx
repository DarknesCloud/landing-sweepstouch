'use client';
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Sobre Nosotros', href: '/about' },
    { label: 'FAQs', href: '#' },
  ];

  return (
    <AppBar position="static" className={styles.header}>
      <Container maxWidth="xl">
        <Toolbar className={styles.toolbar}>
          {/* Logo */}
          <Box className={styles.logoContainer}>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="SweepsTouch Logo"
                width={160}
                height={40}
                className={styles.logoImage}
                priority
              />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box className={styles.navigation}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={styles.navLink}
              >
                {item.label}
              </Link>
            ))}
          </Box>

          {/* CTA Button */}
          

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            className={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{ paper: styles.drawer }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.label}
              component={Link}
              href={item.href}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
