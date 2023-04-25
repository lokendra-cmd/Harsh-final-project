import { React, useContext } from 'react'
import Xgboost from './Xgboost';
import Keras from './Keras';
import DataContext from "../Context/DataContext";
function Viewstate() {
  const context = useContext(DataContext);
  const { chosenModel, setchosenModel,setpredictdeValue } = context;
  
  return (
    <div className='viewstate'>
      <div className="switchbutton">
        {chosenModel === 'xgboost' ?
          <div className="xgboostBtn" onClick={() => {setchosenModel('xgboost');setpredictdeValue(0)}} style={{ "box-shadow": "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff9900" }}>
            Xgboost
          </div>
          :
          <div className="xgboostBtn" onClick={() => {setchosenModel('xgboost');setpredictdeValue(0)}}>
            Xgboost
          </div>
        }

        {chosenModel === 'keras' ?
          <div className="xgboostBtn" onClick={() => {setchosenModel('keras');setpredictdeValue(0)}} style={{ "box-shadow": "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff9900" }}>
            Keras
          </div>
          :
          <div className="xgboostBtn" onClick={() => {setchosenModel('keras');setpredictdeValue(0)}}>
            Keras
          </div>
        }

      </div>
        {chosenModel==='xgboost'?<Xgboost/>:<Keras/>}
    </div>
  )
}

export default Viewstate