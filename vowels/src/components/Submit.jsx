import {useState} from "react"


function Submit(){

    const [value, setValue] = useState('')
    const [subValue, setSubValue] = useState('')
    const [valueVow, setValueVow] = useState(0)
    const [subValueVow, setSubValueVow] = useState(0)
  
    function Clicked(){
        setSubValue(value)
        GetVowels(subValue,true)
    }

    function Change(e){
        setValue(e.target.value)
        GetVowels(e.target.value,false)
    }

    function GetVowels(value,click){
        let m = value.match(/[aeiou]/gi);
        console.log(m,value)
        if(m){
            if(click)
                setSubValueVow(m.length)
            else
                setValueVow(m.length)
        }
        else{
            if(click)
                setSubValueVow(0)
            else
                setValueVow(0)
        }
            
    }

    return (
        <form>
            <h1>Entered: {value}</h1>
            <h4>Vowels: {valueVow}</h4>
            <input type='text' onChange={Change} placeholder= "Enter a Word" />
            <button type = 'button' id="my-button" onClick={Clicked}>Submit Word</button>
            <h1 id="output">Submitted: {subValue}</h1>
            <h4>Vowels: {subValueVow}</h4>
        </form>

    )
}

export default Submit