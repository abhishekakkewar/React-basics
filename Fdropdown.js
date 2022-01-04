import React, { useState } from 'react'

const data = {
    countries: [
      {
        name: "Germany",
        states: [
          {
            name: "A",
            cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]
          }
        ]
      },
      { name: "Spain", states: [{ name: "B", cities: ["Barcelona"] }] },
  
      { name: "USA", states: [{ name: "C", cities: ["Downers Grove"] }] },
      {
        name: "Mexico",
        states: [{ name: ["D", "F", "H"], cities: ["Puebla"] }]
      },
      {
        name: "India",
        states: [
          { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] }
        ]
      }
    ]
  };

export const CustomDropdown = () => {
//   const [currentCountry, setCurrentCountry] = useState("");
//   const [stateList, setStateList] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();

  const availableState = data.countries.find((c) => c.name === selectedCountry);
//   const availableCities = availableState?.states?.find(
//     (s) => s.name === selectedState
//   );
  

  
  return (
    <>
        <div>
            <label>Country</label>
            <select
            placeholder="Country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            >
            <option>--Choose Country--</option>
            {data.countries.map((value, key) => {
                return (
                <option value={value.name} key={key}>
                    {value.name}
                </option>
                );
            })}
            </select>
        </div>

        <div>
            <label>State</label>
            <select
            placeholder="State"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            >
            <option>--Choose State--</option>
            {availableState?.states.map((e, key) => {
                return (
                <option value={e.name} key={key}>
                    {e.name}
                </option>
                );
            })}
            </select>
        </div>
    </>
  )
}