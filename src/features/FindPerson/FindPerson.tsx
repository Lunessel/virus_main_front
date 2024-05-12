"use client";

import React, {useState} from 'react';
import InputImage from "@/shared/InputImage/InputImage";
import styles from "./FindPerson.module.scss";
import caution from "./images/caution.svg";
import Image from "next/image";
import InfoTextField from "@/shared/InfoTextField/InfoTextField";
import DateInputField from "@/shared/DateInputField/DateInputField";
import MatchedPerson from "@/entities/MatchedPerson/MatchedPerson";
import {IPerson, ISeekPeople} from "@/types/types";

const baseURL = "https://5284-31-144-168-144.ngrok-free.app/api/v1"
const FindPerson = () => {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [father_name, setFather_name] = useState()
    const [date_of_birth, setDate_of_birth] = useState('2024-05-11')
    const [missing_id, setMissing_id] = useState<IPerson>()
    const [image, setImage] = useState<Blob>()
    const [matchedList, setMatchedList] = useState<ISeekPeople[]>()
    const handleSubmit = (e:any) => {
        console.log(name)
        console.log(surname)
        console.log(father_name)
        console.log(date_of_birth)
        e.preventDefault()
        fetch(
            `https://5284-31-144-168-144.ngrok-free.app/api/v1/missings?name=${'Микола'}&surname=${'Парасюк'}&father_name=${'Іванович'}&date_of_birth=${'2024-05-11'}`,
            {
                method: "GET"
            }
        ).then((res) => res.json()).then((data) => {
            console.log(data)
            setMissing_id(data)

        }).catch(reason => console.log(reason))
        console.log(missing_id)
        if (!missing_id) {
            fetch(
                `${baseURL}/missings`,
                {
                    method: "POST",
                    body:JSON.stringify({
                        name: name,
                        surname: surname,
                        father_name: father_name,
                        date_of_birth: date_of_birth
                    })
                }
            ).then((res) => res.json()).then((data) => {
                setMissing_id(data)

            }).catch(reason => console.log(reason))
        }

        fetch(
            `${baseURL}/uploads?missing_id=${missing_id}`,
            {
                method: "POST",
                body:JSON.stringify({
                    file: image
                })
            }
        ).then().catch(reason => console.log(reason))

        fetch(
            `${baseURL}/coincidences/search?missing_id =${missing_id}`,
            {
                method: "GET",
            }
        ).then((res) => res.json()).then((data) => {
            setMatchedList(data)

        }).catch(reason => console.log(reason))

    }
    console.log(matchedList)

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
                        <InfoTextField text={'Прізвище'} width={'440px'} onChange={(e:any) => setName(e.target.value)} />
                        <InfoTextField text={'Імʼя'} width={'440px'} onChange={(e:any) => setSurname(e.target.value)}/>
                        <InfoTextField text={'По батькові'} width={'440px'} onChange={(e:any) => setFather_name(e.target.value)}/>
                        <DateInputField width={'440px'} onChange={(e:any) => setDate_of_birth(e.target.value)}/>
                    </div>
                    <div className={styles.input_info_mobile}>
                        <InfoTextField text={'Прізвище'} width={'280px'} onChange={(e:any) => setName(e.target.value)}/>
                        <InfoTextField text={'Імʼя'} width={'280px'} onChange={(e:any) => setSurname(e.target.value)}/>
                        <InfoTextField text={'По батькові'} width={'280px'} onChange={(e:any) => setFather_name(e.target.value)}/>
                        <DateInputField width={'280px'} onChange={(e:any) => setDate_of_birth(e.target.value)}/>
                    </div>
                    <InputImage file={image} setFile={setImage}/>
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