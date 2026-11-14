import { FileCheck2, Phone, Printer, Send } from "lucide-react";

import JoiningForms from "@/components/JoiningForms";
import { PageHero, Section, SectionTitle } from "@/components/Page";
import { SITE, telLink } from "@/lib/site";

const STEPS = [
  { icon: FileCheck2, title: "Pakua", text: "Chagua ngazi unayoitaka na upakue fomu (PDF)." },
  { icon: Printer, title: "Chapisha na ujaze", text: "Ichapishe na uijaze kwa ukamilifu, kwa herufi zinazosomeka." },
  { icon: Send, title: "Wasilisha", text: "Ilete shuleni pamoja na viambatisho vilivyoorodheshwa kwenye fomu." },
];

export default function Forms() {
  return (
    <>
      <PageHero
        title="Fomu za kujiunga"
        intro="Fomu za kujiunga na Shule ya Msingi, O-Level na A-Level. Zipakue bure, zijaze na uziwasilishe shuleni."
      />

      <Section>
        <JoiningForms showOlder />
      </Section>

      <Section className="bg-surface">
        <SectionTitle center eyebrow="Hatua" title="Jinsi ya kujiunga" />
        <ol className="grid gap-5 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="card relative p-6">
              <span className="absolute top-5 right-5 text-4xl font-extrabold text-line" aria-hidden>
                {i + 1}
              </span>
              <Icon className="size-8 text-accent" aria-hidden />
              <h3 className="mt-3 text-lg font-bold">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-muted">Unahitaji msaada wa kujaza fomu? Tupigie:</p>
          <div className="flex flex-col gap-2 sm:flex-row">
            {SITE.phones.map((p) => (
              <a key={p} href={telLink(p)} className="btn-outline">
                <Phone className="size-4" aria-hidden /> {p}
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
