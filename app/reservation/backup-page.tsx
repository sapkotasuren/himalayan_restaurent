"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import emailjs from "emailjs-com";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    date: "",
    time: "",
    totalPersons: "",
    request: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Debug log: Check if env vars load (remove after success)
    console.log("Env Check:", {
      service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      user: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
    });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Added NEXT_PUBLIC_
        {
          ...formData,
          to_email: "imanupagaire@gmail.com", // Your email for testing
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      setSubmitMessage(
        "Reservation submitted successfully! We’ll confirm via email soon."
      );
      setFormData({
        name: "",
        telephone: "",
        email: "",
        date: "",
        time: "",
        totalPersons: "",
        request: "",
      });
    } catch (error) {
      setSubmitMessage("Oops! Something went wrong. Please try again.");
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full">
      <Navbar />

      <section className="relative min-h-[20vh] lg:min-h-[50vh] w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/bg1.jpeg"
            fill
            priority
            className="object-cover"
            alt="Himalaya restaurant ambiance"
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative mx-auto max-w-screen-sm w-full min-h-[50vh] flex flex-col justify-center items-center text-white text-center px-4 pt-10">
          <h1 className="text-4xl font-bold mb-4">Reservatie</h1>
          <p className="text-lg italic">
            Reserveer vandaag nog uw tafel! Kom langs voor een onvergetelijke
            culinaire ervaring en laat ons magische momenten voor u creëren. U
            kunt eenvoudig reserveren via ons online formulier of telefonisch
            contact opnemen.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-serif font-semibold text-center text-gray-800 mb-8">
            Boek uw reservering
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xl font-medium text-gray-700 mb-2"
              >
                Naam *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="telephone"
                className="block text-xl font-medium text-gray-700 mb-2"
              >
                Telefoon *
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                placeholder="+32 486 91 85 29"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xl font-medium text-gray-700 mb-2"
              >
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-xl font-medium text-gray-700 mb-2"
              >
                Datum *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-xl font-medium text-gray-700 mb-2"
              >
                Tijd *
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label
                htmlFor="totalPersons"
                className="block text-xl font-medium text-gray-700 mb-2"
              >
                Totaal aantal personen *
              </label>
              <select
                id="totalPersons"
                name="totalPersons"
                value={formData.totalPersons}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
              >
                <option value="">Select...</option>
                <option value="1">1 person</option>
                <option value="2">2 persons</option>
                <option value="3">3 persons</option>
                <option value="4">4 persons</option>
                <option value="5+">5 or more</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="request"
                className="block text-xl font-medium text-gray-700 mb-2"
              >
                Verzoek
              </label>
              <textarea
                id="request"
                name="request"
                rows={4}
                value={formData.request}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition resize-none"
                placeholder="Dietary restrictions, occasion, etc."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {isSubmitting ? "Sending..." : "Make Reservation"}
            </button>
          </form>

          {submitMessage && (
            <div
              className={`mt-6 p-4 rounded-lg text-center font-medium ${
                submitMessage.includes("successfully")
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {submitMessage}
            </div>
          )}
        </div>

        <p className="text-center text-sm text-gray-600">
          We will respond within 24 hours. Questions? Call us at +32 486 91 85
          29
        </p>
      </section>
    </div>
  );
}
