import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Elimu ya Dini",
    icon: "book",
    text: `Hayatul Islamiya Complex ilianzishwa kwa malengo ya kutoa huduma zote
    kwa kufuata misingi na taratibu zilizowekwa na dini ya Uislamu. Hivyo 
    katika kutoa elimu kwa vijana wetu, elimu ya dini imekuwa ni kipaumbele 
    cha kwanza katika utoaji wa elimu kwa ngazi zote za elimu.`,
    link: "/education/religion",
    img: "https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    reverse: false,
    color: "text-green-600",
  },
  {
    title: "Elimu ya Mazingira",
    icon: "book",
    text: `Pamoja na utoaji wa elimu ya dini na malezi ya kiislamu kwa kiwango 
    cha hali ya juu kabisa taasisi ya Hayatul Islamiya Complex imekuwa ikitoa huduma 
    ya elimu ya mazingira kwa ubora na viwango vilivyowekwa na wizara ya 
    Elimu, Sayansi, Teknolojia na Ufundi. Tunawapatia vijana wetu elimu iliyo bora ili
    waweze kuwa na ujuzi wa kutosha ili kuutumikia Uislamu na taifa letu kikamilifu.`,
    link: "/education/secular",
    img: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    reverse: true,
    color: "text-pink-600",
  },
  {
    title: "Huduma ya Afya",
    icon: "stethoscope",
    text: `Ni malengo ya taasisi ya Hayatul Islamiya Complex kutoa huduma ya Afya 
    itakayokuwa ikifuata misingi ya dini ya kiislamu kwani kama tunavyojua 
    waislamu bado tupo nyuma sana hasa katika upande wa huduma za afya.
    Kwa sasa taasisi ipo katika hatua nzuri kuelekea kwenye ujenzi wa 
    Kituo cha Afya ili tuwe huru katika utoaji wa huduma hii huku tukiwa tunamcha Allah(S.W.)`,
    link: "/health/progress",
    img: "https://images.pexels.com/photos/60022/microscope-slide-research-close-up-60022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    reverse: false,
    color: "text-indigo-600",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <Card className="my-5 p-5">
      <h2 className="text-center text-3xl font-bold my-5">Huduma zetu</h2>
      <p className="text-center max-w-3xl mx-auto mb-5">
        Taasisi ya Hayatul Islamiya Complex imekuwa ilitoa huduma mbali mbali zikiwemo
        elimu, afya na maji safi tangu kuanzishwa kwake mwaka 1998. Taasisi hii imekuwa
        ikiwahudumia wanajamii wa Bonga na maeneo jirani katika kuwapatia elimu bora na 
        yenye kukidhi matakwa ya serikali ya Jamhuri ya Muungano wa Tanzania.
      </p>

      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row items-center gap-8 my-10 ${
            service.reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <img
            src={service.img}
            alt={service.title}
            className="w-full lg:w-1/2 rounded-lg shadow-lg object-cover"
          />
          <div className="lg:w-1/2 space-y-4">
            <h6 className={`font-bold text-lg ${service.color}`}>
              <i className={`fas fa-${service.icon} mr-2`}></i> {service.title}
            </h6>
            <h3 className="font-bold text-2xl">{service.title}</h3>
            <p>{service.text}</p>
            <Link to={service.link}>
              <Button variant="default">{`Zaidi ...`}</Button>
            </Link>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default ServicesPage;
