import React, { useState, useRef, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import ButtonComp from "../components/ButtonComp";
import { tr } from "zod/locales";

function LoginSignup() {
    const [searchParams, setSearchParam ] = useSearchParams();
    const inputsRef = useRef<any[] | null>([])

 /* VARIABLE */
    const [inputsValue, setInputsValue] = useState({})
    const [pageNum, setPageNum] = useState<Number>(0)
    const view = searchParams.get("view") 
    const page = searchParams.get('page')
    const useIndex = 0
    

 /* FUNCIONS */
    function handldeInputs(e: HTMLInputElement) {
        const {id, name, value} = e
        
        setInputsValue(p => ({...p, [id]: value}))
    }

    function handleBtn(e: HTMLButtonElement) {
        const {className, id, innerHTML} = e;

        switch(innerHTML) {
            case('Continue'):
                setSearchParam(p => ({view: 'register', page: 'password'}))
            break;
        }
    }

    console.log(searchParams)

 /* APPEND DATA */
    const inputElements: String[][] = [
        ["First Name", "Last Name", "Email", "Phone", "Password", "Confirm Password"  ],
        ["Email", "Password"]
    ]    

 /* APPEND */
    const APPENDINPUTELEMENTS = inputElements[useIndex].map((it, id) => {
        const useId = it.split(' ').join('_').toLowerCase();
        const compare = page !== 'password' ? (id < 4 ) : (id >= 4 ) 

        if(compare)  {

            return(
                <div key={id} className="input_divs">
                    <label>{it}</label>
    
                    <input 
                        placeholder={`${it}`} id={useId} 
                        onChange={e => handldeInputs(e.target)}
                        //value={inputsValue[useId]}
                        ref={el => {inputsRef.current?.push(el) } }
                    />
                </div>
            )
        }
            

    })

 /* USE EFFECT */
    useEffect(() => {
        
    }, [])

    console.log(inputsValue)
    
 /* RETURN */
    return(
        <main id="login_page_main" className="main_cont">

            <section id="login_first_sec">
                <h3>Signup</h3>
                {
                    APPENDINPUTELEMENTS
                }

                <ButtonComp 
                    fn1 = {handleBtn}
                    he = '45px'
                    wid = '80%'
                    txt = {page != 'password' && useIndex == 0 ? 'Continue' : 'Submit'}
                    mt = '4px'
                />

            </section>

        </main>
    )
}

export default LoginSignup