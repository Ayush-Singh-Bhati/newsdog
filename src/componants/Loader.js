import React from 'react'
import loadingDog from './images/loadingDog.gif'

const Loader =() => {
 
    return (
      <div className='text-center my-3'>
        <img src={loadingDog} alt="loadingDog" style={{backgroundColor:"#6b5653"}} />
      </div>
    )
  
}

export default Loader