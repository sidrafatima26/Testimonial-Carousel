import React from 'react';
import Card from './Card';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import { useState } from 'react';

const Testimonials = (props) => {
    let reviews = props.reviews;
    const[index, setIndex] = useState(0);

    function handleLeft(){
        if(index-1 < 0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }
    function handleRight(){
        if(index+1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }

    }
    function handleSurprise(){
      let randomIndex = Math.floor(Math.random() * reviews.length);
      setIndex(randomIndex);
    }

    return(
        <div className="hover:shadow-xl hover:scale-105 w-[85vw] md:w-[700px] bg-white flex-col justify-center items-center mt-10 p-10 transition-all duration-700">
            <Card review={reviews[index]}/>
            <div className="flex justify-center items-center text-3xl mt-2 gap-3 text-violet-400 font-bold">
                <button onClick={handleLeft} className='cursor-pointer hover:text-violet-500 '> <FiChevronLeft/> </button>
                <button onClick={handleRight} className='cursor-pointer hover:text-violet-500 '> <FiChevronRight/> </button>
            </div>
            <div className=""> <button onClick={handleSurprise} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg "> Surprise Me </button> </div>
        </div>
    );

}

export default Testimonials;