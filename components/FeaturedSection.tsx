import React from "react";
import Image from "next/image";

const FeaturedSection = () => {
  return (
    <section className="mt-20 sm:mt-16 md:mt-0">
      <div className="w-full">
        <div className="flex flex-col-reverse md:flex-row items-stretch">
     <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[450px]">
            <Image
              src="/prochef.jpg"
              alt="Professional chef"
              width={600}
              height={450}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="relative w-full md:w-1/2 flex items-center px-6 py-12 md:px-16 md:py-20">
            <div className="absolute inset-0">
              <Image
                src="/reservation.jpg"
                alt="Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/70 md:bg-black/80"></div>
            </div>

            <div className="relative z-10 flex flex-col gap-y-4 max-w-xl">
              <h1 className="text-2xl md:text-4xl font-bold text-yellow-300">
                Reserveringen, Events, Buffet
              </h1>
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                & Feestjes
              </h1>
              <div className="bg-yellow-300 h-1 md:h-2 w-20 md:w-24"></div>
              <p className="text-base md:text-xl text-white leading-relaxed text-justify">
                Bij ons kan je terecht voor verjaardagen, privéfeestjes,
                groepsdiners, catering of familiebijeenkomsten. Wij zorgen
                ervoor dat het gezellig, lekker en helemaal op maat is. Voor
                alle gelegenheden kan je ons mailen of bellen voor meer
                informatie. We helpen je graag om jouw evenement onvergetelijk
                te maken!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch">

          <div className="relative w-full md:w-1/2 flex items-center px-6 py-12 md:px-16 md:py-20">
            <div className="absolute inset-0">
              <Image
                src="/food.jpg"
                alt="Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/70 md:bg-black/80"></div>
            </div>

            <div className="relative z-10 flex flex-col gap-y-4 max-w-xl">
              <h1 className="text-2xl md:text-4xl font-bold text-yellow-300"></h1>
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                Thali – Een stukje Nepal op je bord
              </h1>
              <div className="bg-yellow-300 h-1 md:h-2 w-20 md:w-24"></div>
              <p className="text-base md:text-xl text-white leading-relaxed text-justify">
               In ons menu noemen we het Thali, maar het is eigenlijk de klassieke Dal Bhat in een feestelijke variant. Je krijgt een prachtig opgemaakte schaal met meer dan vijf kleine potjes vol verschillende gerechten, van linzen en curry tot groenten en chutneys. Daarbij serveren we vers naanbrood om alles mee op te scheppen.

                <br />
                Elke Thali is een ontdekkingsreis van smaken en kleuren – een perfecte manier om verschillende gerechten in één keer te proeven en echt het hart van de Nepalese keuken te ervaren.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[500px]">
            <Image
              src="/foods/thali.jpeg"
              alt="Food display"
              width={600}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedSection;
