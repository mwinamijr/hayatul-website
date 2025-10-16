import React from "react";

interface TofaliData {
  key: string;
  UkubwaWaChumba: string;
  JumlaYaVyumba: number | string;
  IdadiYaTofaliKwaChumba: number | string;
  JumlaYaTofali: number | string;
}

const dataSource: TofaliData[] = [
  { key: "1", UkubwaWaChumba: "15 x 15", JumlaYaVyumba: 24, IdadiYaTofaliKwaChumba: 472, JumlaYaTofali: 11328 },
  { key: "2", UkubwaWaChumba: "17 x 20", JumlaYaVyumba: 2, IdadiYaTofaliKwaChumba: 586, JumlaYaTofali: 1171 },
  { key: "3", UkubwaWaChumba: "10 x 20", JumlaYaVyumba: 4, IdadiYaTofaliKwaChumba: 212, JumlaYaTofali: 848 },
  { key: "4", UkubwaWaChumba: "25 x 15", JumlaYaVyumba: 2, IdadiYaTofaliKwaChumba: 664, JumlaYaTofali: 1328 },
  { key: "5", UkubwaWaChumba: "18 x 25", JumlaYaVyumba: 2, IdadiYaTofaliKwaChumba: 548, JumlaYaTofali: 1096 },
  { key: "6", UkubwaWaChumba: " ", JumlaYaVyumba: "Jumla kuu", IdadiYaTofaliKwaChumba: " ", JumlaYaTofali: 15771 },
];

const constructionPhases = [
  "Ufyetuaji wa matofali na unuliwaji wa vifaa vya ujenzi.",
  "Ujenzi wa majengo na umaliziaji (finishing).",
  "Ununuliwaji wa vifaa vya ndani na kuajiri wafanyakazi.",
];

const Ujenzi: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-500">Hatua za Ujenzi</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Hii ni maelezo ya hatua za ujenzi wa zahanati yetu ikiwa ni pamoja na idadi ya tofali zinazohitajika.
        </p>
      </header>

      {/* Awamu za ujenzi */}
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-indigo-500">Awamu za Ujenzi</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {constructionPhases.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">UFYETUAJI WA MATOFALI NA UNULIWAJI WA VIFAA VYA UJENZI</h2>
        <p className="text-gray-700">
          Hii ni hatua ya kwanza kabisa katika ujenz wa jengo lolote. Vifaa vya ujenzi
          huagizwa au kununuliwa baada ya kufanya makisio kutokana na ramani husika.
          Mara nyingi hutumia mahesabu madogo ili kuepusha kununuliwa kwa vifaa vingi
          au kidogo kulingana na mahitaji.
        </p>
      </div>

      {/* Image Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          src="https://images.pexels.com/photos/590033/pexels-photo-590033.jpeg?auto=compress&cs=tinysrgb&w=1170"
          alt="Construction 1"
        />
        <img
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1170"
          alt="Construction 2"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Tofali zinazohitajika</h3>
        <p className="text-gray-700">
          Tofali zitakazotumika ni za block zenye urefu wa inch 18 upana wa nchi 9 na
          unene wa nchi 5. Katika ratio ya mchanga na kokoto 2:1 yaani kwa kila ndoo
          mbili za mchanga kutakuwa na ndoo moja ya kokoto (gravel).
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Idadi ya tofali zinazohitajika</h3>
        <p className="text-gray-700">
          Idadi nzima ya tofali imekisiwa kutokana na ramani ya zahanati. Imefanywa kwa
          kuzingatia mzunguko wa chumba kimoja kimoja.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-indigo-50">
            <tr>
              <th className="border px-4 py-2 text-left text-gray-800">No</th>
              <th className="border px-4 py-2 text-left text-gray-800">Ukubwa wa Chumba</th>
              <th className="border px-4 py-2 text-left text-gray-800">Jumla ya Vyumba</th>
              <th className="border px-4 py-2 text-left text-gray-800">Idadi ya Tofali/Kila Chumba</th>
              <th className="border px-4 py-2 text-left text-gray-800">Jumla ya Tofali</th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((item, index) => (
              <tr key={item.key} className="text-gray-700 hover:bg-indigo-50 transition-colors">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{item.UkubwaWaChumba}</td>
                <td className="border px-4 py-2">{item.JumlaYaVyumba}</td>
                <td className="border px-4 py-2">{item.IdadiYaTofaliKwaChumba}</td>
                <td className="border px-4 py-2">{item.JumlaYaTofali}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Image Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          src="https://images.pexels.com/photos/3807821/pexels-photo-3807821.jpeg?auto=compress&cs=tinysrgb&w=1170"
          alt="Construction 3"
        />
        <img
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          src="https://images.pexels.com/photos/374703/pexels-photo-374703.jpeg?auto=compress&cs=tinysrgb&w=1170"
          alt="Construction 4"
        />
      </div>
    </section>
  );
};

export default Ujenzi;
