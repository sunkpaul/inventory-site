import React, { useEffect, useState, useRef } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

import DropDownComp from "../components/DropDownComp";
import SelectDivComp from "../components/SelectDivComp";
import RowComponent from "../components/RowComps";
import ButtonComp from "../components/ButtonComp";
import InputComp from "../components/InputComp";

interface itemDataTy {
    product: String,
    id: String,
    quantity?: Number
}

function TransferMiniPage() {
    const selectDivRef = useRef<HTMLDivElement[] | null>([])
    const location = useLocation();
    const navigate = useNavigate();

 /* VARIABLES */
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [selected, setSelected] = useState<itemDataTy[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [btnTxt, setBtnTxt] = useState<String>('Continue');
    const [transferData, setTransferData] = useState({})
    const [parties, setParties] = useState({
        reciever: '',
        sender: ''
    });
    const view = searchParams.get('view')
    const page: string = searchParams.get('page') || ''


 /* Function */
    function handledropdown(set: string, data: String) {
        setParties(p => ({...p, [set]: data } ));
    }// drop_down_fn

    function handleSelectDivs(data: number, state: Boolean) {
        let useArr: number[] = [...selectedItems];

        state == true && !useArr.includes(data) ? (
            useArr.push(data)
        )  : (
            useArr = useArr.filter(it => it !== data)
        );

        setSelectedItems(p => (useArr));
    }// select_divs_fn

    function handleBtn(e: String) {
        if(e == 'Continue') {
            const useArr: itemDataTy[] = [];

            selectedItems.sort((a, b) => a - b).forEach(it => {
                useArr.push(itemData[it])
            });

            navigate(
                location.pathname + location.search + '&view=inputs', 
                {state: {items: useArr} }
            )
        }
    }// hanlde_btn_fn

    function handleInputs(e: HTMLInputElement) {
        const {value, id} = e
            
        setInputValues(p => ({...p, [id]: value}))
    }// handle_inputs_fn


 /* APPEND DATA */
    const inputsData = location.state?.items || [];
    const [itemData, setSelectDivs] = useState<itemDataTy[]>([
        {product: 'Product One', quantity: 2000, id: 'prd-001'},
        {product: 'Product Two', quantity: 200, id: 'prd-002'},
        {product: 'Product Three', quantity: 5000, id: 'prd-003'},
        {product: 'Product Four', quantity: 500, id: 'prd-004'},
        {product: 'Product Five', quantity: 10000, id: 'prd-005'},
    ]);
    const [inputValues, setInputValues] = useState(
        [...inputsData].reduce(
            (acc, current) => {
                acc[current.id] = ''
                return acc;
            }, {}
        )
    )


 /* APPEND */
    const APPENDSELECTDIVS = itemData.sort(
        (a,b) => Number(a.id.substring(4)) - Number(b.id.substring(4))
    ).map((it, id) => {
        return(
            <div key = {id} className="select_div" ref={el => {el && selectDivRef.current?.push(el)}}>
                <SelectDivComp 
                    main = {it.product}
                    sub = {`${it.quantity} in Store`} 
                    id = {id}
                    serial = {String(id).padStart(2, '0')}
                    wid = '100%'
                    state = {selectedItems.includes(id)}
                    fn1 = {handleSelectDivs}
                />
            </div>

        )
    })


    const APPENDINPUTSITEMS = inputsData.map((it, id) => {
        return(
            <div id="inputs_div" key={id}>
                <RowComponent 
                    wid = '75%'
                    he = '100%'
                    children = {[
                        {txt: String(id + 1).padStart(2, '0'), wid: '12%'},
                        {txt: it.product, wid: '63%'},
                        {txt: '5000 Left', wid: '25%'},
                    ]}
                />

                <InputComp 
                    wid = '100%'
                    he = '100%'
                    he2 = '100%'
                    wid2 = '20%'
                    fn1 = {handleInputs}
                    id = {it.id}
                    value = {inputValues[it.id]}
                    type = 'number'
                />
            </div>
        )
    })

 /* USEEFFECT */
    useEffect(() => {
    }, [searchParams])




    console.log(parties, 'tun')
    console.log('items', selectedItems)
    console.log(view, 'Eighty')
    console.log('selected', selected)
    console.log('state:', location.state?.items || [])
    console.log('left:', inputValues)


 /* RETURN */

    return(
        <section id="transfer_mini_main">
          { view !== 'inputs' &&
             <>
                <div id="first_div">
                    <div id="init">
                        <h3>From:</h3>
                        <DropDownComp 
                            for = 'sender'
                            fn1 = {handledropdown}
                            item = {['Shop One', 'Shop Two', 'shop Three']}
                        />

                        <h3>To:</h3>

                        <DropDownComp 
                            for = 'reciever'
                            fn1 = {handledropdown}
                            item = {['Main Shop', 'Upper Two', 'Lower Shop', 'Under Shop']}

                        />    
                    </div>

                    <div id="div2">
                        <p>Selected 1/22</p>
                        <ButtonComp
                            wid = '25%'
                            he = '90%'
                            txt = {btnTxt}
                            fn2 = {(e: () => void ) => handleBtn(btnTxt)}
                        />
                    </div>

                </div>

                <div id="second_div" > 
                    {
                        APPENDSELECTDIVS
                    }
                </div>
              </>
          }

          { view == 'inputs' &&
            <div id="inputs_main_cont">
                <div id="desc_div">
                    <h2>TRANSFERS</h2>
                    <div>FROM: Shop One TO: Shop Three</div>

                </div>
                {
                    APPENDINPUTSITEMS
                }

                <ButtonComp 
                    txt = 'transfer'
                    he = '45px'
                    wid = '80%'
                    mt = '8px'
                />
            </div>
          }


        </section>

    )
}

export default TransferMiniPage