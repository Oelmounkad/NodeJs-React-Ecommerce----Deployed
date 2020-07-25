import React,{useContext,useEffect} from 'react'
import AuthContext from '../../context/auth/AuthContext'
const Home = () => {

    const authContext = useContext(AuthContext)

    useEffect(() => {  
        authContext.loadUser()
    }, [])
    return (
        <div className="grid-2">
           <div>
               
           </div>
           <div>
               
           </div>
        </div>
    )
}
export default Home
