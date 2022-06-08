import { time } from 'console';
import React, {useEffect, useState} from 'react'
import  HTMLInputElement from 'react'
import Header from '../../../Components/Header/Header';
import Spinner from '../../../Components/Spinner/Spinner';
import UserObj from './User'
import './ApiFetch.css'

export default function ApiFetch(): JSX.Element {
    const [jsonData, setJsonData] = useState<UserObj[]>([]);
    const [originalData, setOriginalData] = useState<UserObj[]>([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users"

        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url)
                const json:[] = await response.json()
                await new Promise(f => setTimeout(f, 1000));
                const userArray = json.map(user => {
                    let newUser: UserObj = {name:user['name'], email:user['email']}
                    return newUser
                })
                setJsonData(userArray)
                setOriginalData(userArray)
                setLoading(false)
            } catch (error) {
                console.log("error", error)
            }
        }
        fetchData()
    }, [])


    const [searchQuery, setSearchQuery] = useState("")
    const [validity, setValidity] = useState(false)

    let timeout:NodeJS.Timeout;

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
        
    }
    
    useEffect(() => {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            const filteredData = originalData.filter(user => JSON.stringify(user.email).includes(searchQuery))
            setJsonData(filteredData)
            for(let user of jsonData) {
                if(user.email === searchQuery) {
                    setValidity(true)
                    return
                }
            }
            setValidity(false)
        }, 1000);
        // const filteredData = originalData.filter(user => JSON.stringify(user.email).includes(searchQuery))
        // setJsonData(filteredData)
        // for(let user of jsonData) {
        //     if(user.email === searchQuery) {
        //         setValidity(true)
        //         return
        //     }
        // }
        // setValidity(false)
    }, [searchQuery])

    // let input = document.getElementById("validator")!
    // let timeout = setTimeout(function() {}, 1000)
    // input.addEventListener('keyup', function (e:any) {
    //     clearTimeout(timeout)

    //     timeout = setTimeout(function () {
    //         console.log('Input Value:', validator);
    //     }, 1000);
    // })

    return(
        <div className="ApiFetch">
            <Header back='/Programming' title='Fetching Web API Information'></Header>
            <p className = {loading ? "StatusFalse":"StatusTrue"}>Status</p>
            <div className={loading ? "Loading":"Loaded"}>
                {jsonData.map(user => {
                    return (
                        <p>{user.name + ": " + user.email}</p>
                    )
                })}
            </div>
            <form>
                <input className = {validity ? "validInput":"invalidInput"} value={searchQuery} onChange={handleChange} id = "validator"></input>
            </form>
            <p>
                {
                    "App Name: " + navigator.appName
                }
            </p>
            <p>
                {
                    "Language: " + navigator.language
                }
            </p>
            <p>
                {
                    "Platform: " + navigator.platform
                }
            </p>
        </div>
    );
    // }
}

/*
TODO:
- type ahead search
- vercel router
*/
