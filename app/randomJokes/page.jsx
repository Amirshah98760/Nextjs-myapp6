"use client";
import { useEffect, useState } from "react";

const RandomJokes = () => {
const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    try {
      const res = await fetch("https://icanhazdadjoke.com", {
        headers: { "Accept": "application/json" },
      });
      const data = await res.json();
      console.log(data) // store joke in state
      setJoke(data.joke); // store joke in state
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  if (!joke) {
    return (
      <div className="flex h-screen items-center justify-center ">
        <p className="text-gray-500 text-lg animate-bounce ">
          Fetching a random joke...
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center flex-col gap-6 ">
     <div className="w-1/2  border border-gray-400 p-10 rounded-lg shadow-lg bg-white">
         <p className="text-xl font-semibold">{joke}</p>
      <button onClick={fetchJoke} className="ml-4 mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition cursor-pointer">
        New Joke
      </button>
     </div>
    </div>
  );
};

export default RandomJokes;