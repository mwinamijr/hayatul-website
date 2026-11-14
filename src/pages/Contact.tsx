import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PageHero, Section } from "@/components/Page";
import { SocialLinks } from "@/components/Social";
import { SITE, telLink } from "@/lib/site";

const whatsapp = (phone: string) => `https://wa.me/${phone.replace(/[^\d]/g, "")}`;

export default function Contact() {
  return (
    <>
      <PageHero
        title="Wasiliana nasi"
        intro="Kwa maelezo kuhusu kujiunga, ada, au jambo lolote jingine, tupigie simu, tutumie ujumbe wa WhatsApp au barua pepe."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SITE.phones.map((p) => (
            <div key={p} className="card flex flex-col p-6">
              <Phone className="size-7 text-accent" aria-hidden />
              <h2 className="mt-3 text-lg font-bold">Simu</h2>
              <p className="mt-1 text-xl font-extrabold text-brand">{p}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href={telLink(p)} className="btn-brand">
                  <Phone className="size-4" aria-hidden /> Piga simu
                </a>
                <a href={whatsapp(p)} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <MessageCircle className="size-4" aria-hidden /> WhatsApp
                </a>
              </div>
            </div>
          ))}
          <div className="card flex flex-col p-6 md:col-span-2 lg:col-span-1">
            <Mail className="size-7 text-accent" aria-hidden />
            <h2 className="mt-3 text-lg font-bold">Barua pepe</h2>
            <a href={`mailto:${SITE.email}`} className="mt-1 text-lg font-extrabold break-all text-brand hover:underline">
              {SITE.email}
            </a>
            <p className="mt-3 text-sm text-muted">{SITE.postal}</p>
          </div>
        </div>

        <div className="card mt-6 grid gap-6 p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
          <div>
            <MapPin className="size-7 text-accent" aria-hidden />
            <h2 className="mt-3 text-xl font-bold">Tutembelee</h2>
            <p className="mt-2 leading-relaxed text-muted">
              Shule zetu ziko {SITE.location}, karibu na barabara kuu ya Babati - Dodoma. Ofisi ziko wazi siku za kazi.
            </p>
            <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-outline mt-5">
              <MapPin className="size-4" aria-hidden /> Fungua ramani
            </a>
          </div>
          <div>
            <h2 className="mb-3 text-lg font-bold">Tufuate mitandaoni</h2>
            <SocialLinks />
          </div>
        </div>
      </Section>
    </>
  );
}
