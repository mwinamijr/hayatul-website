import React from "react";
import { FaShare, FaChartArea, FaBook } from "react-icons/fa";

const AboutPage: React.FC = () => {
  return (
    <section className="text-center my-12 px-4 md:px-16">
      <h2 className="text-4xl font-bold my-12">
        Ijue taasisi ya Hayatul Islamiya Complex
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
        Hayatul Islamiya Complex ni taasisi ya kiislamu iliyo chini ya
        Baraza Kuu la Waislamu Tanzania (BAKWATA). Taasisi hii inamilikiwa kihalali
        kabisa na wanajumuiya wa Hayatul Islamiya Complex ambao wametoa ahadi mbele ya Allah(S.W.)
        kuitumikia na kujitolea kikamilifu ili kuweza kupata radhi zake.
      </p>

      <div className="md:flex md:gap-12 items-center mb-16">
        <div className="md:w-5/12 mb-8 md:mb-0">
          <img
            className="rounded-lg shadow-lg w-full"
            src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
            alt="About Us"
          />
        </div>
        <div className="md:w-7/12 space-y-6">
          <h3 className="text-2xl font-bold mb-4">Madhumuni ya taasisi</h3>
          
          {[
            {
              icon: <FaShare className="text-indigo-600 w-6 h-6" />,
              title: "Elimu",
              text: "Kujenga, kusimamia na kugharamia uendeshaji wa miradi ya elimu kuanzia Shule za Awali, za Msingi na za Sekondari."
            },
            {
              icon: <FaShare className="text-indigo-600 w-6 h-6" />,
              title: "Afya",
              text: "Kujenga , kusimamia na kugharamia uendeshaji wa miradi ya Afya kuanzia Zahanati hadi vituo vya afya na hospitali."
            },
            {
              icon: <FaShare className="text-indigo-600 w-6 h-6" />,
              title: "Udhamini",
              text: "Kudhamini na kugharamia elimu kwa vijana wa kiislamu wenye uwezo wa kuendelea na masomo lakini hawana uwezo wa kugharamia elimu hiyo."
            },
            {
              icon: <FaShare className="text-indigo-600 w-6 h-6" />,
              title: "Kilimo na Biashara",
              text: "Kutafuta na kumiliki maeneo ya kilimo ili kulima mazao ya chakula na mboga zitakazotumika katika vitengo vya Jumuiya ili kupunguza gharama za uendeshaji."
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div>{item.icon}</div>
              <div>
                <h5 className="font-bold mb-2">{item.title}</h5>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:flex md:gap-12 text-center md:text-left">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <FaChartArea className="text-red-500 w-12 h-12 mx-auto md:mx-0" />
          <h5 className="font-bold my-4">Dira</h5>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores aperiam minima assumenda deleniti hic.
          </p>
        </div>
        <div className="md:w-1/2">
          <FaBook className="text-cyan-500 w-12 h-12 mx-auto md:mx-0" />
          <h5 className="font-bold my-4">Dhamira</h5>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores aperiam minima assumenda deleniti hic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
