import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Skullcard = () => {
  return (
    <div>
      <div className='cardskull'>
                <Skeleton circle={true} height={150} width={150}/>
                <h1><Skeleton/></h1>
                <h2><Skeleton/></h2>
                <h3><Skeleton/></h3>
            </div>
    </div>
  )
}

export default Skullcard
