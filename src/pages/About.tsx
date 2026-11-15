import { BookOpenText, Compass, HandCoins, HeartPulse, Target, Tractor } from "lucide-react";

import campus from "@/assets/images/carousel003.webp";
import students from "@/assets/images/carousel002.webp";
import { PageHero, Section, SectionTitle } from "@/components/Page";
import { SITE } from "@/lib/site";

const PURPOSES = [
  {
    icon: BookOpenText,
    title: "Elimu",
    text: "Kujenga, kusimamia na kugharamia miradi ya elimu kuanzia shule za awali, msingi hadi sekondari.",
  },
  {
    icon: HeartPulse,
    title: "Afya",
    text: "Kujenga, kusimamia na kugharamia miradi ya afya kuanzia zahanati hadi vituo vya afya na hospitali.",
  },
  {
    icon: HandCoins,
    title: "Udhamini",
    text: "Kudhamini elimu ya vijana wa Kiislamu wenye uwezo wa kuendelea na masomo lakini wasio na uwezo wa kuigharamia.",
  },
  {
    icon: Tractor,
    title: "Kilimo na Biashara",
    text: "Kumiliki maeneo ya kilimo ya mazao ya chakula na mboga kwa matumizi ya vitengo vya Jumuiya, ili kupunguza gharama.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        title={`Ijue ${SITE.name}`}
        crumb="Kuhusu"
        image={campus}
        intro="Taasisi ya Kiislamu iliyo chini ya Baraza Kuu la Waislamu Tanzania (BAKWATA), ikihudumia jamii ya Bonga na maeneo jirani tangu 1998."
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <img src={students} alt="Wanafunzi wa Hayatul Islamiya" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
          <div className="prose-text text-base leading-relaxed text-muted sm:text-lg">
            <p className="eyebrow mb-2">Historia yetu</p>
            <h2 className="mb-4 text-2xl font-extrabold text-ink sm:text-3xl">Wanajumuiya waliojitolea kwa ajili ya Allah</h2>
            <p>
              {SITE.name} inamilikiwa kihalali na wanajumuiya wa Hayatul Islamiya Complex, ambao wametoa ahadi mbele ya
              Allah (S.W) kuitumikia na kujitolea kikamilifu ili kupata radhi zake.
            </p>
            <p>
              Tangu kuanzishwa kwake mwaka {SITE.founded}, taasisi imekuwa ikitoa huduma za elimu, afya na maji safi kwa
              wanajamii wa Bonga na maeneo jirani, kwa kufuata misingi ya dini ya Kiislamu na matakwa ya serikali ya
              Jamhuri ya Muungano wa Tanzania.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionTitle center eyebrow="Madhumuni" title="Madhumuni ya taasisi" />
        <div className="grid gap-5 sm:grid-cols-2">
          {PURPOSES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card flex gap-4 p-6">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sky-soft text-sky-dark">
                <Icon className="size-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card bg-brand p-8 text-white">
            <Compass className="size-10 text-accent" aria-hidden />
            <h3 className="mt-4 text-2xl font-extrabold">Dira</h3>
            <p className="mt-3 leading-relaxed text-white/85">
              Kuendeleza taasisi yenye maadili ya Kiislamu inayotoa elimu, huduma za afya na msaada kwa jamii kwa kiwango
              cha hali ya juu.
            </p>
          </div>
          <div className="card p-8">
            <Target className="size-10 text-accent" aria-hidden />
            <h3 className="mt-4 text-2xl font-extrabold">Dhamira</h3>
            <p className="mt-3 leading-relaxed text-muted">
              Kusaidia jamii na wanajumuiya wa {SITE.name} kupitia elimu, afya na miradi ya maendeleo endelevu.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
