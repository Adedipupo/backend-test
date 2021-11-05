import express,{Request,Response} from 'express';
import { location } from '../data/location';



const getData = () => {
    return new Promise(async (resolve,reject)=>{
        try{
            const data = location;
            if(!data){
                throw new Error('Data not found')
            }
            resolve(data);
        }catch(e){
            reject(e);
        }
    })
}

getData().then((data)=>{
    console.log(data);
})
