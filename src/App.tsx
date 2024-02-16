import './App.css'
import {useEffect, useState} from "react";
import {fetchUsersService} from "./request/services/methods.ts";
import {Users} from "./request/types";

function App() {
    const [users, setUsers] = useState<Array<Users>>()

    useEffect(() => {
        fetchUsersService().then(data => {
            setUsers(data)
        })
    }, []);

    return (
        <>
            {users?.map(user => <div key={user.id}>{user.name}</div>)}
        </>
    )
}

export default App
