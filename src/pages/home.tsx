import React from 'react'
import { NextPage } from 'next';

import styles from 'styles/home.module.scss';
import { HomeHOC } from 'HOC';

const Home:NextPage = () => {
    
return (
    <div className={styles.main_home_container}>
        <HomeHOC/>
    </div>
  );
}

export default Home;