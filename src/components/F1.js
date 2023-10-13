import Axios from "axios";
import {useEffect, useState} from "react"; 
function F1()
{
    const[data,setData]=useState([]);


    //HTTP request we need to place inside the lifecycle methods
    //But as we are working wiht function component there is no lifecylce mthos
    //Instead we have the concept hooks whic helps us to handle the HTTP request
    //useEffect() is used to handle the side Effects

    useEffect(
        ()=>{
            Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
                if(res.status===200)
                {
                   setData(res.data);
                }
                else{
                    Promise.reject();
                }
            })
            .catch((err)=>
            {
                alert(err)
            });
        },[]);
   
        const ListNames = () => {
            return data.map((val) => {
              return <h1 key={val.id}>{val.name}</h1>;
            });
          }
    return(
        <div>
            <h1>Hello</h1>
            {ListNames()}
            
        </div>
    );
}
export default F1;