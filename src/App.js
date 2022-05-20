
import './App.css';
import React,{useState,useEffect} from "react"
import axios from "axios"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Skullcard from './Skullcard';
import 'react-loading-skeleton/dist/skeleton.css'

function App() {

  const[userlist,setuserlist] = useState([])
  const [isloading,setisloading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      axios.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
      .then(res=> setuserlist(res.data))
      setisloading(false)
      
    }, 2000);
   
  },[])
  


  return (
    <>
    <div className='heading'><h1>Skulla</h1></div>
    <div className="App">
      
        <SkeletonTheme>
          {
            isloading
            ?
            <>
            <Skullcard/>
            <Skullcard/>
            <Skullcard/>
            <Skullcard/>
            <Skullcard/>
            <Skullcard/>
            </>
            
            :
            
             userlist.map((item,key)=>{
                
                  return(
                   
                  <div className="card" key={item.email}> 
                      <img src= {"https://joeschmoe.io/api/v1/" + item.first}  alt="skull"/>
                      <h1>{item.first}{item.last}</h1>
                      <h2>{item.email}</h2>
                      <h3>{item.address}</h3>
                      {console.log(item)}
                  </div>
                  
              )}) }
          
          
          
        </SkeletonTheme>
      
      
      
    </div>
    </>
  );
}

export default App;