import { useEffect, useState } from "react"
import ContactsCard from "./Component/ContactsCard.jsx";

function App() {
  const URL ='https://jsonplaceholder.typicode.com/users'
  const [contacts,setContacts] = useState([])
  useEffect(() => {
    const fetchData = async()=>{
    try{
      const res = await fetch(URL) 
      if(!res.ok) throw Error("Daa")
      const data = await res.json()
      setContacts(data)
    }
    catch(err){
      console.log(err.message)
    }
  }
  
  fetchData()
    
  }, [])
  
  return (
    <>
    <div className="w-4/5 mx-auto">
      <h1>Created by Mohammed Rafi T S<h1/>
     <ContactsCard contacts={contacts} />
     </div>
    </>
  )
}

export default App
