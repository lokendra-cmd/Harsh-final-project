import React from 'react'
import Plot from 'react-plotly.js';
import pbd from './pbd.jpg'
function Visualization() {

  return (
    <div className='visualization'>
      <div className="plots">
        <Plot style={{padding:"2vw 15vw 2vw 15vw"}}
          data={[
            {
              type: 'bar',
              x: ['absences', 'G2', 'G1', 'failures', 'Walc', 'schoolsup', 'romantic', 'Fjob', 'Dalc', 'paid', 'Mjob', 'Medu', 'reason', 'goout', 'Fedu', 'health', 'activities', 'traveltime', 'studytime', 'famsup', 'freetime', 'address', 'guardian', 'sex', 'nursery', 'internet', 'age', 'famrel', 'famsize', 'Pstatus', 'higher', 'school'],
              y: [648.166848, 451.680952, 319.716427, 140.934898, 28.444167, 28.319018, 20.089526, 19.952055, 17.082868, 16.1299, 15.129472, 13.894852, 11.355722, 10.472494, 10.375563, 10.176668, 7.601049, 6.758151, 6.231603, 5.303438, 4.479465, 3.734921, 3.419273, 3.39995, 3.297083, 2.999142, 2.277762, 2.110686, 2.096131, 1.389328, 1.234479, 1.07549],
              marker: {
                color: '#ff5733'
              }
            },
          ]}
          layout={{
            width: 800,
            height: 600,
            plot_bgcolor: '#000',
            paper_bgcolor: "#000",
            title: 'Score of features',
            font: {
              family: 'Arial',
              size: 18,
              color: '#fff'
            }
          }}
        />
      </div>

      <div className='plots'>
        <p>Probability Distribution of Grades</p>
        <img src={pbd} alt="" style={{width:"70vw"}}/>
      </div>



    </div>
  )
}

export default Visualization