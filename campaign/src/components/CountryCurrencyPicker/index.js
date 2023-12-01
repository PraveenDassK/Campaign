// CountryCurrencyPicker.js
import React, { useState } from "react";
import Select from "react-select";
import currencySymbolMap from "currency-symbol-map";

const countries = [
  {
    label: currencySymbolMap("USD") + "  " + "USD",
    value: "US",
    currency: "USD",
  },
  {
    label: currencySymbolMap("CAD") + "  " + "CAD",
    value: "CA",
    currency: "CAD",
  },
  {
    label: currencySymbolMap("INR") + "  " + "INR",
    value: "IN",
    currency: "INR",
  },
  // Add more countries as needed
];

const CountryCurrencyPicker = ({ onSelect }) => {
  const [selectedCountry, setSelectedCountry] = useState({
    label: currencySymbolMap("INR") + "  " + "INR",
    value: "IN",
    currency: "INR",
  });

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    onSelect({
      country: selectedOption.value,
      currency: selectedOption.currency,
    });
  };

  return (
    <div>
      <Select
        options={countries}
        onChange={handleCountryChange}
        value={selectedCountry}
        defaultValue={selectedCountry}
        placeholder='Select a country'
        styles={{ border: "none", outline: "none" }}
      />
    </div>
  );
};

export default CountryCurrencyPicker;
