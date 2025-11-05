import React from "react";

const testimonials = [
  {
    name: " Wilhelmina ",
    text: "Had to visit Belgium Island for work today and ended up near HKU. I remembered this hidden gem on Kotewall Road, often considered an unofficial dining spot for KongU students. The service was excellent—very polite staff who even asked if I needed a naan refill. The Chicken Masala I ordered had a great depth of flavor, though next time, I might go for a medium spice level instead of mild. The free soup was a nice touch, but be mindful—it has a kick of black pepper! Overall, a great experience, and I’ll definitely be back.",
    img: "/person-placeholder.jpg",
  },
  {
    name: "Noah",
    text: "Visited an Indian restaurant near HKU today after seeing great reviews online. They offer a student lunch set, which is such a great deal! We tried the Butter Chicken and Chicken Masala—both were delicious, though the Masala had a bit more heat, while the Butter Chicken was rich and slightly sweet. The set came with two naan, and we chose one butter naan and one plain—they were soft, chewy, and absolutely perfect. Highly recommend this place, and I’ll definitely be returning!",
    img: "/person-placeholder.jpg",
  },
  {
    name: " Liam",
    text: "Tucked away in a small alley, this Indian restaurant is a true hidden gem! Even though it only has a few reviews online, the flavors are absolutely authentic. The service was fantastic, with friendly staff who gave great recommendations. The curry was thick, rich, and packed with flavor, and the meat and peas had soaked up all the delicious spices. Every bite was satisfying! I left feeling happy and inspired—good food really does boost productivity. Can’t wait to come back!",
    img: "/person-placeholder.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="pt-16 sm:px-10 w-full mx-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 italic">
          What Our Guests Say
        </h1>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Experience the authentic taste of India & Nepal through our
          guests&apos; words.
        </p>
      </div>

      <section className="w-full py-5 lg:py-10">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 border-2 border-[#d4b78f] rounded-lg duration-300 hover:shadow-lg"
              >
                <p className="text-gray-700 text-center leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex flex-col items-center mt-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="h-14 w-14 object-cover rounded-full border-2 border-[#d4b78f]"
                  />
                  <h2 className="text-xl font-semibold text-gray-800 mt-2">
                    {testimonial.name}
                  </h2>
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
