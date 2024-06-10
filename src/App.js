import { useState } from "react"

const App = () => {
  const [firstName, setFirstName] = useState("")
  const [names, setNames] = useState([])
  
  const submitForm = (event) => {
    event.preventDefault()

    // Validace 
    if (firstName) {
      setNames((names) => {
        return [...names, firstName]
      })
    } else {
      console.log("Nebylo nic vyplněno")
    }
    setFirstName("")
  }

  return <article>
    <form>
      <input 
        className="user-name" 
        type="text" 
        placeholder="Jméno:"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input 
        onClick={submitForm} 
        type="submit" 
      />
    </form>
    {
      names.map((oneName, index) => {
        return <p className="item" key={index}>{oneName}</p>
      })
    }
  </article>
}

export default App