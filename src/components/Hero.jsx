

export function Hero() {
   return (
      <div className="bg-hero-mobile md:bg-hero-desktop bg-cover bg-center h-screen w-full notebook:w-full">
         <div className="border 1px white flex flex-col h-full w-full pt-8 px-2 iphonexr:px-4 iphonexr:pt-10  notebook:w-[32rem] notebook:ml-[12rem] notebook:pt-[8rem] fullhd:w-[32rem] fullhd:ml-[30rem] fullhd:pt-56">
            <h1 className="text-white text-center font-rachelya text-5xl  mb-2 md:text-left md:text-6xl notebook:text-5xl fullhd:text-6xl  ">Descubra Como Viver uma Vida Próspera em Portugal!</h1>
            <p className="font-poppins text-white text-center text-[1.24rem]  pt-2 md:text-left md:text-2xl md:leading-7 notebook:text-xl fullhd:text-2xl  ">
               O Guia Completo para Brasileiros que Sonham em Morar em Portugal -
            </p>
            <p className="font-poppins font-bold text-white text-center text-xl leading-tight md:text-left  md:text-2xl notebook:text-xl fullhd:text-2xl fullhd:pr-4">
               Conheça a Experiência de Quem já vive no País há 14 Anos!
            </p>
            <p className="font-poppins font-extrabold text-p-text text-center text-xl leading-tight mt-1 pr-2 pt-2 md:text-left md:text-2xl md:leading-7 notebook:text-xl fullhd:text-2xl">
               Inscreva-se agora e comece sua jornada em direção a uma vida plena em Portugal!
            </p>
            <button className="font-poppins 
            font-bold 
            bg-button-bg 
            text-white 
            text-center 
            text-[1.6rem]
            px-8 
            p-2
            whitespace-nowrap
            rounded-xl
            shadow-xl
            ml-1
            mt-[18rem]
            


            notebook:text-4xl
            notebook:mt-[2rem]
            notebook:ml-0
            notebook:px-12
            
            fullhd:text-[2.5rem]
            fullhd:mt-11
            fullhd:px-5
            fullhd:py-2
            fullhd:ml-0
            fullhd:shadow-2xl
            fullhd:whitespace-nowrap
            "
            >
               QUERO ME INSCREVER
            </button>            
         </div>
      </div>
);
}



