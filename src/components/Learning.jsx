
export function Learning() {
  const scrollToLastSection = () => {
    const lastSection = document.querySelector('#contact');
    lastSection.scrollIntoView({ behavior: 'smooth' });
};

  return (
    <div className="flex  justify-center bg-learning-mobile md:bg-learning-desktop bg-cover bg-center h-screen w-full">
      <div className="  w-[22rem] max-w-[40rem] notebook:w-[26rem]">
        <button className="
              font-poppins
              font-bold
            bg-button-bg
              shadow-2xl
            text-white
              text-center
              text-[1.6rem]
              hover:text-about-text   hover:transition delay-150 duration-300 ease-in-out 
              px-5
              py-2
              w-full
              rounded-xl
              whitespace-nowrap
              mt-[45.5rem]

              
              
              iphone12pro:mt-[42rem]
              iphonexr:mt-[45.5rem]
              notebook:mt-[34.5rem]
              notebook:whitespace-nowrap
              notebook:text-3xl
              notebook:py-2

              opera:mt-[51.5rem]
              
              
              fullhd:mt-[51.5rem]
              fullhd:whitespace-nowrap
              fullhd:text-4xl
              fullhd:p-3
              fullhd:px-5
      "
      onClick={() => scrollToLastSection()}
      >
          QUERO ME INSCREVER
        </button>
      </div>
      
    </div>
  );
}





      //         <button className="
      //         font-poppins
      //         font-bold
      //       bg-button-bg
      //         shadow-2xl
      //       text-white
      //         text-center
      //         text-[1.6rem]
      //         px-8
      //         py-1
      //         rounded-xl
      //         ml-5
      //         mt-[45.8rem]

              
      //         notebook:mt-[34.5rem]
      //         notebook:ml-[28.5rem]
      //         notebook:whitespace-nowrap
      //         notebook:text-3xl
      //         notebook:py-2

      //         fullhd:mt-[52rem]
      //         fullhd:ml-[46rem]
      //         fullhd:whitespace-nowrap
      //         fullhd:text-4xl
      //         fullhd:p-3
      //         fullhd:px-5
      // ">