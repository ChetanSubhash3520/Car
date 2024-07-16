import React, { useState } from 'react';
import './MyForm.css';
import axios from 'axios';

function MyForm() {
  const [formData, setFormData] = useState({
    Name: '',
    Location: '',
    Year: '',
    Kilometers_Driven: '',
    Fuel_Type: '',
    Transmission: '',
    Owner_Type: '',
    Mileage: '',
    Engine: '',
    Power: '',
    Seats: ''
  });

  const [submitResult, setSubmitResult] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/submit-form', formData)
      .then(response => {
        console.log(response.data);
        setSubmitResult(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleChange = e => {
    console.log(e)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOptionChange=(event) =>{
    setSelectedOption(event.target.value);
  }

  return (
    <div className='wrapper'>
      <div className="header">
        <h1>Used Car Price Prediction</h1>
      </div>
      <div className="container">
        <div className="column">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
            />
            <label htmlFor="name">Location:</label>
            <input
              type="text"
              id="name"
              name="Location"
              value={formData.Location}
              onChange={handleChange}
            />
            <label htmlFor="name">Year:</label>
            <input
              type="number"
              id="name"
              name="Year"
              value={formData.Year}
              onChange={handleChange}
            />
            <label htmlFor="name">Kilometers_Driven:</label>
            <input
              type="number"
              id="name"
              name="Kilometers_Driven"
              value={formData.Kilometers_Driven}
              onChange={handleChange}
            />
            <label for="dropdown">Fuel_Type:</label>
            <select id="dropdown" name="dropdown" value={selectedOption}
              onChange={handleOptionChange}>
              <option value="option1">Petrol</option>
              <option value="option2">Diesel</option>
            </select>
            {/* <label htmlFor="name">Fuel_Type:</label>
            <input
              type="text"
              id="name"
              name="Fuel_Type"
              value={formData.Fuel_Type}
              onChange={handleChange}
            /> */}
            <label htmlFor="name">Transmission:</label>
            <input
              type="text"
              id="name"
              name="Transmission"
              value={formData.Transmission}
              onChange={handleChange}
            />
            <label htmlFor="name">Owner_Type:</label>
            <input
              type="text"
              id="name"
              name="Owner_Type"
              value={formData.Owner_Type}
              onChange={handleChange}
            />
            <label htmlFor="email">Mileage:</label>
            <input
              type="number"
              id="email"
              name="Mileage"
              value={formData.Mileage}
              onChange={handleChange}
            />
            <label htmlFor="message">Engine:</label>
            <input
              id="message"
              type='number'
              name="Engine"
              value={formData.Engine}
              onChange={handleChange}
            ></input>
            <label htmlFor="name">Power:</label>
            <input
              type="number"
              id="name"
              name="Power"
              value={formData.Power}
              onChange={handleChange}
            />
            <label htmlFor="name">Seats:</label>
            <input
              type="number"
              id="name"
              name="Seats"
              value={formData.Seats}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="result-box">
          {submitResult ? Object.keys(submitResult).map((property, index) => (
            <p key={index}>{`${property}: ${submitResult[property]}`}</p>)) : <p>please enter the values to see the price prediction</p>
          }
        </div>
      </div>
      <div className="footer">
        <p>Thankyou</p>
      </div>
    </div>
  );
}

export default MyForm;
