import { React, useState,useContext } from 'react'
import BarChart from './BarChart';
import DataContext from "../Context/DataContext";

function Dashboard() {
    const context = useContext(DataContext);
    const {getData,predictdeValue} = context;
    const [Absence, setAbsence] = useState()
    const [G2, setG2] = useState()
    const [G1, setG1] = useState()
    const [Failures, setFailures] = useState()
    const [schoolsup, setschoolsup] = useState()
    const [romantic, setromantic] = useState()
    const [Fjob, setFjob] = useState()
    const [Medu, setMedu] = useState()
    const [Fedu, setFedu] = useState()
    const [Mjob, setMjob] = useState()
    const [goout, setgoout] = useState()
    const [paid, setpaid] = useState()
    const [reason, setreason] = useState()
    const [Dalc, setDalc] = useState()
    const [walc, setwalc] = useState()

    const handleclick = () => {
        let data = {
            "absences": Absence,
            "G2": G2,
            "G1": G1,
            "failures": Failures,
            "Walc": walc,
            "schoolsup": schoolsup,
            "romantic": romantic,
            "Fjob": Fjob,
            "Dalc": Dalc,
            "paid": paid,
            "Mjob": Mjob,
            "Medu": Medu,
            "reason": reason,
            "goout": goout,
            "Fedu": Fedu,
        }
        getData(data);
        
    }

    return (
        <>
        <div className='inputFields'>

            <label for="Absence">Absence:</label>
            <input name="Absence" id="Absence" type="text" className='inputBoxes' placeholder='Absence' onChange={(event) => { setAbsence(event.target.value) }} />
            <label for="G2">G2 (0-20):</label>
            <input name='G2' id="G2" type="number" className='inputBoxes' placeholder='G2' onChange={(event) => { setG2(event.target.value) }} />
            <label for="G1">G1 (0-20):</label>
            <input name='G1' type="number" className='inputBoxes' placeholder='G1' onChange={(event) => { setG1(event.target.value) }} />
            <label for="Failures">Failures:</label>
            <input name='Failures' id='Failures' type="number" className='inputBoxes' placeholder='Failures' onChange={(event) => { setFailures(event.target.value) }} />

            <label for="schoolsup">School support: </label>
            <select className='inputBoxes' name="schoolsup" id="schoolsup" onChange={(event) => { setschoolsup(event.target.value) }}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>

            <label for="romantic">Romantic: </label>
            <select className='inputBoxes' name="romantic" id="romantic" onChange={(event) => { setromantic(event.target.value) }}>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>

            <label for="Fjob">Father job: </label>
            <select className='inputBoxes' name="Fjob" id="Fjob" onChange={(event) => { setFjob(event.target.value) }}>
                <option value="">Select</option>
                <option value="services">Services</option>
                <option value="at_home">At Home</option>
                <option value="teacher">Teacher</option>
                <option value="health">Health</option>
                <option value="other">Other</option>
            </select>

            <label for="Mjob">Mother job: </label>
            <select className='inputBoxes' name="Mjob" id="Mjob" onChange={(event) => { setMjob(event.target.value) }}>
                <option value="">Select</option>
                <option value="services">Services</option>
                <option value="at_home">At Home</option>
                <option value="teacher">Teacher</option>
                <option value="health">Health</option>
                <option value="other">Other</option>
            </select>

            <label for="Fedu">Father education: </label>
            <select className='inputBoxes' name="Fedu" id="Fedu" onChange={(event) => { setFedu(event.target.value) }}>
                <option value="">Select</option>
                <option value="0">None</option>
                <option value="1">Primary education (4th grade)</option>
                <option value="2">5th to 9th grade</option>
                <option value="3">Secondary education</option>
                <option value="4">Higher education</option>
            </select>

            <label for="Medu">Mother education: </label>
            <select className='inputBoxes' name="Medu" id="Medu" onChange={(event) => { setMedu(event.target.value) }}>
                <option value="">Select</option>
                <option value="0">None</option>
                <option value="1">Primary education (4th grade)</option>
                <option value="2">5th to 9th grade</option>
                <option value="3">Secondary education</option>
                <option value="4">Higher education</option>
            </select>

            <label for="goout">Going out with friends:(from 1 - very low to 5 - very high)</label>
            <input name="goout" type="number" className='inputBoxes' placeholder='Going out with friends' onChange={(event) => { setgoout(event.target.value) }} />

            <label for="paid">Extra paid classes within the course subject: </label>
            <select className='inputBoxes' name="paid" id="paid" onChange={(event) => { setpaid(event.target.value) }}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>

            <label for="reason">Reason to choose this school : </label>
            <select className='inputBoxes' name="reason" id="reason" onChange={(event) => { setreason(event.target.value) }}>
                <option value="">Select</option>
                <option value="home">Close to home</option>
                <option value="reputation">School reputation</option>
                <option value="course">Course preference</option>
                <option value="other">Other</option>
            </select>

            <label for="Dalc">Workday alcohol consumption:(from 1 - very low to 5 - very high)</label>
            <input name="Dalc" type="number" className='inputBoxes' placeholder='workday alcohol consumption' onChange={(event) => { setDalc(event.target.value) }} />


            <label for="walc">Weekend alcohol consumption: (from 1 - very low to 5 - very high)</label>
            <input name="walc" type="number" className='inputBoxes' placeholder='Weekend alcohol consumption' onChange={(event) => { setwalc(event.target.value) }} />

            <button className='buttonItem' onClick={handleclick}>Predict G3</button>

        </div>
        <div className='predictedScore'>
            <b>Predicted G3:</b> {predictdeValue}
        </div>
        <BarChart/>
        
        
        </>
    )
}

export default Dashboard