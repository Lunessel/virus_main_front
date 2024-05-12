"use client";
import React, {useState, ChangeEvent, useRef} from 'react';
import styles from './InputImage.module.scss';
import Image from "next/image";
import upload from "./images/upload.svg"

const InputImage = () => {
    const [file, setFile] = useState<string | undefined>();
    const fileInputRef = useRef<HTMLInputElement>(null);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setFile(URL.createObjectURL(e.target.files[0]));
        }
    }

    function handleButtonClick() {
        fileInputRef.current?.click();
    }

    return (
        <div className={styles.root}>
            {!file&&<label htmlFor={'upload_image'}>
                <div className={styles.upload_button}>
                    <a>download image</a>
                    <Image src={upload} alt={'upload'}/>
                </div>
            </label>}
            <input
                type="file"
                onChange={handleChange}
                ref={fileInputRef}
                id={'upload_image'}
                accept={'.png,.jpg,.jpeg,.svg'}
                style={{opacity: 0}}
            />
            {file &&
                <div onClick={handleButtonClick}>
                    <Image src={file} alt={'file'} height={300} width={225}/>
                </div>
            }
        </div>
    );
};

export default InputImage;