import { useState } from "react";

export default function Contact() {

  const [showMessage, setShowMessage] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);
  };
  
  return (
    <section id="contact"   className="bg-contact-mobile  md:bg-contact-desktop bg-cover bg-center text-about-text w-full h-screen">
      <div className="container mx-auto max-w-4xl p-4 py-44">
        <div className="mb-6">
          <h2 className="z-50 mb-2 font-poppins text-3xl font-semibold text-center">
          Não perca tempo! Se inscreva agora!
          </h2>
          <p className="text-base text-center ">
            Descubra os segredos para ter uma vida próspera em Portugal!
          </p>
        </div>

        <div className="flex flex-col gap-6 ">
          <div className="basis-2/3">
            <form>
              <div className="mb-6 flex flex-col gap-3 ">    
                  <label
                    htmlFor="fullName"
                    className="mb-1 block ps-4 font-poppins font-semibold"
                  >
                    Seu nome:
                  </label>
                  <input
                    className="w-full rounded-lg border border-white bg-white bg-opacity-20 p-2 outline-none mb-3 font-poppins font-semibold"
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                  />
                
                
                  <label
                    htmlFor="email"
                    className="mb-1 block ps-4 font-poppins font-semibold"
                  >
                    Seu melhor e-mail:
                  </label>
                  <input
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none mb-3 bg-white bg-opacity-20 font-poppins font-semibold"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                    <label
                    htmlFor="cellphone"
                    className="mb-1 block ps-4 font-poppins font-semibold"
                  >
                    Seu Whatsapp com DDD:
                  </label>
                  <input
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none mb-3 bg-white bg-opacity-20 font-poppins font-semibold"
                    type="tel"
                    name="cellphone"
                    id="cellphone"
                    required
                  />
                    <button
                  type="submit"
                  onClick={handleFormSubmit}
                  className="bg-button-bg mt-4 py-3 animate-bounce text-white  font-poppins font-bold px-2 rounded-lg shadow-xl text-base whitespace-nowrap md:text-xl text-center hover:text-about-text   hover:transition delay-150 duration-300 ease-in-out "    
                >
                  CLIQUE AQUI PARA CONCLUIR A INSCRIÇÃO
                </button>
                {showMessage && (
                  <span className="text-about-text font-poppins text-2xl text-center mt-2">
                    Obrigada por se inscrever !
                  </span>
                )}
              </div> 
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}