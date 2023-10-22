import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import { useRouter } from 'next/router';
import styles from '../styles/mainContiner.module.scss'

const NavBar = () => {
  const router = useRouter();

  // Extract the route path and convert it to the corresponding key
  const routeToKey = {
    '/home': 'home',
    '/about': 'about',
    '/contact': 'contact',
  };

  const selectedKey = routeToKey[router.pathname] || 'home'; // Default to 'home' if the route is not matched

  return (
    <Menu mode="horizontal" className={styles.menuBar} selectedKeys={[selectedKey]}>
      <Menu.Item key="home">
        <Link href="/home">
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link href="/about">
          About
        </Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link href="/contact">
          Contact
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
