import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuthStatus = () => {
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ checkingStatus, setChackingStatus ] = useState(true)

    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (user){
            setLoggedIn(true)
        }else{
            setLoggedIn(false)
        }
        setChackingStatus(false)
    }, [user])

    return { loggedIn, checkingStatus}
}