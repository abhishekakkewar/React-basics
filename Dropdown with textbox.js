

import React, { useState, useRef } from 'react'

export const CustomDropdown = () => {

    const [countries, setCountries] = useState([
        { name: "India",  cities: ["Mumbai", "Pune", "Belgaum"]},
        { name: "Spain",  cities: ["S1", "S2", "S3"]},
        { name: "USA",  cities: ["US1", "US2", "US3"]}
    ])

  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const inputRef = useRef(null);
//   const [addCountry, setAddCountry] = useState("");
  const availableState = countries.find((c) => c.name === selectedCountry);

  const handleaddCountry = () => {
    const newCountries = [...countries];
    let newObj = {
        name: inputRef.current.value, cities: []
    }
    newCountries.push(newObj);
    setCountries(newCountries)
  }
  
  return (
    <>
        <div>
            <label>Country</label>
            <select
                placeholder="Country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                >
                <option>Choose Country</option>
                {countries.map((value, key) => {
                    return (
                    <option value={value.name} key={key}>
                        {value.name}
                    </option>
                    );
                })}
            </select>
            <input type="text" ref={inputRef}/>
            <button onClick={handleaddCountry}>Add Country</button>
        </div>

        <div>
            <label>State</label>
            <select
                placeholder="State"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                >
                <option>Choose State</option>
                {availableState?.cities.map((name, key) => {
                    return (
                    <option value={name} key={key}>
                        {name}
                    </option>
                    );
                })}
            </select>
        </div>
    </>
  )
}


///////COntrolled 


// import React, { useState } from 'react'

// export const CustomDropdown = () => {

//     const [countries, setCountries] = useState([
//         { name: "India",  cities: ["Mumbai", "Pune", "Belgaum"]},
//         { name: "Spain",  cities: ["S1", "S2", "S3"]},
//         { name: "USA",  cities: ["US1", "US2", "US3"]}
//     ])

//   const [selectedCountry, setSelectedCountry] = useState();
//   const [selectedState, setSelectedState] = useState();
//   const [addCountry, setAddCountry] = useState("");
//   const availableState = countries.find((c) => c.name === selectedCountry);

//   const handleaddCountry = () => {
//     const newCountries = [...countries];
//     let newObj = {
//         name: addCountry, cities: []
//     }
//     newCountries.push(newObj);
//     setCountries(newCountries)
//   }
  
//   return (
//     <>
//         <div>
//             <label>Country</label>
//             <select
//                 placeholder="Country"
//                 value={selectedCountry}
//                 onChange={(e) => setSelectedCountry(e.target.value)}
//                 >
//                 <option>Choose Country</option>
//                 {countries.map((value, key) => {
//                     return (
//                     <option value={value.name} key={key}>
//                         {value.name}
//                     </option>
//                     );
//                 })}
//             </select>
//             <input type="text" value={addCountry} onChange={(e) => setAddCountry(e.target.value)} />
//             <button onClick={handleaddCountry}>Add Country</button>
//         </div>

//         <div>
//             <label>State</label>
//             <select
//                 placeholder="State"
//                 value={selectedState}
//                 onChange={(e) => setSelectedState(e.target.value)}
//                 >
//                 <option>Choose State</option>
//                 {availableState?.cities.map((name, key) => {
//                     return (
//                     <option value={name} key={key}>
//                         {name}
//                     </option>
//                     );
//                 })}
//             </select>
//         </div>
//     </>
//   )
// }