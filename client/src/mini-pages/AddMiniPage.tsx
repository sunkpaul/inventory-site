import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import ButtonComp from "../components/ButtonComp";

interface InpElementTy {
    managers: String[],
    stores: String[],
    products: String[]
}

function AddMiniPage() {
 /* VARIABLE */
    const [searchParams, setSearchParams] = useSearchParams();
    const page: string = searchParams.get('page')?.slice(4) || ''

 /* FUNCTIONS */
    function handleInputs(e: HTMLInputElement) {
        const {value, id} = e;

        setInputValues(p => ({...p, [id]: value}))
    }

 /* APPEND DATA */
    const megaInputsElement: InpElementTy = {
        managers: ["Manager Name", "Email", "Phone", "Guarantor", "Guramtor Phone"],
        stores: ["Store Name", "Store Manager", "Store Location", "Designation"],
        products: ["Product Name", "SKU", "Price", ],
    }

    const [inputValues, setInputValues] = useState(
        megaInputsElement[page].reduce(
            (acc: {}, current: String) => {
                const useId = current.split(' ').join('_').toLowerCase()
                acc[useId] = ''
                return acc
            }, {} 
        )
    ) 

    console.log('down:', inputValues)
    
 /* APPEND */
    const APPENDINPUTELEMENTS = megaInputsElement[page].map((it: String, id: number) => {
        const useId = it.split(' ').join('_').toLowerCase()

        return(
            <div key={id} className="input_div">
                <label>{it}</label>

                <input 
                    id={useId}
                    onChange={e => handleInputs(e.target)}
                    value={inputValues[useId]}
                />
            </div>
        )
    })      


 /* RETURN */
    return(
        <>
         <h2>Add Managers</h2>
         <section id="add_mini_main">
            {
                APPENDINPUTELEMENTS
            }

            { page == 'managers' &&
              <>
                <div id="managers_cond">
                    <p>Upload Picture</p>
                    <ButtonComp />
                </div>
              </>

            }

            <ButtonComp 
                wid = '70%'
                he = '40px'
                mt = '10px'
            />
         </section>       
        </>

    )
}

export default AddMiniPage