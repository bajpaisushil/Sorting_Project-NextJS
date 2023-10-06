"use client";

import { useState } from "react";
import { linearSearch, binarySearch } from "../algorithms";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function Home() {
  const [numbers, setNumbers] = useState<any>("");
  const [searchingAlgorithm, setSearchingAlgorithm] = useState<any>("linear");
  const [foundAt, setFoundAt] = useState<number>(-1);
  const [timeTaken, setTimeTaken] = useState<any>(0);
  const [toSearch, setToSearch] = useState<number>(0);
  const [confettiActive, setConfettiActive] = useState<boolean>(false);

  function handleSearch() {
    const startTime = performance.now();
    setConfettiActive(true);
    const numbersArray = numbers.split(",").map(Number);
    console.log("numbersArray", numbersArray);
    console.log('algo', searchingAlgorithm);
    
    switch (searchingAlgorithm) {
      case "linear":
        console.log('linearity',linearSearch(numbersArray, toSearch));
        setFoundAt(linearSearch(numbersArray, toSearch));
        break;
      case "binary":
        setFoundAt(binarySearch(numbersArray, toSearch));
        break;
      default:
        break;
    }
    console.log("found at, ", foundAt);

    if (foundAt == -1) {
      return <div className="flex justify-center items-center">
        <h1 className="text-center w-fit m-auto text-[4rem] font-bold">Number Not Found</h1>
      </div>;
    }
    const endTime = performance.now();
    const timeInSeconds = (endTime - startTime) / 1000;
    setTimeTaken(timeInSeconds.toFixed(6));
    setTimeout(() => {
      setConfettiActive(false);
    }, 3000);
  }
  const { width, height } = useWindowSize();
  const confeti = () => {
    return <Confetti width={width} height={height} />;
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-[2rem] text-[1.2rem]">
      <h1 className="text-[1.9rem] lg:text-[2.5rem] font-extrabold my-[2rem] mt-[4rem] lg:mt-[2rem]">
        Searching Project
      </h1>
      <textarea
        className="min-h-[3rem] my-[1rem] w-[80vw] border p-[0.5rem] border-gray-400 rounded-md"
        placeholder="Enter numbers separated by commas. &#10;&#10; E.g.: 1,2,3,4,5,..."
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
      <label htmlFor="toSearch">Enter a number to search</label>
      <input
        id="toSearch"
        type="text"
        className="rounded-lg p-[5px] my-[1rem]"
        placeholder="Enter number to search"
        value={toSearch}
        onChange={(e) => setToSearch(Number(e.target.value))}
      />
      <label htmlFor="algorithm">Which Algorithm you wish to apply ?</label>
      <select
        value={searchingAlgorithm}
        id="algorithm"
        onChange={(e) => setSearchingAlgorithm(e.target.value)}
        className="my-[1rem]"
      >
        <option value="linear">Linear Search</option>
        <option value="binary">Binary Search</option>
      </select>
      
      <button
        onClick={handleSearch}
        className="font-semibold bg-blue-700 p-[0.3rem] px-[0.6rem] rounded text-white "
      >
        Search
      </button>
      {foundAt !== -1 && (
        <div className="text-center">
          {confettiActive && confeti()}

          <div className="flex flex-col justify-center items-center pt-[2rem] m-[1rem]">
            <div className="flex flex-wrap bg-gray-200 p-[0.6rem] border border-gray-600 rounded-md">
              {
                <div className="m-[0.6rem]">
                  Found at Index: {String(foundAt)}
                </div>
              }
            </div>
          </div>
          <div className="text-[1.15rem] lg:text-[1.3rem] font-extrabold text-amber-950 my-[1rem]">
            Time Taken: {timeTaken} seconds
          </div>
        </div>
      )}
    </main>
  );
}
