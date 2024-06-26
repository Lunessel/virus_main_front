export interface IPerson {
    source_url: string,
    disappearance_date: string,
    disappearance_place: string,
    latitude: number,
    longitude: number,
    surname: string,
    name: string,
    father_name: string,
    surname_rus: string,
    name_rus: string,
    father_name_rus: string,
    date_of_birth: string,
    gender: string,
    description: string,
    special_data: string,
    contact_data: string,
    missing_id: number,
    upload_ids: number[]
}

export interface ISeekPeople {
    source_url: string,
    date_published: string,
    coincidence_id: number,
    upload_ids: number[]
}
