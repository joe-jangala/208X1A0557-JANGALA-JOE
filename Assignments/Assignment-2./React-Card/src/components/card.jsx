
export function Card({props}){
    console.log(props);
    return <div style={
    {
     border: '1px solid #ddd',
     borderRadius: '8px',
     padding: '20px',
     margin: '20px',
     maxWidth: '300px',
     boxShadow: '0 15px 10px rgba(0, 0, 0, 0.1)',
     backgroundColor: '#f8f9fa'
    }
    }>
    <h2 style={{
      fontSize: '24px',
      marginBottom: '10px',
      color: '#333',
    }}>
     {props.name}</h2>
            <p style={{fontSize: "12px",color: '#333',marginBottom:'15px'}}> {props.role}</p>
            <p style={{fontSize: "12px",color: '#333',marginBottom:''}} > {props.email}</p>
            <p style={{fontSize: "12px",color: '#333',marginBottom:''}}>{props.phone}</p>
            
            <div style={{color:"#aaa",padding:"5px 10px", borderRadius:"5px", display:"inline-block", margin:"5px",backgroundColor:"blue", boxShadow:"1px"}}><a href ={props.website} target="_blank" rel="noopener noreferrer" style={{color:"white"}}>Follow Me</a></div>      
            
     </div>
     
}