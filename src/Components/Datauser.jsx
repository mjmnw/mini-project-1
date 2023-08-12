import { useEffect, useState } from "react"

export default function ApaGitu () {
    const [user, setUser] = useState([])

    const ngambilData = async () => {
        try {
            const res = await axios.get('http://localhost:5000/users')
            setUser()
        } catch(error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        ngambilData()
    }, [])
    
    
    
    return(
    <>
    </>    
    )
}