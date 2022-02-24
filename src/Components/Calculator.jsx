import React, {useState} from 'react'

import '../Css/Calculator.css'

const oper =['/', '-', '*', '+']

export const Calculator = (props) => {

    const [uinp, setUinp] = useState("")

    const supp = (a) => {
        if(oper.includes(a) && a != uinp.charAt(uinp.length-1)) setUinp(uinp+a);
        else if(a==="clear") setUinp("");
        else if(a==="back") setUinp(uinp.substring(0, uinp.length - 1));
        else if(!oper.includes(a)) setUinp(uinp+a);
    }

    const calculate = () => {
        const temp = eval(uinp)+'';
        setUinp(temp);
    }

    return (
        <div className='app__calculator'>
            <div className='app__calculator-container' style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>

                <div className='app__calculator-display' style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'grey'}}>
                    <input type='input' style={(props.lightTheme)?{color:'black'}:{color:'white'}} placeholder={uinp} />
                </div>

                <div className='app__calculator-keycont'>
                    {/* <div className='app__calculator-row1 key__space'>
                        <button className='button__size-alt2' onClick={()=>supp("e")} style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>e</button>
                        <button className='button__size-alt2' style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>sin</button>
                        <button className='button__size-alt2' style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>deg</button>
                    </div> */}

                    <div className='app__calculator-row234 key__space'>
                        <button className='button__size' onClick={()=>supp("clear")} style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>AC</button>
                        <button className='button__size' onClick={()=>supp("back")} style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>Ba</button>
                        <button className='button__size-alt' onClick={()=>supp("/")}>/</button>
                        <button className='button__size-alt' onClick={()=>supp("*")}>*</button>
                    </div>

                    <div className='app__calculator-row234 key__space'>
                        <button className='button__size' onClick={()=>supp(7)} style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>7</button>
                        <button className='button__size' onClick={()=>supp(8)} style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>8</button>
                        <button className='button__size' onClick={()=>supp(9)} style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>9</button>
                        <button className='button__size-alt' onClick={()=>supp("-")}>-</button>
                    </div>

                    <div className='app__calculator-row234 key__space'>
                        <button className='button__size' onClick={()=>supp(4)} style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>4</button>
                        <button className='button__size' onClick={()=>supp(5)} style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>5</button>
                        <button className='button__size' onClick={()=>supp(6)} style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>6</button>
                        <button className='button__size-alt' onClick={()=>supp("+")}>+</button>
                    </div>

                    <div className='app__calculator-row5 key__space'>
                        <button className='button__size' onClick={()=>supp(1)} style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>1</button>
                        <button className='button__size' onClick={()=>supp(2)} style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>2</button>
                        <button className='button__size' onClick={()=>supp(3)} style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>3</button>
                    </div>

                    <div className='app__calculator-row6 key__space'>
                        <button className='button__size' style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>0</button>
                        <button className='button__size' style={(props.lightTheme)?{backgroundColor:'white'}:{backgroundColor:'black'}}>.</button>
                        <button className='button__size-alt' onClick={() => calculate()} style={{width: 100}}>=</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
