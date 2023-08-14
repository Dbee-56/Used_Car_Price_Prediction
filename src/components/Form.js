import React, { useState } from "react";
import axios from "axios";
import MyModal from "./showModal";

const Form = () => {
  const [user, setUser] = useState({
    Location: "",
    Year: "",
    Kilometers_Driven: "",
    Fuel_Type: "",
    Transmission: "",
    Engine: "",
    Power: "",
    Company_name: "",
    Mileage: "",
    price: "",
  });
  const [result, setResult] = useState(0.0);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  let key, value;
  const handleInputs = (e) => {
    key = e.target.name;
    value = e.target.value;
    setUser({ ...user, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", user);
      const pred = parseFloat(response.data);
      const pred_round = parseFloat(pred.toFixed(2));
      setResult(pred_round);
      console.log(pred);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="form">
          <form action="" onSubmit={handleSubmit}>
            <div className="left">
              <div className="company" id="el">
                <label htmlFor="">Company Name</label>
                <input
                  type="text"
                  placeholder="Enter Company Name..."
                  name="Company_name"
                  value={user.Company_name}
                  onChange={handleInputs}
                />
              </div>
              <div className="location" id="el">
                <label htmlFor="">Location</label>
                <input
                  type="text"
                  placeholder="Enter Location.."
                  name="Location"
                  value={user.Location}
                  onChange={handleInputs}
                />
              </div>
              <div className="year" id="el">
                <label htmlFor="">Year</label>
                <input
                  type="number"
                  placeholder="When you have buyed this?..."
                  name="Year"
                  value={user.Year}
                  onChange={handleInputs}
                />
              </div>
              <div className="fuel" id="el">
                <label htmlFor="">Fuel Type</label>
                <select
                  name="Fuel_Type"
                  id="fuektp"
                  value={user.Fuel_Type}
                  onChange={handleInputs}
                >
                  <option value="nan">Choose Fule Type</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Petrol">Petrol</option>
                  <option value="CNG">CNG</option>
                  <option value="LPG">LPG</option>
                </select>
              </div>
              <div className="km" id="el">
                <label htmlFor="">Kilometre Driven</label>
                <input
                  type="text"
                  placeholder="Enter kms driven..."
                  name="Kilometers_Driven"
                  value={user.Kilometers_Driven}
                  onChange={handleInputs}
                />
              </div>
              <div className="btn-class" id="el">
                <button onClick={() => setShowModal(true)}>Submit</button>
              </div>
            </div>
            <div className="right">
              <div className="transmission" id="el">
                <label htmlFor="">Transmission Type</label>
                <select
                  name="Transmission"
                  id="trns"
                  value={user.Transmission}
                  onChange={handleInputs}
                >
                  <option value="nan">Manual/Auto ?</option>
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                </select>
              </div>
              <div className="Engine" id="el">
                <label htmlFor="">Engine</label>
                <input
                  type="text"
                  placeholder="For example 1000 CC"
                  name="Engine"
                  value={user.Engine}
                  onChange={handleInputs}
                />
              </div>
              <div className="power" id="el">
                <label htmlFor="">Power</label>
                <input
                  type="text"
                  placeholder="For example 60 bhp"
                  name="Power"
                  value={user.Power}
                  onChange={handleInputs}
                />
              </div>
              <div className="mil" id="el">
                <label htmlFor="">Mileage in kmpl</label>
                <input
                  type="text"
                  placeholder="Enter Mileage..."
                  name="Mileage"
                  value={user.Mileage}
                  onChange={handleInputs}
                />
              </div>
              <div className="price" id="el">
                <label htmlFor="">Buying Price</label>
                <input
                  type="text"
                  placeholder="Enter Buying Price in lakhs..."
                  name="price"
                  value={user.price}
                  onChange={handleInputs}
                />
              </div>
            </div>
          </form>
        </div>
        {showModal && <MyModal closeModal={closeModal} price={result} user={user}/>}
      </div>
    </>
  );
};

export default Form;
