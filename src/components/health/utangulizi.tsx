import React from "react";

const services = [
  "Huduma ya mapokezi",
  "Huduma ya wagonjwa wa nje",
  "Huduma ya maabara",
  "Huduma ya dawa na store",
  "Huduma ya afya ya uzazi na mtoto",
  "Huduma ya upasuaji mdogo, macho na meno",
];

const constructionPhases = [
  "Ufyetuaji wa matofali na unuliwaji wa vifaa vya ujenzi",
  "Ujenzi wa majengo na umaliziaji (finishing)",
  "Ununuliwaji wa vifaa vya ndani na kuajiri wafanyakazi",
];

const Introduction: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-indigo-500">Utangulizi</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Sasa hivi taasisi ipo katika mkakati wa ujenzi wa zahanati ya kisasa itakayofuata masharti ya kiislamu
          na itakayotoa huduma kwa jamii kwa mujibu wa sheria na kanuni za serikali ya Jamhuri ya Muungano wa Tanzania.
        </p>
      </header>

      <p className="text-gray-700">
        Zahanati hii itajengwa eneo pembeni ya barabara kuu ya Babati Dodoma karibu
        na shule ya Sekondari Hayatul. Eneo lenye ukubwa wa mita za mraba 56 kwa 32. Zahanati itajengwa kwa mujibu
        wa zamani iliyo buniwa (redesign) kulingana na matakwa na masharti ya dini ya kiislamu.
      </p>

      {/* Image Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="https://images.pexels.com/photos/4226117/pexels-photo-4226117.jpeg?auto=compress&cs=tinysrgb&w=1170"
          alt="Reception area"
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
        />
        <img
          src="https://images.pexels.com/photos/5327791/pexels-photo-5327791.jpeg?auto=compress&cs=tinysrgb&w=1170"
          alt="Outpatient service"
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-4 text-indigo-500">Huduma zitakazotolewa</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {services.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-4 text-indigo-500">Awamu za Ujenzi</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {constructionPhases.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-gray-700">
        Huduma zote hizi zitatolewa kwa kuzingatia jinsia. Hakutakuwa na mchanganyiko wa jinsia
        isipokuwa sehemu chache za dharura kama vile upasuaji mdogo na huduma ya macho na ya meno.
      </p>

      <p className="text-gray-700">
        Tunatarajia zahanati hii ikikamilika itaajiri zaidi ya wafanyakazi 30 na kuchochea maisha ya
        jamii katika nyanja mbalimbali za kijamii na kiuchumi.
      </p>

      {/* Image Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="https://images.pexels.com/photos/5327770/pexels-photo-5327770.jpeg?auto=compress&cs=tinysrgb&w=1170"
          alt="Laboratory"
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
        />
        <img
          src="https://images.pexels.com/photos/3845743/pexels-photo-3845743.jpeg?auto=compress&cs=tinysrgb&w=1170"
          alt="Doctor with patient"
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Introduction;
