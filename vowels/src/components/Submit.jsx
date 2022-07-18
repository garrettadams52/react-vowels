import {useState} from "react"


function Submit(){

    const [value, setValue] = useState('')
    const [subvalue, setSubvalue] = useState('')
  
    function Clicked(){
        setSubvalue(value)
    }

    return (
        <form>
            <h1>Entered: {value}</h1>
            <input type='text' onChange={(e) => setValue(e.target.value)} placeholder= "Enter a Word" />
            <button type = 'button' id="my-button" onClick={Clicked}>Submit Word</button>
            <h1 id="output">Submitted:{subvalue}</h1>
        </form>

    )
}

export default Submit