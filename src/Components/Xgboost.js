import { React, useState, useContext } from 'react'
import DataContext from "../Context/DataContext";

function Xgboost() {
    const context = useContext(DataContext);
    const { predictxgboost, predictdeValue } = context;
    const [Absence, setAbsence] = useState()
    const [G2, setG2] = useState()
    const [G1, setG1] = useState()
    const [Failures, setFailures] = useState()
    const [schoolsup, setschoolsup] = useState()
    const [walc, setwalc] = useState()

    const handleclick = () => {
        let data = {
            "absences": Absence,
            "G2": G2,
            "G1": G1,
            "failures": Failures,
            "Walc": walc,
            "schoolsup": schoolsup
        }
        predictxgboost(data);
    }

    return (
        <div className='xgboost'>
            <div className="information">
                XGBoost Model is trained with Root Mean Square Error of 1.94
            </div>

            <div className="formbox">
                <label className='labels' for="G1">G1 (0-20)</label>
                <input name="G1" id="G1" type="number" onChange={(event) => { setG1(event.target.value) }} />
                <label className='labels' for="G2">G2 (0-20)</label>
                <input name="G2" id="G2" type="number" onChange={(event) => { setG2(event.target.value) }} />
                <label className='labels' for="absences">Absences</label>
                <input name="absences" id="absences" type="number" onChange={(event) => { setAbsence(event.target.value) }} />
                <label className='labels' for="failures">Failures</label>
                <input name="failures" id="failures" type="number" onChange={(event) => { setFailures(event.target.value) }} />
                <label className='labels' for="walc">Weekly alchol consumption (from 1 - very low to 5 - very high)</label>
                <input name="walc" id="walc" type="number" onChange={(event) => { setwalc(event.target.value) }} />
                <label className='labels' for="schoolsup">School Support </label>
                <select className='inputBoxes' name="schoolsup" id="schoolsup" onChange={(event) => { setschoolsup(event.target.value) }}>
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <div className="button" onClick={handleclick}>
                    Predict G3
                </div>
                {predictdeValue === 0 ?
                    ""
                    :
                    <div className="predictedValue">
                        Predicted G3: {predictdeValue}
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Xgboost