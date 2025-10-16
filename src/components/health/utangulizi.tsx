import React from "react";

const services = [
  "Huduma ya mapokezi.",
  "Huduma ya wagonjwa wa nje.",
  "Huduma ya maabara.",
  "Huduma ya dawa na store.",
  "Huduma ya afya ya uzazi na mtoto.",
  "Huduma ya upasuaji mdogo, macho na meno.",
];

const constructionPhases = [
  "Ufyetuaji wa matofali na unuliwaji wa vifaa vya ujenzi.",
  "Ujenzi wa majengo na umaliziaji (finishing).",
  "Ununuliwaji wa vifaa vya ndani na kuajiri wafanyakazi.",
];

const Introduction: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Utangulizi</h1>

      <p>
        Kwa maana hiyo, sasa hivi taasisi ipo katika mkakati wa ujenzi wa zahanati ya
        kisasa kabisa itakayofuata masharti ya kiislamu na itakayotoa huduma kwa
        jamii kwa mujibu wa sheria na kanuni za serikali ya Jamhuri ya Muungano wa
        Tanzania.
      </p>

      <p>
        Zahanati hii itajengwa eneo pembeni ya barabara kuu ya Babati Dodoma karibu
        na shule ya Sekondari Hayatul longitude 4° 21’10’’ S, 35° 44’22’’ E katika eneo
        lenye ukubwa wa mita za mraba 56 kwa 32. Zahanati yetu itajengwa kwa mujibu
        wa zamani iliyo buniwa (redesign) kulingana na matakwa na masharti ya dini ya kiislamu.
      </p>

      {/* Image Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          className="w-full rounded shadow"
          src="http://127.0.0.1:8000/media/carousel/20200918_100730.jpg"
          alt="Zahanati Image 1"
        />
        <img
          className="w-full rounded shadow"
          src="http://127.0.0.1:8000/media/hayatul/dispensary.jpg"
          alt="Zahanati Image 2"
        />
      </div>

      {/* Lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-xl font-bold mb-3">Huduma zitakazotolewa katika zahanati hii</h3>
          <ul className="list-disc list-inside space-y-1">
            {services.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h3 className="text-xl font-bold mb-3">Awamu za Ujenzi</h3>
          <ul className="list-disc list-inside space-y-1">
            {constructionPhases.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p>
        Huduma zote hizi zitatolewa kwa kuzingatia jinsia, kwa maana hiyo hakutakuwa
        na mchanganyiko wa jinsia kwenye zahanati isipokuwa sehemu chache za
        dharura kama vile upasuaji mdogo na huduma ya macho na ya meno.
      </p>

      <p>
        Kama mambo yataenda kama yalivyopangwa zahanati hii ikachukua miezi kumi
        na nane (18) mpaka kukamilika kwake. Tunatarajia zahanati hii ikikamilika itaajiri
        zaidi ya wafanyakazi thelathini (30) na kuchochea maisha ya wana Bonga
        kiujumla katika nyanja mbalimbali za kijamii na kiuchumi.
      </p>

      {/* Image Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          className="w-full rounded shadow"
          src="http://127.0.0.1:8000/media/carousel/20200921_093334.jpg"
          alt="Zahanati Image 3"
        />
        <img
          className="w-full rounded shadow"
          src="http://127.0.0.1:8000/media/carousel/20200921_093729.jpg"
          alt="Zahanati Image 4"
        />
      </div>
    </div>
  );
};

export default Introduction;
