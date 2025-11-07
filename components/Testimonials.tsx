import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: " Wilhelmina ",
    text: "Ik moest vandaag voor mijn werk naar België en kwam terecht bij Himalayan Restaurent. Ik herinnerde me dit verborgen pareltje, dat vaak wordt beschouwd als een onofficiële eetgelegenheid voor Belgische studenten. De service was uitstekend en het personeel was erg beleefd en vroeg zelfs of ik een naan-vulling wilde. De kip masala die ik bestelde had een geweldige diepte van smaak, hoewel ik de volgende keer misschien voor een medium pittigheid in plaats van een milde zou gaan. Al met al een geweldige ervaring, en ik kom zeker terug.",
    img: "/person-placeholder.jpg",
  },
  {
    name: "Noah",
    text: "Ik bezocht onlangs dit Indiase restaurant en was overdonderd! We probeerden de Paneer Tikka en Lamb Rogan Josh, en beide gerechten waren uitzonderlijk. De Paneer Tikka was rokerig, smaakvol en perfect gegrild, terwijl de Lamb Rogan Josh mals, rijk en aromatisch was met precies de juiste balans van kruiden. De lunchset bevatte ook knoflooknaan en gestoomde basmatirijst, die de gerechten perfect aanvulden. De bediening was vriendelijk en de ambiance maakte de maaltijd nog aangenamer. Een echte aanrader voor een authentieke en heerlijke Indiase maaltijd!",
    img: "/person-placeholder.jpg",
  },
  {
    name: " Liam",
    text: "Vandaag een Indiaas restaurant bezocht na online goede recensies te hebben gelezen. Ze bieden een lunchpakket aan, wat echt een koopje is! We probeerden de Butter Chicken en de Chicken Masala, beide waren heerlijk, hoewel de Masala iets pittiger was, terwijl de Butter Chicken rijk en licht zoet was. Het pakket bestond uit twee naanbroodjes, en we kozen voor één butter naan en één naturel – ze waren zacht, chewy en absoluut perfect. Ik kan deze plek van harte aanbevelen en ik kom zeker terug!",
    img: "/person-placeholder.jpg",
  },
];




const Testimonials = () => {
  return (
    <section className="pt-20 sm:px-8 w-full mx-auto bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
Wat onze gasten zeggen      </h1>
        <p className="text-[#6B4C2E] mt-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
Ervaar de authentieke smaken van India & Nepal door de woorden van onze gasten.        </p>
      </div>

      <section className="w-full py-12 lg:py-16">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-between p-6 bg-white rounded-xl shadow-md duration-500 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#d4b78f] overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#d4b78f] to-amber-300 opacity-10 rounded-bl-full"></div>
                <p className="text-[#4A4A4A] leading-snug text-justify mb-6 pr-2">
                  {testimonial.text}
                </p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={testimonial.img}
                       alt={testimonial.text}

  
                    width={48}
                    height={48}
                    className="h-12 w-12 object-cover rounded-full border-3 border-[#d4b"
                  />





                  <div className="text-right">
                    <h2 className="text-lg font-bold text-[#8B4513]">
                      {testimonial.name}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;