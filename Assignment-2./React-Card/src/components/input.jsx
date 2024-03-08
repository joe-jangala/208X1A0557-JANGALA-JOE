import { useState } from "react";
import { Card } from "./card";

export function Input(){
    const[card,setCard]=useState([]);
    const[name,setName] = useState("");
    const[role,setRole] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[website,setWebsite] = useState("");

    const styles={
        name:{
        
        }

    }

    return <div style={{}}>
        <h2 style={{display:"flex", justifyContent: "center", alignItems:"center",font:"30px"}}>Card Generator</h2>
        <div style={{display:"flex", justifyContent: "center", alignItems:"center", flexDirection:"column"}}>
        <input id="name" style={{padding:"10px", margin:"10px", width:"300px"}} type="text" placeholder="Name" onChange={function(e){
            const value = e.target.value;
            setName(value);
        }}></input><br/>
        <input id="role" style={{padding:"10px", margin:"10px", width:"300px"}} type="text" placeholder="Role" onChange={function(e){
            const value = e.target.value;
            setRole(value);
        }}></input><br/>
        <input id="email" style={{padding:"10px", margin:"10px",width:"300px"}} type="text" placeholder="Email-Id" onChange={function(e){
            const value = e.target.value;
            setEmail(value);
        }}></input><br/>
        <input id = "phone" style={{padding:"10px", margin:"10px",width:"300px"}} type="text" placeholder="Contact-No"  onChange={function(e){
            const value = e.target.value;
            setPhone(value);
        }}></input><br/>
        <input id = "website" style={{padding:"10px", margin:"10px",width:"300px"}} type="text" placeholder="Website" onChange={function(e){
            const value = e.target.value;
            setWebsite("https://"+value);
        }}></input><br></br>
        
        <button style={{padding:"10px", margin:"1px",backgroundColor:"blue",color:"white", border:"none" }} onClick={() => {
            setCard([ {
              name : name , 
              role :role,
              email : email,
              phone : phone,
              website : website
            }])
      
        }} >Create Card</button>
        </div>
        {card.map((card)=>{
            return <Card props={card}/>
        })}
        
        
 </div>
    
}