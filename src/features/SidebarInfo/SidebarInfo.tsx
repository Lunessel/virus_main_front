import React, {Dispatch, SetStateAction} from 'react';
import {Drawer} from "@mui/material";
import {IPerson} from "@/types/types";
import Image from "next/image";

import cross from './images/cross.svg'
import styles from './SidebarInfo.module.scss'

const SidebarInfo = ({active, setActive, person}:
                         {active: boolean, setActive:Dispatch<SetStateAction<boolean>>, person:any}
) => {

    const toggleDrawer = (newOpen: boolean) => () => {
        setActive(newOpen);
    };
    return (
        <Drawer open={active} onClose={toggleDrawer(false)} BackdropProps={{ invisible: true }}>
            <div className={styles.drawer}>

                <Image src={cross} alt={'x'} onClick={() => setActive(false)}/>
                <div className={styles.content}>
                    <div className={styles.photo}>
                        <Image
                            src={`https://34.118.102.90:8443/api/v1/uploads/${person.missing_id}`}
                            width={225}
                            height={300}
                            alt={'people'}/>
                    </div>
                    <div className={styles.personInfo}>
                        <h4>{person.name}</h4>
                        <h4>{person.surname}</h4>
                        <h4>{person.father_name}</h4>
                        <h4>{person.date_of_birth}</h4>
                    </div>
                    <h4 style={{border: "none"}}>Пропав: {person.disappearance_date}</h4>
                    <button className={styles.findButton}>Перейти</button>

                </div>
            </div>
        </Drawer >
    );
};

export default SidebarInfo;