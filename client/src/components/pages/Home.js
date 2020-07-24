import React from 'react'
import {Spinner} from 'react-bootstrap';
 const Home = () => {
    return (
        <>
           <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>
        </>
    )
}
export default Home