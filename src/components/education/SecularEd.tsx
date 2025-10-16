import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Icons } from "@/components/icons"; // Map FontAwesome icons to shadcn icons or Radix

const SecularEd: React.FC = () => {
  return (
    <section className="text-center my-12 px-4">
      <h2 className="text-4xl font-bold mb-6">Elimu ya Mazingia</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Kama lilivyo lengo la taifa letu kuweza kuondoa ujinga,
        Taasisi ya Hayatul Islamiya Complex imeungana na juhudi za serikali katika
        hili kwani tumekuwa tukitoa elimu ya mazingira kwa kufuata mitaala ya elimu
        kama ilivyoelekzwa na Wizara ya elimu ya Jamhuri ya Muungano wa Tanzania. 
        Sio kwa wanafunzi tu bali tumekuwa tukitoa elimu pia kwa watu wazima ambao wapo
        tayari kujiendeleza katika nyanja hii ya elimu.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Nursery Card */}
        <Card className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
          <div
            className="bg-cover bg-center h-96 flex flex-col items-center justify-center p-6"
            style={{ backgroundImage: "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)" }}
          >
            <h3 className="text-2xl font-bold mb-2">Shule ya Awali</h3>
            <p className="mb-4">
              Elimu ya awali ndio msingi wa elimu zote nasi pia tumejizatiti vizuri
              katika kutoa elimu hii kwani ndio itakayo mjengea msingi mzuri wa
              kuendelea na elimu ya msingi
            </p>
            <h6 className="text-blue-400 flex items-center mb-2">
              <Icons.book className="mr-2" />
              <strong> Masomo ya Elimu ya awali</strong>
            </h6>
            <ul className="list-disc list-inside text-white mb-4">
              <li>Vitendo vya kuhesabu</li>
              <li>Vitendo vya kuandika</li>
              <li>Vitendo vya sayansi</li>
              <li>Vitendo vya kusoma</li>
              <li>Vitendo vya kuhesabu</li>
              <li>Vitendo vya kuhesabu</li>
            </ul>
            <Link to="/education/nursery">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Zaidi ...
              </Button>
            </Link>
          </div>
        </Card>

        {/* Primary Card */}
        <Card className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
          <div
            className="bg-cover bg-center h-96 flex flex-col items-center justify-center p-6"
            style={{ backgroundImage: "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)" }}
          >
            <h3 className="text-2xl font-bold mb-2">Shule ya Msingi</h3>
            <p className="mb-4">
              Elimu ya msingi ndio inamjenga na kumuandaa mwanafunzi ili awe tayari
              kuingia katika ulimwengu wa kielimu, hivyo katika kutoa elimu hii ya msingi
              tumekuwa katika ubora wa hali ya juu kabisa.
              <br />
              Elimu hii ya msingi kwa shule ya Msingi Hayatul Islamiya inatolewa kwa lugha
              ya <strong>Kiswahili</strong>.
            </p>
            <h6 className="text-blue-400 flex items-center mb-2">
              <Icons.book className="mr-2" />
              <strong> Masomo ya Elimu ya Msingi</strong>
            </h6>
            <ul className="list-disc list-inside text-white mb-4">
              <li>Hisabati</li>
              <li>Sayansi</li>
              <li>Maarifa ya jamii</li>
              <li>Kiswahili</li>
              <li>English</li>
            </ul>
            <Link to="/education/primary">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Zaidi ...
              </Button>
            </Link>
          </div>
        </Card>

        {/* O-Level Card */}
        <Card className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-cover bg-center h-96 flex flex-col items-center justify-center p-6">
            <h3 className="text-2xl font-bold mb-2">
              Shule ya Sekondari - <em>O-Level</em>
            </h3>
            <p className="mb-4">
              Elimu ya awali ndio msingi wa elimu zote nasi pia tumejizatiti vizuri
              katika kutoa elimu hii kwani ndio itakayo mjengea msingi mzuri wa
              kuendelea na elimu ya msingi
            </p>
            <h6 className="text-blue-400 flex items-center mb-2">
              <Icons.book className="mr-2" />
              <strong> Masomo ya Elimu ya sekondari</strong>
            </h6>
            <table className="table-auto text-left mb-4 text-white">
              <tbody>
                <tr>
                  <td>Basic Mathematics</td>
                  <td>English</td>
                  <td>Geography</td>
                </tr>
                <tr>
                  <td>Physics</td>
                  <td>Kiswahili</td>
                  <td>History</td>
                </tr>
                <tr>
                  <td>Chemistry</td>
                  <td>Kiarabu</td>
                  <td>Elimu ya dini ya kiislamu</td>
                </tr>
                <tr>
                  <td>Biology</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
            <Link to="/education/secondary">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Zaidi ...
              </Button>
            </Link>
          </div>
        </Card>

        {/* A-Level Card */}
        <Card className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-cover bg-center h-96 flex flex-col items-center justify-center p-6">
            <h3 className="text-2xl font-bold mb-2">
              Shule ya Sekondari - <em>A-Level</em>
            </h3>
            <p className="mb-4">
              Elimu ya awali ndio msingi wa elimu zote nasi pia tumejizatiti vizuri
              katika kutoa elimu hii kwani ndio itakayo mjengea msingi mzuri wa
              kuendelea na elimu ya msingi
            </p>
            <h6 className="text-blue-400 flex items-center mb-2">
              <Icons.book className="mr-2" />
              <strong>Michepuo ya masomo</strong>
            </h6>
            <table className="table-auto text-left mb-4 text-white">
              <tbody>
                <tr>
                  <td>PCM</td>
                  <td>PCB</td>
                  <td>PGM</td>
                </tr>
                <tr>
                  <td>HGL</td>
                  <td>HGK</td>
                  <td>HKL</td>
                </tr>
                <tr>
                  <td>EGM</td>
                  <td>KLA</td>
                  <td>HGE</td>
                </tr>
              </tbody>
            </table>
            <Link to="/education/secondary">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Zaidi ...
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SecularEd;
