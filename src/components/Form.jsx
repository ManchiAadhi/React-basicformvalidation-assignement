import React from 'react'
import "./Form.css"
import { useState } from 'react'

function Form() {
    const [sucess, setSucess] = useState("");
    const [fir, setFir] = useState(false)
    const [la, setLa] = useState(false)
    const [em, setEm] = useState(false)
    let [first, setFirst] = useState("");
    let [last, setLast] = useState("");
    let [ema, setEma] = useState("");

    function firstnamehandler(event) {
        setFirst(event.target.value);
        if(first.length!==0){
            setFir(false);
        }
    }


    function lastnamehandler(event) {
        setLast(event.target.value);
        if(last.length!==0){
            setLa(false);
        }
    }


    function emailhandler(event) {
        setEma(event.target.value)

    }

    function onsubmithandler(e) {
        e.preventDefault();
        if (first.length === 0) {
            setFir(true)
        }
        if (last.length === 0) {
            setLa(true)
        }

        const regx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!regx.test(ema)) {
            setEm(true)
        }
        if ((!fir) && (!la) && (!em)&&(last.length!==0)) {
            setSucess(true)
        }

    }


    return (<>
        <div id='Maincontainer' >
            <div id='datacontainer'>
                {sucess ? <div id='sucess'> SUCESS!.Thank You For Regestering. </div > :<></>   }
                    <input type={"text"} placeholder="First Name" onChange={firstnamehandler} />
                    {(fir) ? <p>please enter the first name</p> : <></>}
                    <br></br>

                    <input type={"text"} placeholder="Last Name" onChange={lastnamehandler} />
                    {(la) ? <p>please enter the last name</p> : <></>}
                    <br></br>
                    <input type={"email"} placeholder="Email" onChange={emailhandler} />
                    {(em) ? <p>please enter the email</p> : <></>}
                    <br></br>
                    <button type={"submit"} onClick={onsubmithandler} > Register </button>
                </div>
        </div></>
        )
}
        export default Form