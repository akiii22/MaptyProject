import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesContext";
function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your First city by clicking on a city on the map" />
    );

  const countries = cities.reduce((prev, city) => {
    if (!prev.map((el) => el.country).includes(city.country))
      return [...prev, { country: city.country, emoji: city.emoji }];
    else return prev;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
