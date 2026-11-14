import { Check, Circle, Users } from "lucide-react";

import afya1 from "@/assets/images/afya001.webp";
import afya2 from "@/assets/images/afya002.webp";
import hospital1 from "@/assets/images/hospital001.webp";
import hospital2 from "@/assets/images/hospital002.webp";
import { PageHero, Section, SectionTitle, TickList } from "@/components/Page";

const SERVICES = [
  "Mapokezi",
  "Wagonjwa wa nje",
  "Maabara",
  "Dawa na stoo",
  "Afya ya uzazi na mtoto",
  "Upasuaji mdogo, macho na meno",
];

const PHASES = [
  { title: "Ufyatuaji wa matofali na ununuzi wa vifaa vya ujenzi", state: "now" },
  { title: "Ujenzi wa majengo na umaliziaji (finishing)", state: "next" },
  { title: "Ununuzi wa vifaa vya ndani na kuajiri wafanyakazi", state: "next" },
] as const;

const BRICKS = [
  { size: "15 x 15", rooms: 24, perRoom: 472, total: 11328 },
  { size: "17 x 20", rooms: 2, perRoom: 586, total: 1171 },
  { size: "10 x 20", rooms: 4, perRoom: 212, total: 848 },
  { size: "25 x 15", rooms: 2, perRoom: 664, total: 1328 },
  { size: "18 x 25", rooms: 2, perRoom: 548, total: 1096 },
];

const number = (n: number) => n.toLocaleString("en-US");

export default function Health() {
  return (
    <>
      <PageHero
        title="Kituo cha Afya Hayatul Islamiya"
        crumb="Afya"
        image={hospital2}
        intro="Zahanati ya kisasa itakayotoa huduma kwa kufuata masharti ya Kiislamu na sheria na kanuni za serikali ya Jamhuri ya Muungano wa Tanzania."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="prose-text leading-relaxed text-muted sm:text-lg">
            <SectionTitle eyebrow="Utangulizi" title="Kwa nini kituo cha afya?" />
            <p>
              Waislamu bado tuko nyuma katika utoaji wa huduma za afya. Taasisi inajenga zahanati pembeni ya barabara kuu ya
              Babati - Dodoma, karibu na Shule ya Sekondari Hayatul, katika eneo la mita 56 kwa 32.
            </p>
            <p>
              Huduma zote zitatolewa kwa kuzingatia jinsia, isipokuwa sehemu chache za dharura kama upasuaji mdogo na huduma
              za macho na meno.
            </p>
            <p className="flex items-center gap-3 font-semibold text-brand">
              <Users className="size-5" aria-hidden /> Inatarajiwa kuajiri zaidi ya wafanyakazi 30.
            </p>
          </div>
          <div className="card p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-bold">Huduma zitakazotolewa</h3>
            <TickList items={SERVICES} columns={2} />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionTitle eyebrow="Maendeleo" title="Awamu za ujenzi" />
        <ol className="grid gap-4 md:grid-cols-3">
          {PHASES.map((phase, i) => (
            <li key={phase.title} className={`card p-6 ${phase.state === "now" ? "border-brand ring-1 ring-brand" : ""}`}>
              <div className="flex items-center gap-2 text-sm font-bold">
                {phase.state === "now" ? (
                  <Check className="size-4 text-brand" aria-hidden />
                ) : (
                  <Circle className="size-4 text-muted" aria-hidden />
                )}
                <span className={phase.state === "now" ? "text-brand" : "text-muted"}>
                  Awamu ya {i + 1}
                  {phase.state === "now" ? " · inaendelea" : ""}
                </span>
              </div>
              <p className="mt-2 font-semibold">{phase.title}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { src: hospital1, alt: "Kuchimba msingi wa zahanati" },
            { src: hospital2, alt: "Wanajumuiya wakijenga msingi" },
            { src: afya1, alt: "Wanajumuiya wakileta maji ya ujenzi" },
            { src: afya2, alt: "Matofali ya ujenzi wa zahanati" },
          ].map((p) => (
            <img key={p.alt} src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Makisio"
          title="Matofali yanayohitajika"
          intro="Tofali za block za inchi 18 x 9 x 5, kwa uwiano wa mchanga na kokoto 2:1. Idadi imekisiwa kutoka kwenye ramani, chumba kwa chumba."
        />
        {/* Table on tablet and computer, cards on a phone */}
        <div className="card hidden overflow-hidden sm:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-brand-soft text-brand-dark">
              <tr>
                <th className="px-5 py-3 font-bold">Ukubwa wa chumba (ft)</th>
                <th className="px-5 py-3 text-right font-bold">Vyumba</th>
                <th className="px-5 py-3 text-right font-bold">Tofali kwa chumba</th>
                <th className="px-5 py-3 text-right font-bold">Jumla ya tofali</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {BRICKS.map((b) => (
                <tr key={b.size}>
                  <td className="px-5 py-3">{b.size}</td>
                  <td className="px-5 py-3 text-right">{b.rooms}</td>
                  <td className="px-5 py-3 text-right">{number(b.perRoom)}</td>
                  <td className="px-5 py-3 text-right">{number(b.total)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-canvas font-bold">
              <tr>
                <td className="px-5 py-3" colSpan={3}>
                  Jumla kuu
                </td>
                <td className="px-5 py-3 text-right">{number(15771)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <ul className="grid gap-3 sm:hidden">
          {BRICKS.map((b) => (
            <li key={b.size} className="card grid grid-cols-2 gap-1 p-4 text-sm">
              <span className="text-muted">Chumba</span>
              <span className="text-right font-semibold">{b.size} ft</span>
              <span className="text-muted">Vyumba</span>
              <span className="text-right">{b.rooms}</span>
              <span className="text-muted">Tofali kwa chumba</span>
              <span className="text-right">{number(b.perRoom)}</span>
              <span className="text-muted">Jumla</span>
              <span className="text-right font-semibold">{number(b.total)}</span>
            </li>
          ))}
          <li className="card flex justify-between bg-brand-soft p-4 font-bold">
            <span>Jumla kuu</span>
            <span>{number(15771)}</span>
          </li>
        </ul>
      </Section>
    </>
  );
}
