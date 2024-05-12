import React from 'react';
import Image from "next/image";

import block1 from './images/block1.svg'
import block2 from './images/block2.svg'
import block3 from './images/block3.svg'
import block4 from './images/block4.svg'

import styles from './Footer.module.scss'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Image src={block1} alt={'InnoLaunch'}/>
            <Image src={block2} alt={'InnoLaunch'}/>
            <Image src={block3} alt={'InnoLaunch'}/>
            <Image src={block4} alt={'InnoLaunch'}/>
        </footer>
    );
};

export default Footer;