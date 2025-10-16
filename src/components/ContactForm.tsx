import React from "react";
import { Icons } from "@/components/icons"; // Map icons like envelope, phone, map-pin, etc.

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md my-12 px-4 py-10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Wasiliana nasi kwa maelezo zaidi
        </h2>
        <p className="text-gray-600">
          Ili kupata ufafanuzi wa kina juu ya jambo lolote, tuandikie ujumbe wako au
          wasiliana nasi kwa namba za simu zilizopo hapa chini au kwa kutufuata
          katika kurasa zetu za mitandao ya kijamii.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Icons.envelope className="w-6 h-6 text-blue-600" /> Tuandikie Ujumbe:
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Jina Lako"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Barua pepe"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Simu"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              placeholder="Ujumbe wako"
              rows={5}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="bg-blue-600 text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition">
              <Icons.paperPlane className="w-5 h-5" /> Tuma Ujumbe
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 p-6 rounded-lg space-y-4 text-gray-700">
          <h3 className="text-xl font-semibold text-center">Contact Information</h3>
          <hr className="border-gray-300" />

          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Icons.mapPin className="w-5 h-5 text-blue-600" />
              Bonga, Babati - Manyara
            </li>
            <li className="flex items-center gap-2">
              <Icons.phone className="w-5 h-5 text-blue-600" />
              +255 752 506 523
            </li>
            <li className="flex items-center gap-2">
              <Icons.phone className="w-5 h-5 text-blue-600" />
              +255 788 030 052
            </li>
            <li className="flex items-center gap-2">
              <Icons.envelope className="w-5 h-5 text-blue-600" />
              S.L.P. 507, Babati - Manyara
            </li>
            <li className="flex items-center gap-2">
              <Icons.envelope className="w-5 h-5 text-blue-600" />
              hayatulislamiyass@gmail.com
            </li>
          </ul>

          <hr className="border-gray-300 my-4" />

          <div className="flex justify-center gap-4">
            <a href="https://twitter.com/hayatulislamiya" className="text-blue-400 hover:text-blue-600">
              <Icons.twitter className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/hayatulislamiya" className="text-pink-500 hover:text-pink-600">
              <Icons.instagram className="w-6 h-6" />
            </a>
            <a href="https://facebook.com/hayatulislamiya" className="text-blue-700 hover:text-blue-900">
              <Icons.facebook className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/channel/UCgpGjY3Rd97l53n8r_sSwBQ" className="text-red-600 hover:text-red-800">
              <Icons.youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
