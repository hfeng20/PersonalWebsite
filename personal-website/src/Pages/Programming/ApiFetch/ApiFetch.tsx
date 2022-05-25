import { time } from 'console';
import React, {useEffect, useState, } from 'react'
import Header from '../../../Components/Header/Header';
import './ApiFetch.css'

export default function ApiFetch(): JSX.Element {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users"

        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const json = await response.json()
                await new Promise(f => setTimeout(f, 1000));
                setJsonData(json)
            } catch (error) {
                console.log("error", error)
            }
        }
        fetchData()
    }, [])

    return(
        <div className="ApiFetch">
            <Header back='/Programming' title='Fetching Web API Information'></Header>
            <p className = {jsonData.length < 1 ? "StatusFalse":"StatusTrue"}>Status</p>
            <div className={jsonData.length < 1 ? "Loading":"Loaded"}>
                {jsonData.map(user => {
                    return (
                        <p>{user['name'] + ": " + user['email']}</p>
                    )
                })}
            </div>
        </div>
    );
}
