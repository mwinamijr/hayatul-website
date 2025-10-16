import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Nursery: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-400 to-indigo-500 text-white">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 animate-fade-in-left">
            <h1 className="text-4xl font-bold mb-4">Elimu ya awali</h1>
            <hr className="border-white mb-4" />
            <p className="mb-4">
              Hayatul Islamiya imekuwa ikitoa elimu ya wali kwa ubora wa hali ya juu kabisa,
              tumekuwa tukitoa elimu hii kwa gharama nafuu kabisa kuanzia mwaka 1998.
            </p>
            <p className="mb-4">
              Hayatul Islamiya imekuwa ikitoa elimu ya wali kwa ubora wa hali ya juu kabisa,
              tumekuwa tukitoa elimu hii kwa gharama nafuu kabisa kuanzia mwaka 1998.
            </p>
            <Button variant="outline" className="text-white border-white mt-4">
              Zaidi ...
            </Button>
          </div>

          <div className="md:w-1/2 animate-fade-in-right">
            <img
              src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
              alt="Elimu"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <Card className="animate-fade-in-up">
          <CardHeader>
            <CardTitle>Elimu ya Dini</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </CardDescription>
            <Button className="mt-4">Button</Button>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="animate-fade-in-up delay-100">
          <CardHeader>
            <CardTitle>Elimu ya Mazingira</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </CardDescription>
            <Button className="mt-4">Button</Button>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="animate-fade-in-up delay-200">
          <CardHeader>
            <CardTitle>Michezo kwa Afya</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </CardDescription>
            <Button className="mt-4">Button</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Nursery;
