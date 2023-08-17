


export function About() {
  const scrollToLastSection = () => {
    const lastSection = document.querySelector('#contact');
    lastSection.scrollIntoView({ behavior: 'smooth' });
};


  return (
    
    <div className="bg-about-mobile md:bg-about-desktop bg-cover bg-center h-screen w-full">
      <div className=" h-full w-[100%]  pb-5 px-2 notebook:w-[30rem] notebook:ml-[39rem] notebook:pt-[2rem]   opera:pt-12  opera:ml-[55rem] opera:w-[32rem]     fullhd:w-[32rem] fullhd:ml-[58rem] fullhd:pt-14 ">
        <h1 className="font-rachelya text-white text-5xl text-center md:text-right md:text-7xl notebook:text-6xl opera:text-7xl fullhd:text-7xl">Quem é</h1>
        <h1 className="font-rachelya  text-about-text text-5xl text-center whitespace-nowrap md:text-right md:text-7xl md:whitespace-nowrap notebook:text-6xl  opera:text-7xl  fullhd:text-7xl">Pamela Maranhão?</h1>
        <p className="font-poppins text-white text-center text-sm leading-5 md:text-right md:text-[1.30rem] notebook:text-base  opera:text-[1.30rem]  fullhd:text-[1.30rem]">Eu, Pamela Maranhão, vivo em Portugal há 14 anos e conheço cada detalhe para tornar a sua transição suave e bem-sucedida. Estava com uma vida praticamente “feita” no Brasil, mas estava muito insatisfeita… saí de uma multinacional famosa, ganhando bem, para viver uma vida fora do país. No início quando vim para portugal, encarei diversas dificuldades aqui. Porém com o passar do tempo achei o caminho ideal para prosperar.</p>
        <p className="font-poppins font-bold text-white text-center text-sm pt-2 md:text-right md:text-xl md:pt-8 notebook:text-[1rem] notebook:pt-2 opera:text-[1.30rem] fullhd:text-[1.30rem]">Não perca a oportunidade de dar o primeiro passo rumo ao seu sonho! </p>
        <p className="font-poppins font-bold text-white text-center text-sm pt-2 md:text-right md:mb-4 md:text-xl md:pt-6 notebook:text-[1rem] notebook:pt-2  opera:text-[1.30rem]    fullhd:text-[1.30rem]">Inscreva-se agora mesmo para o nosso <span className="font-poppins font-bold text-about-text  text-base notebook:text-[1rem] opera:text-[1.30rem] fullhd:text-[1.30rem]">workshop online dia 19/09.</span></p>
        <div className="flex justify-center ">
        <button className="
          font-poppins 
          font-bold 
          bg-button-bg 
          text-white 
          text-center
          text-[1.6rem]
          mt-[14rem]
          hover:text-about-text   hover:transition delay-150 duration-300 ease-in-out 
          p-2
          px-6
          rounded-lg
          shadow-2xl
          whitespace-nowrap

          
          celularM:mt-[16rem]
          celularG:mt-[16rem]
          
          
          notebook:text-3xl
          notebook:ml-[4.5rem]
          notebook:mt-[0.1rem]
          notebook:whitespace-nowrap
          notebook:px-6
          
          opera:text-4xl
          opera:whitespace-nowrap
          opera:ml-[5rem]
          opera:mt-4
          
          
          fullhd:mt-4
          fullhd:whitespace-nowrap
          fullhd:text-4xl
          fullhd:px-6
          fullhd:ml-[4rem] 
        "
        onClick={() => scrollToLastSection()}
        >
        QUERO ME INSCREVER
      </button>
        </div>
      </div>
    </div>
  );
}
