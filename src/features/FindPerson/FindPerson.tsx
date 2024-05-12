// @ts-nocheck
"use client";
import React, {useEffect, useState} from 'react';
import InputImage from "@/shared/InputImage/InputImage";
import styles from "./FindPerson.module.scss";
import caution from "./images/caution.svg";
import Image from "next/image";
import InfoTextField from "@/shared/InfoTextField/InfoTextField";
import DateInputField from "@/shared/DateInputField/DateInputField";
import MatchedPerson from "@/entities/MatchedPerson/MatchedPerson";
import {IPerson, ISeekPeople} from "@/types/types";
import {serialize} from "node:v8";

const baseURL = "https://34.118.102.90:8443/api/v1"
const FindPerson = () => {
    const [name, setName] = useState("МиколаA")
    const [surname, setSurname] = useState("ПарасюкA")
    const [father_name, setFather_name] = useState("Іванович")
    const [date_of_birth, setDate_of_birth] = useState('2024-05-11')
    const [missing_id, setMissing_id] = useState<number>()
    const [image, setImage] = useState<Blob>()
    const [message, setMessage] = useState<string | undefined>()
    const [matchedList, setMatchedList] = useState<ISeekPeople[]>()
    
    const handleTextSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            source_url: "https://www.google.com",
            disappearance_date: null,
            disappearance_place: null,
            surname: surname,
            name: name,
            father_name: father_name,
            surname_rus: null,
            name_rus: null,
            father_name_rus: null,
            date_of_birth: date_of_birth,
            gender: null,
            description: null,
            special_data: null,
            contact_data: null
        };
        console.log(data)

        // const uploads_params = new URLSearchParams({
        //     missing_id: missing_id,
        //     coincience_id: null,
        //     media_type: photoType
        // }:URLSearchParams({
        //
        // }));



        fetch(`${baseURL}/missings/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json()).then(
                value => {
                    console.log(value.missing_id)
                    setMissing_id(value.missing_id)
                }
        )
            .catch(error => console.error('Error:', error));


        // const uploads_params = new URLSearchParams({
        //     missing_id: missing_id,
        //     coincience_id: null,
        //     media_type: photoType
        // }:URLSearchParams({
        //
        // }));



    }

    const handlePhoto = (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData();
        // @ts-ignore
        formData.append('file', image);
        // console.log(`${baseURL}/uploads?missing_id=${missing_id}&media_type=${"image/jpeg"}`)
        if (image)
            console.log(image)
        fetch(`${baseURL}/uploads?missing_id=${missing_id}&media_type=image%2Fjpeg`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMessage('life is happy')
            })
            .catch(error => console.log(error.body));
    }

    // useEffect(() => {
    //
    // }, [image, missing_id]);

    useEffect(() => {
        if (missing_id && message)
        {
            fetch(
                    `${baseURL}/coincidences/search?missing_id=${missing_id}`,
                    {
                        method: "GET",
                    }
                ).then((res) => res.json()).then((data) => {
                    setMatchedList(data)

                }).catch(reason => console.log(reason))
        }
    }, [missing_id, message]);


    // @ts-ignore
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
            <div>
                <div className={styles.info}>
                    <div className={styles.input_info_desktop}>
                        <InfoTextField text={'Прізвище'} width={'440px'} onChange={(e:any) => setSurname(e.target.value)} />
                        <InfoTextField text={'Імʼя'} width={'440px'} onChange={(e:any) => setName(e.target.value)}/>
                        <InfoTextField text={'По батькові'} width={'440px'} onChange={(e:any) => setFather_name(e.target.value)}/>
                        <DateInputField width={'440px'} />
                    </div>
                    <div className={styles.input_info_mobile}>
                        <InfoTextField text={'Прізвище'} width={'280px'} onChange={(e:any) => setSurname(e.target.value)}/>
                        <InfoTextField text={'Імʼя'} width={'280px'} onChange={(e:any) => setName(e.target.value)}/>
                        <InfoTextField text={'По батькові'} width={'280px'} onChange={(e:any) => setFather_name(e.target.value)}/>
                        <DateInputField width={'280px'} />
                    </div>
                    <InputImage file={image} setFile={setImage}/>
                </div>
                <div className={styles.buttons}>
                    <button onClick={handleTextSubmit}>Знайти</button>
                    <button onClick={handlePhoto}>Завантажити фото</button>
                </div>
            </div>
            <hr/>
            <h1>Збіги</h1>
            <button>Підписатися на пошук у Telegram</button>
            <div className={styles.matches}>
                {matchedList?.map((value, index) => (
                    <MatchedPerson key={index} image={`https://34.118.102.90:8443/api/v1/uploads/${value.upload_ids[0]}`} height={300} width={225}/>
                ))}

            </div>

        </div>
    );
};

export default FindPerson;