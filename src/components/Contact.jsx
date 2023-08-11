import { useState } from "react";

export default function Contact() {

  const [showMessage, setShowMessage] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);
  };
  
  return (
    <section id="contact"   className="bg-contact-mobile  md:bg-contact-desktop bg-cover bg-center text-about-text w-full h-screen">
      <div className="container mx-auto max-w-4xl p-4 py-8">
        <div className="mb-6">
          <h2 className="z-50 mb-2 font-poppins text-3xl font-semibold text-center">
            Lorem ipsum
          </h2>
          <p className="text-sm text-center ">
            Entre em contato por formulário ou WhatsApp, com certeza irei poder
            te ajudar.
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
                  // on the onclick i want i function that will show a span HTML below the button with a message saying "Obrigado por se inscrever :D"

                  onClick={handleFormSubmit}
                  className="bg-button-bg mt-1 py-3 animate-bounce text-white  font-poppins font-bold px-4 rounded-lg shadow-xl text-xl text-center hover:text-about-text   hover:transition delay-150 duration-300 ease-in-out "    
                >
                  TOQUE AQUI PARA SE INSCREVER
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