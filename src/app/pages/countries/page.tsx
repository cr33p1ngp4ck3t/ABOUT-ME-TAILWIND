/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { fetchCountries, Country } from '../../../../lib/countryapi';

export default function CountryPage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  useEffect(() => {
    const getCountries = async () => {
      const fetchedCountries = await fetchCountries();
      setCountries(fetchedCountries);
    };

    getCountries();
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedCountries = filteredCountries.reduce((acc: { [key: string]: Country[] }, country) => {
    const firstLetter = country.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(country);
    return acc;
  }, {});

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="text"
        placeholder="Search Countries..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="input-style-1 p-2 border border-gray-300 rounded-md shadow-sm"
      />
      <div>
        <h1 className="font-extrabold text-gray-900 text-3xl capitalize mt-4">Countries</h1>
        <div className="flex flex-wrap justify-center mt-4">
          {Object.keys(groupedCountries).sort().map(letter => (
            <button key={letter} onClick={() => setSelectedLetter(letter)} className="bw-button-style m-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm">
              {letter}
            </button>
          ))}
        </div>
        <ul className="list-style mt-4">
          {selectedLetter && groupedCountries[selectedLetter] ? (
            groupedCountries[selectedLetter].map((country) => (
              <li key={country.name} className="list-style m-2">
                <Link href={`countries/${country.name.replace(/\s+/g, '-')}`}>
                  <button className="bw-button-style p-2 border border-gray-300 rounded-md shadow-sm">{country.name}</button>
                </Link>
              </li>
            ))
          ) : (
            <p className="text-center mt-4">Select a letter to see countries</p>
          )}
        </ul>
      </div>
    </div>
  );
}
