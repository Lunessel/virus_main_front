"use client";

import React, {useState} from 'react';
import styles from "./MatchedPerson.module.scss";
import Image from "next/image";

const MatchedPerson = ({image, height, width, ...props}:{image: string, height: number, width: number}) => {
    const [goOver, setGoOver] = useState(false);
    return (
        <div className={styles.root}>
            <div className={styles.person}>
                <Image src={image} alt={'Matched person'} height={height} width={width}/>
            </div>
            <div className={styles.buttons}>
                <button onClick={() => setGoOver(true)}>Перейти</button>
            </div>
        </div>
    );
};

export default MatchedPerson;