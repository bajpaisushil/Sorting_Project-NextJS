import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh]">
      <h1 className="text-[1.7rem] lg:text-[2.5rem] text-center mb-[4rem] pt-[5rem] font-bold">
        Searching & Sorting Efficiency Project
      </h1>
      <h1 className="text-[1.5rem] lg:text-[2rem] mb-[2rem] text-center font-bold">
        Choose a technique to play with :-
      </h1>
      <div className="flex flex-col justify-center items-center m-auto w-fit">
        <Link
          className="text-[1.7rem] font-semibold p-[1rem] rounded-lg m-[1rem] bg-blue-500 text-white"
          href="/sorting"
        >
          Sorting
        </Link>
        <Link
          className="text-[1.7rem] font-semibold p-[1rem] rounded-lg m-[1rem] bg-blue-500 text-white"
          href="/searching"
        >
          Searching
        </Link>
      </div>
      <div className="flex flex-col bg-amber-100 justify-center items-center lg:p-[0.6rem] absolute top-0 right-0">
        <p className="font-extrabold text-[1.5rem]">
          Project : Design and Analysis of Algorithms
        </p>
      </div>
    </div>
  );
}
