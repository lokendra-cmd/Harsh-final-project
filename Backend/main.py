from flask import Flask,jsonify,request
import numpy as np
from xgboost import XGBRegressor
import pandas as pd
import json
import keras
import pickle
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

reconstructed_model = keras.models.load_model("model.h5")

@app.route('/', methods =['GET'])
def hello():
  return "hello world"

@app.route('/predict', methods =['POST'])
def result():
    dict= {
      'absences':[request.json['absences']],	
      'G2':[request.json['G2']],	
      'G1':[request.json['G1']],	
      'failures':[request.json['failures']],	
      'Walc':[request.json['Walc']],	
      'schoolsup':[request.json['schoolsup']],	
      # 'romantic':[request.json['romantic']],	
      # 'Fjob':[request.json['Fjob']],	
      # 'Dalc':[request.json['Dalc']],	
      # 'paid':[request.json['paid']],	
      # 'Mjob':[request.json['Mjob']],	
      # 'Medu':[request.json['Medu']],	
      # 'reason':[request.json['reason']],	
      # 'goout':[request.json['goout']],	
      # 'Fedu':[request.json['Fedu']]
      }

    input = pd.DataFrame.from_dict(dict)
    # fmap = {'services':'1', 'at_home':'2', 'teacher':'3', 'health':'4', 'other':'5'}
    # input['Mjob'] = input['Mjob'].map(fmap)
    # input['Fjob'] = input['Fjob'].map(fmap)

    fmap1 = {'yes':'1', 'no':'0'}
    input['schoolsup'] = input['schoolsup'].map(fmap1)
    # input['paid'] = input['paid'].map(fmap1)
    # input['romantic'] = input['romantic'].map(fmap1)

    # fmap2 = {'course':'1', 'home':'2', 'reputation':'3', 'other':'4'}
    # input['reason'] = input['reason'].map(fmap2)

    input = np.asarray(input).astype(np.float32)
    
    res = str(reconstructed_model.predict(input)[0][0])
    
    return jsonify({"Predicted G3":res})

@app.route('/xgboost', methods =['POST'])
def predictxgboost():
  dict= {
      'absences':[request.json['absences']],	
      'G2':[request.json['G2']],	
      'G1':[request.json['G1']],	
      'failures':[request.json['failures']],	
      'Walc':[request.json['Walc']],	
      'schoolsup':[request.json['schoolsup']],	
  }

  input = pd.DataFrame.from_dict(dict)

  fmap1 = {'yes':'1', 'no':'0'}
  input['schoolsup'] = input['schoolsup'].map(fmap1)

  input = np.asarray(input).astype(np.float32)

  with open('XgBoostmodel.pkl', 'rb') as f:
    model = pickle.load(f)

  res = model.predict(input)[0]

  res = str(res)

  return jsonify({"Predicted G3":res})
 



if __name__ == "__main__":
    app.run(debug=True)