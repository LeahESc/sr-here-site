"use client"
import React, { useState, useEffect } from 'react';
import Data from '../types/data';
import Image from 'next/image';

const url = "https://api.themoviedb.org/3/person/10131/combined_credits?language=en-US"
type JSONResponse = {
  data?: Omit<Data, 'fetchedAt'>
}

export default function Page() {
  const [credits, setCredits] = useState([])
  const [movies, setMovies] = useState([])
  const [tv, setTV] = useState([])
  const [loading, setLoading] = useState(true)
// <Promise>:Data
// (url: string):
  const getCreditData = async()  => {
    // fetch(url, {
    //   method: "GET",
    //   headers: {
    //     accept: 'application/json',
    //     Authorization: `Bearer ${process.env.THE_MOVE_DATABASE_KEY}`
    //   }
    // })
    // .then((response) => {
    //   return response.json();
    // })
    // .then((data) => {
    //   setCredits(data.cast)
    //   const movieData = data.cast.filter(credit => credit.title).sort((creditA, creditB) => new Date(creditB.release_date) - new Date(creditA.release_date))
    //   setMovies(movieData)
    //   const tvData = data.cast.filter(credit=> credit.name).sort((creditA, creditB) => new Date(creditB.first_air_date) -  new Date(creditA.first_air_date))
    //   setTV(tvData)

    //   setLoading(false);
    // })
  }

  useEffect(() => {
    getCreditData();
    setLoading(false)
  }, [])

  return (
    <div className="flex w-full bg-white py-24 justify-between">
      {loading && 
        <div className="flex w-full justify-center">
          <div>
            <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin fill-pink-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }
      {credits.length > 0 && !loading && 
        <div className="flex w-full justify-between py-36 bg-gradient-to-b from-green-100 to-blue-500">
          <Image
            className="mx-auto top-36 z-5 max-xl:absolute shrink-0"
            src="/coming_soon.png"
            alt="Coming Soon!"
            width={550}
            height={650}
            priority
          />
        </div>
      // <div className="flex bg-white w-full m-auto justify-center space-x-8">
      //   <div>
      //   {tv.map(credit => (
      //     <div key={credit.credit_id} className="w-full bg-transparent hover:bg-orange-200 text-pink-600 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent px-4 rounded">
      //       <h2 className="text-pink-600">{credit.name}</h2>
      //       <p className="text-pink-600">{credit.character}</p>
      //       <p className="text-pink-600">{credit.first_air_date}</p>
      //     </div>
      //   ))}
      //   </div>
      //   <div>
      //   {movies.map(credit => (
      //     <div key={credit.credit_id} className="w-full bg-transparent hover:bg-orange-200 text-pink-600 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent px-4 rounded">
      //       <h2 className="text-pink-600">{credit.title}</h2>
      //       <p className="text-pink-600">{credit.character}</p>
      //       <p className="text-pink-600">{credit.release_date}</p>
      //     </div>
      //   ))}
      //   </div>
        
      //   {/* <div className="border-gray-800 radius-lg"></div> */}
      // </div>
      }
    </div>
  );
}
