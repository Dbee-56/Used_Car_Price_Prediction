import pickle 
import numpy as np
import pandas as pd
import pickle
import json

def predict(df):

    df['Year']=int(df['Year'])
    df['Kilometers_Driven']=int(df['Kilometers_Driven'])
    
    df['Eng_unit']=df['Engine'].str.split().str.get(1)
    df['Engine']=df['Engine'].str.split().str.get(0)
    df['Engine']=df['Engine'].astype(float)
    
    df['Pow_unit']=df['Power'].str.split().str.get(1)
    df['Power']=df['Power'].str.split().str.get(0)
    df['Power']=df['Power'].astype(float)
    
    df['price']=df['price'].astype(float)
    
    df['Mil_in_kmpl']=df['Mileage'].astype(float)
    
    fuel_map = {'CNG':0,'Diesel':1,'LPG':2,'Petrol':3}
    df['Fuel_Type']=df['Fuel_Type'].map(fuel_map)
    trans_map={'Manual':1,'Automatic':0}
    df['Transmission']=df['Transmission'].map(trans_map)
    
    print(df.head())
        
    with open('le.pkl','rb') as file:
        le=pickle.load(file)
        
    for column in df.columns:
        if(df[column].dtypes=='object'):
            df[column] = le.fit_transform(df[column])
    
#     with open('p1.json','r') as file:
#         grp_p1_dic = json.load(file)
    
#     print(grp_p1_dic)
    print(df.head())
    
#     df['p1']=df.apply(lambda row:grp_p1_dic[row['Company_name']],axis=1)
    
    
    X=df[['Location','Year','Kilometers_Driven','Fuel_Type','Transmission','Engine','Power','Company_name','Mil_in_kmpl','price']]
    model = pickle.load(open("final_model.sav", 'rb'))
    
    prediction = model.predict(X)
    return prediction
    