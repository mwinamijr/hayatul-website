import React from "react";
import { FaShare, FaChartArea, FaBook } from "react-icons/fa";

const AboutPage: React.FC = () => {
  const purposes = [
    {
      icon: <FaShare className="text-teal-500 w-6 h-6" />,
      title: "Elimu",
      text: "Kujenga, kusimamia na kugharamia uendeshaji wa miradi ya elimu kuanzia Shule za Awali, za Msingi na za Sekondari.",
    },
    {
      icon: <FaShare className="text-teal-500 w-6 h-6" />,
      title: "Afya",
      text: "Kujenga, kusimamia na kugharamia uendeshaji wa miradi ya Afya kuanzia Zahanati hadi vituo vya afya na hospitali.",
    },
    {
      icon: <FaShare className="text-teal-500 w-6 h-6" />,
      title: "Udhamini",
      text: "Kudhamini na kugharamia elimu kwa vijana wa kiislamu wenye uwezo wa kuendelea na masomo lakini hawana uwezo wa kugharamia elimu hiyo.",
    },
    {
      icon: <FaShare className="text-teal-500 w-6 h-6" />,
      title: "Kilimo na Biashara",
      text: "Kutafuta na kumiliki maeneo ya kilimo ili kulima mazao ya chakula na mboga zitakazotumika katika vitengo vya Jumuiya ili kupunguza gharama za uendeshaji.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Header */}
      <header className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold text-teal-500">
          Ijue taasisi ya Hayatul Islamiya Complex
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg">
          Hayatul Islamiya Complex ni taasisi ya kiislamu iliyo chini ya
          Baraza Kuu la Waislamu Tanzania (BAKWATA). Taasisi hii inamilikiwa kihalali
          na wanajumuiya wa Hayatul Islamiya Complex ambao wametoa ahadi mbele ya Allah(S.W.)
          kuitumikia na kujitolea kikamilifu ili kuweza kupata radhi zake.
        </p>
      </header>

      {/* Image + Purposes */}
      <div className="md:flex md:gap-12 items-center">
        <div className="md:w-5/12 mb-8 md:mb-0">
          <img
            className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-300"
            src="https://images.pexels.com/photos/4226117/pexels-photo-4226117.jpeg?auto=compress&cs=tinysrgb&w=1170"
            alt="About Us"
          />
        </div>

        <div className="md:w-7/12 space-y-6">
          <h3 className="text-3xl font-bold text-teal-500 mb-6">
            Madhumuni ya taasisi
          </h3>
          <div className="grid gap-4">
            {purposes.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">{item.title}</h5>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="md:flex md:gap-12 text-center md:text-left">
        <div className="md:w-1/2 mb-12 md:mb-0 p-6 bg-white rounded-xl shadow hover:shadow-2xl transition-shadow duration-300">
          <FaChartArea className="text-teal-500 w-12 h-12 mx-auto md:mx-0" />
          <h5 className="font-bold text-xl my-4">Dira</h5>
          <p className="text-gray-600">
            Kuendeleza taasisi yenye maadili ya kiislamu inayotoa elimu, huduma za afya, na msaada kwa jamii kwa kiwango cha hali ya juu.
          </p>
        </div>
        <div className="md:w-1/2 p-6 bg-white rounded-xl shadow hover:shadow-2xl transition-shadow duration-300">
          <FaBook className="text-teal-500 w-12 h-12 mx-auto md:mx-0" />
          <h5 className="font-bold text-xl my-4">Dhamira</h5>
          <p className="text-gray-600">
            Kusaidia jamii na wanajumuiya wa Hayatul Islamiya Complex kupitia elimu, afya, na miradi ya maendeleo yenye uendelevu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
