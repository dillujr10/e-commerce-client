
"use client";
import { useEffect, useState } from "react";




const Slider = () => {
    
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(prev=> prev === data.length-1 ? 0 : prev + 1)
        }, 5000);
        return () => clearInterval(interval);
    }, []);
console.log( slideIndex);

    const data = [
        {
            id: "item1",
            name: 'Shoes',
            desc: "If a dog chews shoes whose shoes does he choose?",
     
            // image: "https://i.pinimg.com/564x/89/c4/7c/89c47c54c5a14361c465162e8dce1a08.jpg"
            image: "https://img.freepik.com/premium-photo/blue-football-boots-isolated-white_917664-22262.jpg?w=826"
       
        },
        {
            id: "item2",
            name: 'Shoes',
            desc: "Alaaas are you buying this bloody one?",
            image: "https://i.pinimg.com/564x/a0/32/ae/a032aeed85217be4c0d0500975e26837.jpg"
        },
        {
            id: "item3",
            name: 'Shoeboots',
            desc: "This is very shit Dont buy it",
            image: "https://i.pinimg.com/564x/7b/6e/6d/7b6e6dfb6e3d33750be16c4ca94972dd.jpg"
        },
    ]



// console.log(slideIndex);
    return (
        <>


         <div className="continer   w-full h-[60vh] flex">
            <div className="wrapper flex h-[100%]">

     
            <div className="slider  w-[100vw] h-[100%] flex flex-col sm:flex-row gap-10 transition-all">
                    <div className="imagecontainer flex-1 flex items-center justify-center  md:m-7 ">
                        <img src={data[slideIndex].image} alt="one" className="img w-full animate-shake h-[33vh] object-cover sm:h-[45vh] m   -7 md:w[50vw] mx-7 lg:[55vw] xl:w-[40vw]" />
                    </div>
                        <div className="info flex-1 flex flex-col items-center justify-center gap-5">
                            <h3 className="title text-5xl font-semibold font-mono  ">Winter Sale</h3>
                            <p className="desc tesxt-2xl font-mono  text-center   ">{data[slideIndex].desc}</p>
                            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Buy Now </button>

                        </div>
              
                </div>

          
                

         

                
           

                
                </div>
            
         </div>
        </>
    )
}

export default Slider