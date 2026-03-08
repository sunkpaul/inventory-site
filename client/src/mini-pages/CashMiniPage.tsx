import React, { useEffect, useState } from "react";

import RowComponent from "../components/RowComps";
import InputComp from "../components/InputComp";
import ButtonComp from "../components/ButtonComp";
import HeaderComp from "../components/HeaderComp";
import DropDownComp from "../components/DropDownComp";
import { da } from "zod/locales";

function CashMiniPage() {

 /* VARIABLES */
    const [inputValues, setInputVales] = useState({});
    const [date, setDate] = useState('00-00');
    const [store, setStore] = useState('Store');
    const [total, setTotal] = useState('');

 /* FUNCTIONS */
    function handleBtns(e: HTMLButtonElement) {
        const {innerHTML} = e;

        switch(innerHTML) {
            case('Add'):
                console.log('iam')
            break

            default:
                null
            break;
        }

    }// handle_btn_fn

    function handleInputs(e: HTMLInputElement) {
        const {value, id} = e;

        setInputVales(p => ({...p, [id]: value} ));
        
    }// handle_inputs_fn

    console.log(inputValues)

/* APPEND DATA */
    const [itemsToAppend, setItemsToAppend]= useState([
        'Cash In Hand',
        'Expenses',
        'Others'
    ])

 /* APPEND */
    const APPENDITEMS = itemsToAppend.map((it, id) => {
        return(
            <div className="item_divs" key={id}>

                <InputComp
                    label = {it + ':'} 
                    he = '50px'
                    wid = '100%'
                    wid2 = '100%'
                    type = 'number'
                    fn1 = {handleInputs}
                    id = {it.split(' ').join('_').toLowerCase()}
                />
            </div>
        )
    })

    useEffect(() => {
        let useTotal: number = 0;
        
        for(let val in inputValues) {
            useTotal = (Number(inputValues[val]) ?? 0) + useTotal;
        };

        setTotal(p => (useTotal.toLocaleString()))


    }, [inputValues])

 /* RETURN */
    return(
        <section id="cash_mini_main">

            <DropDownComp 
                ini = {store}
                ai = 'flex-end'

            />

            <div id="cash_first_div">
                <HeaderComp 
                    header = 'Cash Input'
                    he = '55px'
                />

                <DropDownComp 
                    ini = {date}
                    ai = 'flex-end'
                
                />

                {
                    APPENDITEMS
                }
{/* 
                <ButtonComp 
                    txt = 'Add'
                    he = '38px'
                    wid = '60px'
                    ai = 'flex-end'
                    mr = '5%'
                    fn1 = {handleBtns}
                />
 */}
                <div id="totol_div">
                    <h3>Total:</h3>
                    <p>{total}</p>
                </div>

                <ButtonComp 
                    he = '40px'
                    wid = '80%'
                    mt = '10px'
                />
            </div>

        </section>
    )
}

export default CashMiniPage