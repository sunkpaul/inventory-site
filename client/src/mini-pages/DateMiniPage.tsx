import React, { useState } from "react";

import SelectDivComp from "../components/SelectDivComp";
import DropDownComp from "../components/DropDownComp";
import ButtonComp from "../components/ButtonComp";
import RowComponent from "../components/RowComps";
import InputComp from "../components/InputComp";

function DateMiniPage() {
 /* VARIABLE */
    const [selectedYear, setYear] = useState('--Year')

 /* APPEND DATA */
    const [mktWeekData, setMktWeekData] = useState([
        {weekName: 'week 01', weekId: 'wk-01-25', year: 2025, start: '01/01/25', end: '07-01-25'},
        {weekName: 'week 02', weekId: 'wk-02-25', year: 2025, start: '07-01-25', end: '14-01-25'},
        {weekName: 'week 03', weekId: 'wk-03-25', year: 2025, start: '15-01-25', end: '22-01-25'},
        {weekName: 'week 04', weekId: 'wk-04-25', year: 2025, start: '30-01-25', end: '02-02-25'},
        {weekName: 'week 05', weekId: 'wk-05-25', year: 2025, start: '03-01-25', end: '11-01-25'},
    ])

 /* APPEND */
    const APPENDMKTWEEKS = mktWeekData.map((it, id) => {
        return(
            <div className="mkt_divs">
                <SelectDivComp 
                    wid = '90vw'
                    he = '70px'
                    serial = {String(id + 1).padStart(2, '0')}
                    main = {it.weekName}
                    sub = {'from ' + it.start + ' ' + 'to ' + it.end}
                    brr = '0px'
                    sfs = '1rem'
                />
            </div>
        )
    })

 /* RETURN */
    return(
        <section id="date_mini_main">
            <div id="date_first_sec">
                < DropDownComp 
                    ini = {selectedYear}
                />

            </div>

            <div id="date_second_sec">
                <p className="spacer">Current</p>

                <div id="current_date">
                    <h2>week 10</h2>
                    <p>start: 10-02-2025 end: 17-02-2025 </p>
                </div>

                <p className="spacer">2025 -All</p>
                {
                    APPENDMKTWEEKS
                }

            </div>
        </section>
    )
}

export default DateMiniPage