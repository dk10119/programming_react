import foxImg from '../assets/foxes4ev.png'
import { useState } from 'react'
import PersonsContainer from '../components/PersonsContainer';
import Counter from '../components/Counter';
import Form from '../components/Form';
import View from '../components/View';
import Dashboard from './Dashboard';
import LogInButton from '../components/LogInButton';

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [persons, setPerson] = useState([
    { id: "1", name: "Maria", title: "CEO", location: "Helsinki" },
    { id: "2", name: "John", title: "CTO", location: "London" },
    { id: "3", name: "Vera", title: "CMO", location: "Berlin" }
  ]);
  const [inputValues, setInputValue] = useState({}); //can be left empty. useState will create basesd on the name given
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("Guest");

  const clickIncreaseHandler = () => setCounter(counter + 1);
  const clickDecreaseHandler = () => setCounter(counter - 1);
  const clickResetHandler = () => setCounter(0);
  const inputChangeHandler = e => setInputValue(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  const loginHandler = user => {
    setIsLoggedIn(!isLoggedIn);
    setUser(user);
  };
  return (
    <>
      <main className='flex flex-col items-center bg-white bg-opacity-40'>
        <img src={foxImg} alt="image of a sleeping fox" />

        < LogInButton loginHandler={loginHandler} isLoggedIn={isLoggedIn} user="Alex" />
        {!isLoggedIn && <LogInButton loginHandler={loginHandler} isLoggedIn={isLoggedIn} user="Guest" />}

        {isLoggedIn && <Dashboard user={user} />}

        <Counter
          counter={counter}
          clickIncreaseHandler={clickIncreaseHandler}
          clickDecreaseHandler={clickDecreaseHandler}
          clickResetHandler={clickResetHandler}
        />

        <Form inputChangeHandler={inputChangeHandler} />

        <View {...inputValues} />

        <PersonsContainer persons={persons} />
      </main>
    </>
  )
}
