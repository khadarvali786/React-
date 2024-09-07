import { useEffect, useState } from "react";

export default function Jokes() {
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const [joke, setJoke] = useState({});
  const getJoke = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setJoke(data);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);
      const data = await response.json();
      setJoke(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h4>Joke</h4>
      <p>Setup : {joke.setup}</p>
      <p>Punchline : {joke.punchline}</p>
      <button onClick={getJoke}>Get Joke</button>
    </div>
  );
}
