import React from 'react'
import { useState } from "react";
import axios from "axios";
import DataContext from './DataContext';

function DataState(props) {
    const [chosenPanel, setchosenPanel] = useState('home')
    const [chosenModel, setchosenModel] = useState('xgboost')
    const [predictdeValue, setpredictdeValue] = useState(0)

    const predictxgboost = async(data)=>{
        const result = await axios.post('http://127.0.0.1:5000/xgboost',data);
        setpredictdeValue(result.data['Predicted G3'])
    }
    const predictkeras = async(data)=>{
        const result = await axios.post('http://127.0.0.1:5000/predict',data);
        setpredictdeValue(result.data['Predicted G3'])
    }
    const getData = async (data) => {
        const result = await axios.post('http://127.0.0.1:5000/predict',data);
        setpredictdeValue(result.data['Predicted G3'])
        
    };


    return (
        <DataContext.Provider value={{predictkeras,predictxgboost,getData,predictdeValue,chosenModel,setchosenModel,chosenPanel, setchosenPanel,setpredictdeValue}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState;