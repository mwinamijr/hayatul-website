import { ArrowRight, BookOpenText, Download, FlaskConical, Languages } from "lucide-react";
import { Link } from "react-router-dom";

import lab from "@/assets/images/carousel001.webp";
import students from "@/assets/images/carousel002.webp";
import nursery from "@/assets/images/playground1.webp";
import secondary from "@/assets/images/secondary.webp";
import { PageHero, Section, SectionTitle, TickList } from "@/components/Page";
import {
  A_LEVEL_COMBINATIONS,
  NURSERY_ACTIVITIES,
  O_LEVEL_SUBJECTS,
  PRIMARY_SUBJECTS,
  RELIGIOUS_SUBJECTS,
} from "@/lib/site";

function FormsBanner({ text }: { text: string }) {
  return (
    <section className="bg-accent-soft">
      <div className="container-page flex flex-col items-start gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg font-bold text-ink">{text}</p>
        <Link to="/joining-forms" className="btn-primary">
          <Download className="size-4" aria-hidden /> Pakua fomu ya kujiunga
        </Link>
      </div>
    </section>
  );
}

function ReligiousStudies() {
  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
          <BookOpenText className="size-5" aria-hidden />
        </span>
        <h3 className="text-xl font-bold">Elimu ya dini</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
        Elimu ya dini ni kipaumbele cha kwanza katika ngazi zote. Kila mwanafunzi anajifunza kwa kufuata mtaala sahihi wa
        ngazi yake.
      </p>
      <div className="mt-4">
        <TickList items={RELIGIOUS_SUBJECTS} />
      </div>
    </div>
  );
}

export function PrimarySchool() {
  return (
    <>
      <PageHero
        title="Shule ya Awali na Msingi"
        crumb="Shule ya Msingi"
        image={nursery}
        intro="Msingi imara wa elimu ya dini na elimu ya mazingira, katika mazingira salama yenye upendo, kuanzia elimu ya awali hadi darasa la saba."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="card p-6 sm:p-8">
            <p className="eyebrow">Elimu ya awali</p>
            <h2 className="mt-1 text-xl font-bold">Msingi wa elimu zote</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Elimu ya awali ndiyo inayomjengea mtoto msingi mzuri wa kuendelea na elimu ya msingi. Watoto hujifunza kwa
              vitendo na michezo.
            </p>
            <div className="mt-4">
              <TickList items={NURSERY_ACTIVITIES} />
            </div>
          </div>
          <div className="card p-6 sm:p-8">
            <p className="eyebrow">Darasa la I – VII</p>
            <h2 className="mt-1 text-xl font-bold">Elimu ya msingi</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Elimu ya msingi inamwandaa mwanafunzi kuingia katika ulimwengu wa kielimu. Inatolewa kwa lugha ya{" "}
              <strong className="text-ink">Kiswahili</strong>, kwa mtaala wa Wizara ya Elimu.
            </p>
            <div className="mt-4">
              <TickList items={PRIMARY_SUBJECTS} />
            </div>
          </div>
          <ReligiousStudies />
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img src={students} alt="Wanafunzi wa Hayatul Islamiya" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <div>
            <SectionTitle eyebrow="Malezi" title="Tunamlea mtoto mzima" intro="Elimu ya darasani, Qur'an, michezo na maadili ya Kiislamu kwa pamoja, ili kila mtoto akue kiakili, kimwili na kiroho." />
            <Link to="/schools/secondary" className="btn-outline">
              Baada ya msingi: Shule ya Sekondari <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Section>

      <FormsBanner text="Unataka kumwandikisha mtoto shule ya msingi?" />
    </>
  );
}

export function SecondarySchool() {
  return (
    <>
      <PageHero
        title="Shule ya Sekondari"
        crumb="Shule ya Sekondari"
        image={secondary}
        intro="O-Level (kidato cha kwanza hadi cha nne) na A-Level (kidato cha tano na sita), kwa mtaala wa Wizara ya Elimu, Sayansi na Teknolojia na elimu ya dini."
      />

      <Section id="o-level">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Kidato cha 1 – 4"
              title="O-Level"
              intro="Masomo ya msingi ya sayansi, sanaa na lugha, yanayomwandaa mwanafunzi kwa mtihani wa taifa (NECTA) na kwa A-Level."
            />
            <div className="card p-6">
              <h3 className="mb-4 font-bold">Masomo</h3>
              <TickList items={O_LEVEL_SUBJECTS} columns={2} />
            </div>
          </div>
          <img src={lab} alt="Wanafunzi wakiwa maabara" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
        </div>
      </Section>

      <Section id="a-level" className="bg-surface">
        <SectionTitle
          eyebrow="Kidato cha 5 – 6"
          title="A-Level"
          intro="Wanafunzi huchagua mchepuo wa masomo matatu makuu. Michepuo inayotolewa:"
        />
        <ul className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
          {A_LEVEL_COMBINATIONS.map((c) => (
            <li key={c} className="card flex h-16 items-center justify-center text-lg font-extrabold text-brand">
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { icon: FlaskConical, title: "Sayansi", text: "PCM, PCB na PGM kwa maabara za kufundishia kwa vitendo." },
            { icon: Languages, title: "Sanaa na lugha", text: "HGL, HGK, HKL na KLA: historia, jiografia na lugha." },
            { icon: BookOpenText, title: "Biashara na uchumi", text: "EGM na HGE: uchumi, jiografia na hisabati." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-6">
              <Icon className="size-7 text-accent" aria-hidden />
              <h3 className="mt-3 font-bold">{title}</h3>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <ReligiousStudies />
        </div>
      </Section>

      <FormsBanner text="Fomu za O-Level na A-Level zinapatikana hapa." />
    </>
  );
}
