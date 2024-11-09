/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export interface Country {
  name: string;
  population: number;
  capital: string;
}

export async function fetchCountries(): Promise<Country[]> {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  const countries: Country[] = response.data.map((country: any) => ({
    name: country.name.common,
    population: country.population,
    capital: country.capital ? country.capital[0] : 'N/A',
  }));
  return countries.sort((a, b) => a.name.localeCompare(b.name));
}