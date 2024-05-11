import React from 'react';
import Image from "next/image";
import logo from './images/logo.svg'

import styles from './NavBar.module.scss'
const NavBar = () => {
    return (
        <nav className={styles.root}>

            <Image src={logo} alt={'Seeker'}/>
            <div>
                <div className={styles.languages}>
                    <h5>UA/EN</h5>
                </div>
                <div className={styles.navigation}>
                    <h4>Допомогти знайти</h4>
                    <div/>
                    <h4>Знайти людину</h4>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;