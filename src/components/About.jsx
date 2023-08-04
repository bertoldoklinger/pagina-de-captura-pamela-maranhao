


export function About() {
  return (
    <div className="bg-about-mobile md:bg-about-desktop bg-cover bg-center h-screen w-full">
      <div className="flex flex-col h-full w-[100%] px-6 py-3 md:w-[28rem] md:ml-[45rem] md:pt-12">
        <h1 className="font-rachelya text-white text-4xl text-center md:text-right md:text-6xl">Quem é</h1>
        <h1 className="font-rachelya text-about-text text-4xl text-center md:text-right md:text-6xl md:whitespace-nowrap md:pr-9">Pamela Maranhão?</h1>
        <p className="font-poppins text-white text-center text-sm md:text-right md:text-base">Eu, Pamela Maranhão, vivo em Portugal há 14 anos e conheço cada detalhe para tornar a sua transição suave e bem-sucedida. Estava com uma vida praticamente “feita” no Brasil, mas estava muito insatisfeita… saí de uma multinacional famosa, ganhando bem, para viver uma vida fora do país. No início quando vim para portugal, encarei diversas dificuldades aqui. Porém com o passar do tempo achei o caminho ideal para prosperar.</p>
        <p className="font-poppins font-bold text-white text-center text-sm pt-2 md:text-right md:text-base">Não perca a oportunidade de dar o primeiro passo rumo ao seu sonho! </p>
        <p className="font-poppins text-white text-center text-sm pt-2 md:text-right md:mb-4 md:text-base">Inscreva-se agora mesmo para o nosso <span className="font-poppins font-extrabold text-about-text  text-base">workshop online dia 29/08</span><span className="font-poppins font-bold text-white  text-base"> e ganhe um planner gratuito</span> para te auxiliar nessa nova fase da vida.</p>
        <button className="
          font-poppins 
          font-bold 
          bg-button-bg 
          text-white 
          text-center
          text-[1.6rem]
          mt-[20.5rem]
          p-2
          rounded-lg
          shadow-xl
          md:mt-0
          md:whitespace-nowrap
          md:text-3xl
        ">
        QUERO ME INSCREVER
      </button>
      </div>
    </div>
  );
}
