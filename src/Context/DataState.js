import React from 'react'
import { useState } from "react";
import axios from "axios";
import DataContext from './DataContext';

function DataState(props) {
    const [predictdeValue, setpredictdeValue] = useState()

    const getData = async (data) => {
        const result = await axios.post('http://127.0.0.1:5000/predict',data);
        setpredictdeValue(result.data['Predicted G3'])
        
    };


    return (
        <DataContext.Provider value={{getData,predictdeValue}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState;