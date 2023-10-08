"use client";

import { useState } from "react";
import {
  bubbleSort,
  selectionSort,
  quickSort,
  mergeSort,
  insertionSort,
  heapSort,
  countingSort,
  radixSort,
} from "../algorithms";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function Sorting() {
  const [numbers, setNumbers] = useState<any>("");
  const [sortingAlgorithm, setSortingAlgorithm] = useState<any>("bubble");
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);
  const [timeTaken, setTimeTaken] = useState<any>(0);
  const [confettiActive, setConfettiActive] = useState<boolean>(false);

  function handleSort() {
    const startTime = performance.now();
    setConfettiActive(true);
    const numbersArray = numbers.split(",").map(Number);
    console.log("numbersArray", numbersArray);

    switch (sortingAlgorithm) {
      case "bubble":
        setSortedNumbers(bubbleSort(numbersArray));
        break;
      case "insertion":
        setSortedNumbers(insertionSort(numbersArray));
        break;
      case "heap":
        setSortedNumbers(heapSort(numbersArray));
        break;
      case "merge":
        setSortedNumbers(mergeSort(numbersArray));
        break;
      case "quick":
        setSortedNumbers(quickSort(numbersArray));
        break;
      case "selection":
        setSortedNumbers(selectionSort(numbersArray));
        break;
      case "counting":
        setSortedNumbers(countingSort(numbersArray));
        break;
      case "radix":
        setSortedNumbers(radixSort(numbersArray));
        break;
      default:
        break;
    }
    console.log("sorted", sortedNumbers);
    const endTime = performance.now();
    const timeInSeconds = (endTime - startTime) / 1000;
    setTimeTaken(timeInSeconds.toFixed(6));
    setTimeout(() => {
      setConfettiActive(false);
    }, 3000);
  }
  const { width, height } = useWindowSize();
  const confeti = () => {
    return (
      <Confetti
        width={width}
        height={height}
        onConfettiComplete={() => setSortedNumbers([])}
      />
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-[2rem] text-[1.2rem]">
      <h1 className="text-[1.9rem] lg:text-[2.5rem] font-extrabold my-[2rem] mt-[4rem] lg:mt-[2rem]">
        Sorting Project
      </h1>
      <textarea
        className="min-h-[3rem] my-[1rem] w-[80vw] border p-[0.5rem] border-gray-400 rounded-md"
        placeholder="Enter numbers separated by commas. &#10;&#10; E.g.: 1,2,3,4,5,..."
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
      <label htmlFor="algorithm">Which Algorithm you wish to apply ?</label>
      <select
        value={sortingAlgorithm}
        id="algorithm"
        onChange={(e) => setSortingAlgorithm(e.target.value)}
        className="my-[1rem] p-[4px] rounded-md font-bold"
      >
        <option value="bubble">Bubble Sort</option>
        <option value="insertion">Insertion Sort</option>
        <option value="heap">Heap Sort</option>
        <option value="merge">Merge Sort</option>
        <option value="quick">Quick Sort</option>
        <option value="selection">Selection Sort</option>
        <option value="counting">Counting Sort</option>
        <option value="radix">Radix Sort</option>
      </select>
      <button
        onClick={handleSort}
        className="font-semibold bg-blue-700 p-[0.3rem] px-[0.6rem] rounded text-white "
      >
        Sort
      </button>
      {sortedNumbers.length >= 1 && (
        <div className="text-center">
          {confettiActive && confeti()}

          <div className="flex flex-col justify-center items-center pt-[2rem] m-[1rem]">
            <div className="">Sorted List:</div>
            <div className="flex flex-wrap bg-gray-200 p-[0.6rem] border border-gray-600 rounded-md">
              {sortedNumbers?.map((sn: number, index: any) => (
                <div key={index} className="m-[0.6rem]">
                  {String(sn)} {" <"}
                </div>
              ))}
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
