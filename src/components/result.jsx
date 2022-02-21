import { NavLink } from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react"

export const Result = ()=> {
    const [value, setValue] = useState()
    useEffect (()=> {
        const fetchData = async ()=> {
          await axios.get('https://fast-reef-22226.herokuapp.com/data')
          .then((res) => res.data).then(data=>setValue(data))
        }
        fetchData();
      },[]);
      console.log(value)
    
    return (
        <div>
         
             <input className="input-box" type="text" placeholder="google search"/>
            <button className="search-btn">search</button>
            {value && value.map((data, i)=>(
               <li key={i}>
                   <div>
                    <p>{data.url}</p>
                       <a href="">{data.title}</a>
                       <p>{data.description}</p>
                       <h3>creation_date:{data.creation_date}</h3>
                       <h3>quality:{data.quality}</h3>

                   </div>
               </li>
            ))}
        </div>
    );
}