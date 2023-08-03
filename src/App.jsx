import { useState } from "react"
import { UserCard } from "./components/UserCard"

export const App = () => {

  const [ isStatus, setIsStatus ] = useState(false)
  const [ isName, setIsName ] = useState("jose")
  const [ isEmail, setIsEmail ] = useState("jose@gmail.com")
 
  return (

    <>
      <UserCard isName={"jose"} isEmail={"jose@gmail.com"} isStatus={isStatus}/>
    </>

  )

}


