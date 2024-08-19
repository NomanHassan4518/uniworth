import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";

const ShopingDetail = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);

    const pakistan = allCountries.find(
      (country) => country.name === "Pakistan"
    );
    if (pakistan) {
      setSelectedCountry(pakistan.isoCode);
    }
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const countryStates = State.getStatesOfCountry(selectedCountry);
      setStates([{ isoCode: "", name: "Select State" }, ...countryStates]);
      setSelectedState("");
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
      const stateCities = City.getCitiesOfState(selectedCountry, selectedState);
      setCities(stateCities);
      setSelectedCity("");
    } else {
      const allCountryCities = City.getCitiesOfCountry(selectedCountry);
      setCities([{ name: "Select City" }, ...allCountryCities]);
      setSelectedCity("");
    }
  }, [selectedCountry, selectedState]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="mt-5 px-3">
      <h1 className="text-[25px] font-bold">Shipping Details</h1>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div>
          <label htmlFor="" className="block font-semibold">
            Full Name<span className="text-[#ed1c24]">*</span>
          </label>
          <input
            type="text"
            className="border py-2 px-4 mt-2 w-full text-gray-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="" className="block font-semibold">
            Email Address<span className="text-[#ed1c24]">*</span>
          </label>
          <input
            type="email"
            className="border py-2 px-4 mt-2 w-full text-gray-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="" className="block font-semibold">
            Phone<span className="text-[#ed1c24]">*</span>
          </label>
          <input
            type="text"
            className="border py-2 px-4 mt-2 w-full text-gray-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="country" className="block font-semibold">
            Country<span className="text-[#ed1c24]">*</span>
          </label>
          <select
            name="country"
            id="country"
            className="border py-2 px-4 mt-2 w-full focus:outline-none text-gray-500"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            {countries.map((country, index) => (
              <option key={index} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="" className="block font-semibold">
            State / Country<span className="text-[#ed1c24]">*</span>
          </label>
          <select
            name=""
            id=""
            value={selectedState}
            onChange={handleStateChange}
            className="border py-2 px-4 mt-2 w-full focus:outline-none text-gray-500"
          >
            {states.map((state, index) => (
              <option value={state.isoCode}>{state.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="" className="block font-semibold">
            Town/City<span className="text-[#ed1c24]">*</span>
          </label>
          <select
            name=""
            id=""
            value={selectedCity}
            onChange={handleCityChange}
            className="border py-2 px-4 mt-2 w-full focus:outline-none text-gray-500"
          >
            {cities.map((city, index) => (
              <option value={city.isoCode}>{city.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="" className="block font-semibold">
            Postal Code
          </label>
          <input
            type="text"
            className="border py-2 px-4 mt-2 w-full text-gray-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="" className="block font-semibold">
            Address Line 1<span className="text-[#ed1c24]">*</span>
          </label>
          <input
            type="text"
            className="border py-2 px-4 mt-2 w-full text-gray-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="" className="block font-semibold">
            Address Line 2
          </label>
          <input
            type="text"
            className="border py-2 px-4 mt-2 w-full text-gray-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-10">
        <p className="block font-semibold">Order Notes</p>
        <textarea
          name=""
          id=""
          className="h-[70px] w-full p-4 mt-3 border rounded-lg "
          placeholder="Notes about your order, eg special notes for delivery"
        ></textarea>
      </div>
    </div>
  );
};

export default ShopingDetail;
