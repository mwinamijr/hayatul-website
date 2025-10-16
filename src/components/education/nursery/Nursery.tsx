import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Nursery: React.FC = () => {
  return (
    <div className="flex flex-col space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-400 to-cyan-500 text-white">
        <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 animate-fade-in-left">
            <h1 className="text-5xl font-extrabold mb-4">Elimu ya Awali</h1>
            <hr className="border-white w-20 mb-6" />
            <p className="mb-4 text-lg">
              Hayatul Islamiya imekuwa ikitoa elimu ya awali kwa ubora wa hali ya juu kabisa,
              ikiwakilisha thamani ya elimu bora kwa watoto kuanzia mwaka 1998.
            </p>
            <p className="mb-6 text-lg">
              Tunahakikisha kila mtoto anapata msingi imara wa elimu ya dini na maarifa ya kijamii
              kwa mazingira salama na yenye upendo.
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-teal-500 transition">
              Zaidi ...
            </Button>
          </div>

          <div className="md:w-1/2 animate-fade-in-right">
            <img
              src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
              alt="Elimu"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          Zahanati yetu inajali maendeleo ya kila mtoto kwa kutoa elimu ya dini, maarifa ya kijamii,
          na michezo kwa afya. Mfumo wetu wa elimu umeundwa kwa kuzingatia ubora, usalama na
          kujenga msingi thabiti wa elimu ya maisha.
        </p>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <Card className="hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
          <CardHeader>
            <CardTitle className="text-teal-600">Elimu ya Dini</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Tunatoa elimu ya dini kwa watoto kwa njia ya kufurahisha na yenye uelewa wa kina.
            </CardDescription>
            <Button className="mt-4 bg-teal-600 text-white hover:bg-teal-700 transition">
              Zaidi
            </Button>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 delay-100">
          <CardHeader>
            <CardTitle className="text-cyan-600">Elimu ya Mazingira</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Watoto wanapewa maarifa juu ya utunzaji wa mazingira na maisha endelevu
              kwa njia ya michezo na shughuli za kufundisha.
            </CardDescription>
            <Button className="mt-4 bg-cyan-600 text-white hover:bg-cyan-700 transition">
              Zaidi
            </Button>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 delay-200">
          <CardHeader>
            <CardTitle className="text-indigo-600">Michezo kwa Afya</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Shughuli za michezo na mazoezi husaidia watoto kuboresha afya yao ya mwili na akili.
            </CardDescription>
            <Button className="mt-4 bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Zaidi
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Nursery;
