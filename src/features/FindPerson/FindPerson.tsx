"use client";

import React from 'react';
import InputImage from "@/shared/InputImage/InputImage";
import styles from "./FindPerson.module.scss";
import caution from "./images/caution.svg";
import Image from "next/image";
import InfoTextField from "@/shared/InfoTextField/InfoTextField";
import DateInputField from "@/shared/DateInputField/DateInputField";
import MatchedPerson from "@/entities/MatchedPerson/MatchedPerson";

const FindPerson = () => {
    const handleSubmit = () => {
        console.log('submit')
    }

    return (
        <div className={styles.root}>
            <h1>Знайти людину</h1>
            <div className={styles.caution}>
                <h2>Завантажте фото для порівняння вашої зниклої особи</h2>
                <div className={styles.explicit_content}>
                    <Image src={caution} alt={'caution'}/>
                    <h2>Наступний контент може мати нецензурний характер</h2>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.info}>
                    <div className={styles.input_info_desktop}>
                        <InfoTextField text={'Прізвище'} width={'440px'}/>
                        <InfoTextField text={'Імʼя'} width={'440px'}/>
                        <InfoTextField text={'По батькові'} width={'440px'}/>
                        <DateInputField width={'440px'}/>
                    </div>
                    <div className={styles.input_info_mobile}>
                        <InfoTextField text={'Прізвище'} width={'280px'}/>
                        <InfoTextField text={'Імʼя'} width={'280px'}/>
                        <InfoTextField text={'По батькові'} width={'280px'}/>
                        <DateInputField width={'280px'}/>
                    </div>
                    <InputImage/>
                </div>
                <button>Знайти</button>
            </form>
            <hr/>
            <h1>Збіги</h1>
            <button>Підписатися на пошук у Telegram</button>
            <div className={styles.matches}>
                <MatchedPerson image={''} height={300} width={225}/>
                <MatchedPerson image={''} height={300} width={225}/>
                <MatchedPerson image={''} height={300} width={225}/>
                <MatchedPerson image={''} height={300} width={225}/>
                <MatchedPerson image={''} height={300} width={225}/>
                <MatchedPerson image={''} height={300} width={225}/>

            </div>

        </div>
    );
};

export default FindPerson;