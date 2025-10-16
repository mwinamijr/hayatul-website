import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Icons } from "@/components/icons"; // You can define icons mapping for FontAwesome equivalents

const ReligiousEd: React.FC = () => {
  return (
    <section className="text-center my-12 px-4">
      <h2 className="text-4xl font-bold mb-6">Elimu ya dini</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Taasisi ya Hayatul Islamiya Complex imekuwa ikitoa elimu ya dini kwa wanafunzi wote
        ambao wamepita katika shule zetu. Sio kwa wanafunzi tu bali tumekuwa tukitoa elimu
        hii kwa kushirikiana na wanajamii wote wa maeneo ya Bonga.
      </p>

      {/* Main Card */}
      <div className="mb-12">
        <Card className="bg-gray-900 text-white shadow-lg">
          <CardContent className="p-10 flex flex-col items-center rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Elimu ya dini kwa shule za Msingi na Sekondari
            </h3>
            <p className="mb-4 text-center max-w-xl">
              Shule ya Msingi Hayatul Islamiya inatoa elimu ya dini kuanzia shule ya awali hadi darasa
              la saba. Wanafunzi wote waliopita katika shule hii wamepata hiyo fursa ya kujifunza elimu
              ya dini ya kiislamu tena kwa kufuata mtaala sahihi kwa ngazi ya shule ya msingi.
            </p>
            <div className="text-left max-w-xl">
              <h6 className="text-blue-400 flex items-center mb-2">
                <Icons.book className="mr-2" />
                <strong>Masomo ya dini tunayofundisha</strong>
              </h6>
              <ul className="list-disc list-inside text-white">
                <li>Elimu ya dini ya kiislamu</li>
                <li>Lugha ya kiarabu</li>
                <li>Kusoma Qur-an</li>
                <li>Kuhifadhi Qur-an</li>
                <li>Tafsiri ya Qur-an</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Two Sub Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="relative overflow-hidden rounded-lg shadow-lg">
          <div
            className="bg-cover bg-center h-80 flex items-center justify-center text-white"
            style={{ backgroundImage: "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)" }}
          >
            <div className="bg-black/60 p-6 rounded">
              <h6 className="text-pink-400 flex items-center mb-2">
                <Icons.chartPie className="mr-2" /> Marketing
              </h6>
              <h3 className="text-xl font-bold mb-2">This is card title</h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
              </p>
              <Button className="bg-pink-500 text-white hover:bg-pink-600">
                <Icons.clone className="mr-2" /> View project
              </Button>
            </div>
          </div>
        </Card>

        <Card className="relative overflow-hidden rounded-lg shadow-lg">
          <div
            className="bg-cover bg-center h-80 flex items-center justify-center text-white"
            style={{ backgroundImage: "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)" }}
          >
            <div className="bg-black/60 p-6 rounded">
              <h6 className="text-green-400 flex items-center mb-2">
                <Icons.eye className="mr-2" /> Entertainment
              </h6>
              <h3 className="text-xl font-bold mb-2">This is card title</h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
              </p>
              <Button className="bg-green-500 text-white hover:bg-green-600">
                <Icons.clone className="mr-2" /> View project
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ReligiousEd;
