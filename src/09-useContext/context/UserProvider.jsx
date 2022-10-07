import { UserContext } from "./UserContext"

const user = {
    id: '124',
    name: 'Cris'
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={ { hola: 'mundo', user } } >
            { children }
        </UserContext.Provider >
    )
}
