import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import ButtonComp from "../components/ButtonComp";
import AddMiniPage from "../mini-pages/AddMiniPage";

function DashboardPage(){
    const navigate = useNavigate();

 /* VARIABLES */
    const [searchParams, setSearchParams] = useSearchParams();
    const view = searchParams.get('page');
 
 /* FUNCTIONS */
    function handleBtns(uLnk: String, lnkType?: String) {

        switch(lnkType) {
            case('inpage'):
                const lnk: String = "add_" + uLnk.toLowerCase();
                setSearchParams(p => ({...p, page: lnk }));
            break;

            case('outpage'):
                const navTo = uLnk.toLowerCase()
                //navigate('/' + navTo)
            break;

            default:
                null
            break;
        }
    }

 /* APPEND DATA */
    const [boxDetails, setBoxDetails] = useState([
        {mainTxt: 'Stores', secTxt: 20, btnTxt: "Add"},
        {mainTxt: 'Products', secTxt: 40, btnTxt: "Add"},
        {mainTxt: 'Managers', secTxt: 40, btnTxt: "Add"},
        {mainTxt: 'Dates', secTxt: '12/12/12', btnTxt: "Set"}
    ])    

    const [functionButtons, setFunctionButtons] = useState([
        {txt: "Transfers"},
        {txt: "Price Update"},
        {txt: "Evaluate"},
        {txt: "Orders"},
        {txt: "Cash"},
        {txt: "Date"},
    ])

 /* APPEND */
    const APPENDBOXDETAILS = boxDetails.map((it, id) => {
        return(
            <div key={id} className="box_details" onClick={e => handleBtns(it.mainTxt, "outpage")}>
                <h5>{it.mainTxt}</h5>
                <p>{it.secTxt}</p>
                <ButtonComp 
                    txt = {it.btnTxt} 
                    wid = "40%"
                    he = "32%"
                    mt = "2%"
                    fn1 = { (e: () => void) => handleBtns(it.mainTxt, 'inpage')}
                />
            </div>
        )
    })

    const APPENDFNBUTTONS = functionButtons.map((it, id) => {
        return(
            <div key={id} className="function_btn">
                {it.txt}
            </div>
        )
    })

 /* RETURN */ 
    return(
        <main id="dashboard_page_main" className="main_cont">
            <section id="dashboard_topbar_sec">

            </section>

            { !view?.includes('add') &&
              <>
                <section id="dashboard_first_div">
                    <h2>Welcome mng name</h2>
                </section>

                <section id="dashboard_second_div">

                </section>

                <section id="dashboard_third_div">
                    {
                        APPENDBOXDETAILS
                    }
                </section>

                <section id="dashboard_fourth_div">
                    {
                        APPENDFNBUTTONS
                    }
                </section>
              </>

            }

            { view?.includes('add') &&
              <section id="conditional_sec">
                <AddMiniPage />
              </section>
            }

            <div style={{height: '16px'}}>

            </div>


        </main>
    )
}

export default DashboardPage