import React from 'react'
import { NextPage } from 'next';

import styles from 'styles/home.module.scss';
import { HomeHOC } from 'HOC';
import storage from 'store/storage';

const Home:NextPage = () => {

  const getauth = async () => {
    await storage.setItem("test", "this is a simple test from markos bahgat");
    const Test = await storage.getItem('persist:root');
    Test && console.log(JSON.parse(JSON.parse(Test).fetch));
    return Test
  }
  console.log(getauth());

return (
    <div className={styles.main_home_container}>
        <HomeHOC/>
    </div>
  );
}

export default Home;