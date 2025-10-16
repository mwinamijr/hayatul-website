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
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Hatua za ujenzi</h1>

      {/* Awamu za ujenzi */}
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-xl font-bold mb-3">Awamu za Ujenzi</h3>
        <ul className="list-disc list-inside space-y-1">
          {constructionPhases.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-semibold">UFYETUAJI WA MATOFALI NA UNULIWAJI WA VIFAA VYA UJENZI</h2>
      <p>
        Hii ni hatua ya kwanza kabisa katika ujenz wa jengo lolote. Vifaa vya ujenzi
        huagizwa au kununuliwa baada ya kufanya makisio kutokana na ramani husika.
        Mara nyingi hutumia mahesabu madogo ili kuepusha kununuliwa kwa vifaa vingi
        au kidogo kulingana na mahitaji, vile vile ukisiaji wa vifaa vya ujenzi hutupa picha
        kamili ya gharama za ujenzi wa zahanati yetu ili kujitathimin kifedha na muda
        utakaotumika mpaka kumalizika kwake.
      </p>

      {/* Image Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          className="w-full rounded shadow"
          src="http://127.0.0.1:8000/media/hayatul/dispensary.jpg"
          alt="Dispensary 1"
        />
        <img
          className="w-full rounded shadow"
          src="http://127.0.0.1:8000/media/hayatul/dispensary.jpg"
          alt="Dispensary 2"
        />
      </div>

      <h3 className="text-xl font-semibold">Tofali zinazohitajika</h3>
      <p>
        Tofali zitakazotumika ni za block zenye urefu wa inch 18 upana wa nchi 9 na
        unene wa nchi 5. Katika ratio ya mchanga na kokoto 2:1 yaani kwa kila ndoo
        mbili za mchanga kutakuwa nan doo moja ya kokoto (gravel).
      </p>

      <h3 className="text-xl font-semibold">Idadi ya tofali zinazohitajika</h3>
      <p>
        Idadi nzima ya tofali imekisiwa kutokana na ramani ya zahanati. Imefanywa kwa
        kuzingatia mzunguko wa chumba kimoja kimoja. Ikumbukwe ujenzi wa ukuta
        utakuwa na mistari kumi na tatu ya tofali ikiwa mistari kumi ni kabla ya lenta na
        mitatu ni baada ya lenta na kufanya urefu wa ukuta uwe na futi 11 na inch 8.
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">No</th>
              <th className="border px-4 py-2">Ukubwa wa chumba</th>
              <th className="border px-4 py-2">Jumla ya vyumba</th>
              <th className="border px-4 py-2">Idadi ya tofali kwa chumba</th>
              <th className="border px-4 py-2">Jumla ya Tofali</th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((item, index) => (
              <tr key={item.key} className="text-center">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          className="w-full rounded shadow"
          src="http://127.0.0.1:8000/media/hayatul/dispensary.jpg"
          alt="Dispensary 3"
        />
        <img
          className="w-full rounded shadow"
          src="http://127.0.0.1:8000/media/hayatul/dispensary.jpg"
          alt="Dispensary 4"
        />
      </div>
    </div>
  );
};

export default Ujenzi;
