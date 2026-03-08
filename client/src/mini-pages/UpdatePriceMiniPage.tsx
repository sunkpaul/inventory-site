import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

import SelectDivComp from "../components/SelectDivComp";
import HeaderComp from '../components/HeaderComp'
import RowComp from '../components/RowComps'
import ButtonComp from '../components/ButtonComp'
import InputComp from '../components/InputComp'

import { selectDivIn } from "../classes/genClasses";

function UpdatePriceMini() {
 /* HOOKS */
    const navigate = useNavigate();
    const location = useLocation();

 /* VARIABLES */
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [searchparams, setSearchParams] = useSearchParams();
    const [inputValues, setInputsValues] = useState({});
    const view = searchparams.get('view');
    const page = searchparams.get('page')


 /* FUNCTION */
    function handleSelectDivs(id: number, state: Boolean) {
        let useArr: number[] = [...selectedIds];

        state ? useArr.push(id) : (useArr = useArr.filter(it => it !== id));
        setSelectedIds(p => (useArr));

    }// handle_selectdivs_fn

    function handleBtn(e: HTMLButtonElement) {
        const {innerHTML, id} = e;

        switch(innerHTML) {
            case('Continue'):
                let useArr: selectDivIn[] = [];

                selectedIds.forEach(it => {
                    useArr.push(productsData[it]);
                });

                setInputsValues(p => (
                    useArr.reduce(
                        (acc, cu) => {
                            acc[cu.id] = ''
                            return acc;
                        }, {}
                    )
                ))

                navigate(
                    location.pathname + '?page=' + page + '&view=' + 'inputs' ,
                    {
                        state: {items: useArr}
                    }
                ) 

                console.log('wars', useArr)
            break;
        }

    }// handle_btn_fn

    function handleInputs(e: HTMLInputElement) {
        const {value, id} = e;

        setInputsValues(p => ({...p, [id]: value} ))

    }// handle_inputs_fn

 /* APPEND DATA */
    const itemsToUpd = location.state?.items || [];

    const [productsData, setProductsData] = useState<selectDivIn[]>([
        {product: 'Indomie -70g', id: 'prd-01' },
        {product: 'Indomie -120g', id: 'prd-02' },
        {product: 'Indomie -280g', id: 'prd-03' },
        {product: 'Jumbo Cheese -280g', id: 'prd-04' }
    ]);

 /* APPEND */
    const APPENDPRODUCTSDATA = productsData.map((it, id: number) => {
        return(
            <div className="select_divs" key={id}>
                <SelectDivComp 
                    serial = {String(id).padStart(2, '0')}
                    main = {it.product}
                    sub = {`Current Price: $${it.quantity}`}
                    fn1 = {handleSelectDivs}
                    id = {id}
                    state = {selectedIds.includes(id)}
                />
            </div>

        )
    })

    const APPENDINPUTITEMS = [...itemsToUpd].map((it, id) => {
        return(
            <div className="input_divs" key={id}>
                <RowComp 
                    children = {[
                        {txt: String(id + 1 ).padStart(2, '0'), wid: '13%'},
                        {txt: it.product, wid: '90%'},
                    ] }
                    wid = '65vw'
                    he = '50px'

                />

                <InputComp 
                    wid2 = '22%'
                    he = '52px'
                    brr =  '0.1rem'
                    type = 'number'
                    fn1 = {handleInputs}
                    value = {inputValues[it.id]}
                    placeholder = 'price'
                    id = {it.id}
                />
            </div>
        )
    })

    useEffect(() => {
        //setSelectedIds(p => ([]))

    }, [view])

 /* RETURN */
    return(
        <main id="updateprice_mini_main">
            { view !== 'inputs' &&
             <>
              <section id="updateprice_first_sec">
                <HeaderComp 
                    header = "Select Products To update"
                    wid =  "90%"
                    he = "55%"
                    tal = "center"
                />

                <ButtonComp
                    txt = "Continue" 
                    he = "38%"
                    wid = "20%"
                    ai = "flex-end"
                    mr = "5%"
                    fn1 = {handleBtn}
                />

              </section>

                {
                    APPENDPRODUCTSDATA
                }
             </>
            }

            {/* Seperator */}

            { view == 'inputs' &&
             <section id="updateprice_second_sec">
                <HeaderComp 
                    header = 'Enter New Prices'
                    he = '50px'
                />
                
                {
                    APPENDINPUTITEMS
                }

                { selectedIds.length == 0 &&
                    <h4>Nothing to see here</h4>

                }
                
             </section>
            }



        </main>
    )
}


export default UpdatePriceMini