// app/countries/[country]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { fetchCountries, Country } from "../../../../../lib/countryapi"; // Adjust the import path

// The page props expect params to be a Promise, so we define it as such.
export default function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(undefined);

  // Resolve the params promise to extract the country name
  useEffect(() => {
    const getCountries = async () => {
      const fetchedCountries = await fetchCountries();
      
      // Resolve the promise for params
      const resolvedParams = await params;
      const countryName = resolvedParams.country.replace(/-/g, " ");  // Replace hyphens if needed
      
      const country = fetchedCountries.find(
        (country) => country.name.toLowerCase() === countryName.toLowerCase()
      );
      setSelectedCountry(country);
    };

    getCountries();
  }, [params]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md border-4 border-gray-900 bg-white p-6">
        <h1 className="text-2xl font-extrabold text-gray-900 capitalize mb-4">Country Information</h1>
        {selectedCountry ? (
          <div>
            <p className="mb-2">Name: {selectedCountry.name}</p>
            <p className="mb-2">Capital: {selectedCountry.capital}</p>
            <p className="mb-2">Population: {selectedCountry.population}</p>
            {/* <p className="mb-2">Size: {selectedCountry.size} km<sup>2</sup></p> */}
          </div>
        ) : (
          <p className="text-center mt-4">Country not found</p>
        )}
      </div>
    </div>
  );
}
