import React,{useContext,useEffect} from 'react'
import reactlogo from '../../rr.png'
const Home = () => {


    return (
        <div>
            <img src={reactlogo} height='500px' alt=""/>
           <h2 className="text-center">Welcome to the E-commerce Application</h2> 
           <h5 className="text-center">Built With MERN : MongoDB / Express / React / NodeJs</h5>
           <h5 className="text-center">Created by : Oussama Elmounkad</h5>
        </div>
    )
}
export default Home
