import  {useEffect, useState} from 'react'
import UserApi from '../api/UserApi'

export const useUsers = () => {

    const [backenData, setBackendData]= useState([{}])

    useEffect(() =>{
        getBackenData();
    }, [])// dependencias
    
    const getBackenData = ()=>{
        fetch('/api').then(
            Response => Response.json()
        ).then(
            data => setBackendData(data)
        )
    }

    return (
        backenData
    )
}

/* 
useEffect(() => {
    fetch('/api').then(
        Response => Response.json()
    ).then(
        data => setBackendData(data)
    )
}) */