import React from "react";
import { Icons } from "@/components/icons"; // Map icons like envelope, phone, map-pin, etc.

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-indigo-600">
            Wasiliana nasi kwa maelezo zaidi
          </h2>
          <p className="text-gray-600 text-lg">
            Ili kupata ufafanuzi wa kina juu ya jambo lolote, tuandikie ujumbe wako au
            wasiliana nasi kwa namba za simu zilizopo hapa chini au kutufuata katika
            kurasa zetu za mitandao ya kijamii.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6 text-indigo-600">
              <Icons.envelope className="w-6 h-6" /> Tuandikie Ujumbe:
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Jina Lako"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <input
                type="email"
                placeholder="Barua pepe"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="tel"
                placeholder="Simu"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <textarea
              placeholder="Ujumbe wako"
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition mb-6"
            />

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition shadow-md">
              <Icons.paperPlane className="w-5 h-5" /> Tuma Ujumbe
            </button>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-center text-indigo-600 mb-6">
                Taarifa za Mawasiliano
              </h3>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <Icons.mapPin className="w-6 h-6 text-indigo-500" />
                  Bonga, Babati - Manyara
                </li>
                <li className="flex items-center gap-3">
                  <Icons.phone className="w-6 h-6 text-indigo-500" />
                  +255 752 506 523
                </li>
                <li className="flex items-center gap-3">
                  <Icons.phone className="w-6 h-6 text-indigo-500" />
                  +255 788 030 052
                </li>
                <li className="flex items-center gap-3">
                  <Icons.envelope className="w-6 h-6 text-indigo-500" />
                  S.L.P. 507, Babati - Manyara
                </li>
                <li className="flex items-center gap-3">
                  <Icons.envelope className="w-6 h-6 text-indigo-500" />
                  hayatulislamiyass@gmail.com
                </li>
              </ul>
            </div>

            <div className="mt-8 flex justify-center gap-6">
              <a
                href="https://twitter.com/hayatulislamiya"
                className="text-indigo-400 hover:text-indigo-600 transition"
              >
                <Icons.twitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/hayatulislamiya"
                className="text-pink-500 hover:text-pink-600 transition"
              >
                <Icons.instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/hayatulislamiya"
                className="text-blue-700 hover:text-blue-900 transition"
              >
                <Icons.facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCgpGjY3Rd97l53n8r_sSwBQ"
                className="text-red-600 hover:text-red-800 transition"
              >
                <Icons.youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
