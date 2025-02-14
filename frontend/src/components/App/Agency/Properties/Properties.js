import React, { useState, useEffect } from "react";
import {FaBed,FaBath} from "react-icons/fa";
import { AiFillEdit,AiOutlineDelete  } from "react-icons/ai";
import './Properties.css'
import axios from "axios";
import { useHistory  } from "react-router-dom";



const Properties = ({userInfo,cities}) => {

    const [properties,setProperties] = useState([]);
    const [filteredProperties,setFilteredProperties]=useState([])
 
 
    const history=useHistory();
    useEffect(() => {
        axios
          .get(`https://unilive-backend.herokuapp.com/api/getpropertiesbyuser/${userInfo.data._id}`)
          .then((res) => setProperties(res.data))
          .catch((err) => console.log(err));
          window.scroll(0,0)
      }, []);
    
     useEffect(() => {
        axios
          .get(`https://unilive-backend.herokuapp.com/api/getpropertiesbyuser/${userInfo.data._id}`)
          .then((res) => setFilteredProperties(res.data))
          .catch((err) => console.log(err));
          window.scroll(0,0)
      }, []);

const deleteProperty = (id) =>{
    axios.delete(`https://unilive-backend.herokuapp.com/api/deleteproperty/${id}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
    window.location.reload();

}

useEffect(() => {
    window.scroll(0, 0);
}, []);

const selectCityName=(name)=>{
    if(name==="search"){
        setFilteredProperties(properties)
     }else{
        setFilteredProperties(properties.filter(property=>property.cityName===name))
     }
    
   
}

    return (

     <div id="properties">
          
   <div>
       <form className="filter-by-city-name">
           <select className="filter-by-city-name-option" onChange={(e)=>selectCityName(e.target.value)} >
               <option  className="filter-by-city-name-option" value="search">Filter by city name</option>
               {cities.map((city,index)=>
                 <option className="filter-by-city-name-option" value={city.name} key={index}>{city.name}</option>
                )}
           </select>
       </form>
   </div>

<div className="property-title"><h1>All Properties <span style={{fontSize:"20px"}}>(Total: {filteredProperties.length})</span> </h1></div>

{filteredProperties.length !==0 && filteredProperties.map((property,index)=>(
  <div className="properties">
  <div className="properties-img"><img src={property.images[0]} alt=""/></div>
  <div className="property-city"><p>{property.cityName}</p></div>
  <hr/>

  <div className="property-content">
      <div  className="bill" style={{marginLeft:"-5%"}}><p style={{fontSize:"16px",padding:0,paddingLeft:20}}><span style={{fontSize:"20px"}}>£{property.rent} </span>pppw including bills</p></div>
      <div className="bed" style={{fontSize:"20px"}}><FaBed size={22}  style={{fill:"white",paddingTop:"2px",marginLeft:"20px"}}/>  &nbsp; {property.bedroom}</div>
      <div className="bath" style={{fontSize:"20px"}}><FaBath size={17}  style={{fill:"white",paddingBottom:"1px"}}/>  &nbsp; {property.bathroom}</div> 
  </div>
  <div className="property-btn">
      <button className="property-btn-edit" onClick={()=>history.push(`/agency/addproperty/${property._id}`)} ><AiFillEdit/>&nbsp; Edit</button>
      <button className="property-btn-del" onClick={()=>deleteProperty(property._id)}><AiOutlineDelete  /> &nbsp; Delete</button>

  </div>
  </div>
)

 
)}


        </div>
    )
}

export default Properties
