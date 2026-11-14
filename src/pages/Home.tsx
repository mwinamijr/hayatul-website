import { ArrowRight, BookOpenText, GraduationCap, HeartPulse, Landmark, MapPin, School, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

import campus from "@/assets/images/carousel003.webp";
import nursery from "@/assets/images/playground1.webp";
import secondary from "@/assets/images/secondary.webp";
import clinic from "@/assets/images/hospital002.webp";
import HeroSlideshow from "@/components/HeroSlideshow";
import JoiningForms from "@/components/JoiningForms";
import NewsCard, { NewsCardSkeleton } from "@/components/NewsCard";
import { Section, SectionTitle, useTitle } from "@/components/Page";
import { api, useLoad } from "@/lib/api";
import { SITE } from "@/lib/site";

const FACTS = [
  { icon: Landmark, value: `Tangu ${SITE.founded}`, label: "Tukihudumia jamii ya Bonga" },
  { icon: School, value: "Shule 2", label: "Msingi na Sekondari" },
  { icon: GraduationCap, value: "Awali – Kidato cha 6", label: "Elimu ngazi zote" },
  { icon: MapPin, value: "Babati", label: "Bonga, Manyara" },
];

const PILLARS = [
  {
    icon: BookOpenText,
    title: "Elimu ya Dini",
    text: "Qur'an, Kiarabu na Elimu ya Dini ya Kiislamu kwa ngazi zote, kwa mtaala sahihi.",
  },
  {
    icon: GraduationCap,
    title: "Elimu ya Mazingira",
    text: "Mtaala wa Wizara ya Elimu, Sayansi na Teknolojia, ukifundishwa kwa ubora wa hali ya juu.",
  },
  {
    icon: Sprout,
    title: "Malezi na Maadili",
    text: "Tunawalea vijana kwa maadili ya Kiislamu ili waitumikie dini yao na taifa kikamilifu.",
  },
  {
    icon: HeartPulse,
    title: "Huduma kwa Jamii",
    text: "Elimu, afya na maji safi kwa wanajamii wa Bonga na maeneo jirani, sasa tukijenga kituo cha afya.",
  },
];

function LatestNews() {
  const { data, loading, error } = useLoad((signal) => api.news(1, 3, signal), "news-home");
  // Hide the whole section when there is no news yet (or the server cannot be reached).
  if (error || (!loading && !data?.results.length)) return null;
  return (
    <Section className="bg-surface">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionTitle eyebrow="Habari" title="Yanayojiri shuleni" intro="Taarifa mpya kwa wazazi, wanafunzi na wageni." />
        <Link to="/news" className="btn-outline mb-8 self-start sm:mb-10 sm:self-auto">
          Habari zote <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? [0, 1, 2].map((n) => <NewsCardSkeleton key={n} />)
          : data?.results.map((item) => <NewsCard key={item.id} item={item} />)}
      </div>
    </Section>
  );
}

export default function Home() {
  useTitle("");
  return (
    <>
      <HeroSlideshow />

      {/* Quick facts */}
      <div className="relative z-10 -mt-10 sm:-mt-12">
        <div className="container-page">
          <ul className="card grid grid-cols-2 divide-line p-2 lg:grid-cols-4 lg:divide-x">
            {FACTS.map(({ icon: Icon, value, label }) => (
              <li key={value} className="flex flex-col gap-2 p-3 sm:flex-row sm:items-center sm:gap-3 sm:p-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-extrabold sm:text-base">{value}</span>
                  <span className="block text-xs text-muted">{label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* About */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle
              eyebrow="Kuhusu sisi"
              title="Taasisi moja, shule mbili, lengo moja"
              intro={
                <>
                  {SITE.name} ni taasisi ya Kiislamu iliyo chini ya Baraza Kuu la Waislamu Tanzania (BAKWATA). Inaendesha
                  Shule ya Awali na Msingi pamoja na Shule ya Sekondari (O-Level na A-Level), ikitoa elimu bora inayokidhi
                  matakwa ya serikali na maadili ya Kiislamu.
                </>
              }
            />
            <Link to="/about" className="btn-brand">
              Soma zaidi kuhusu taasisi <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="relative">
            <img src={campus} alt="Mandhari ya majengo ya Hayatul Islamiya kutoka juu" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
            <div className="card absolute -bottom-6 left-4 hidden max-w-xs p-5 sm:block">
              <p className="text-sm font-semibold text-brand">"Elimu bora yenye maadili, kwa radhi za Allah (S.W)."</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Schools */}
      <Section className="bg-surface">
        <SectionTitle center eyebrow="Shule zetu" title="Kuanzia elimu ya awali hadi kidato cha sita" />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              img: nursery,
              alt: "Uwanja wa michezo wa watoto",
              title: "Shule ya Awali na Msingi",
              text: "Elimu ya awali na msingi kwa lugha ya Kiswahili, pamoja na elimu ya dini, Qur'an na Kiarabu.",
              to: "/schools/primary",
            },
            {
              img: secondary,
              alt: "Majengo ya shule ya sekondari kutoka juu",
              title: "Shule ya Sekondari",
              text: "O-Level (kidato cha 1–4) na A-Level (kidato cha 5–6) kwa michepuo ya sayansi, sanaa na biashara.",
              to: "/schools/secondary",
            },
          ].map((s) => (
            <Link key={s.to} to={s.to} className="card group flex flex-col overflow-hidden sm:flex-row md:flex-col xl:flex-row">
              <div className="aspect-[16/10] overflow-hidden sm:aspect-auto sm:w-2/5 md:aspect-[16/10] md:w-full xl:aspect-auto xl:w-2/5">
                <img src={s.img} alt={s.alt} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                <h3 className="text-xl font-bold group-hover:text-brand sm:text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{s.text}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Fahamu zaidi <ArrowRight className="size-4" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Joining forms */}
      <Section id="forms" className="bg-brand-soft">
        <SectionTitle
          center
          eyebrow="Udahili"
          title="Fomu za kujiunga"
          intro="Pakua fomu ya ngazi unayoitaka, ijaze, kisha iwasilishe shuleni pamoja na viambatisho vinavyotakiwa."
        />
        <JoiningForms />
      </Section>

      {/* What we stand for */}
      <Section>
        <SectionTitle center eyebrow="Tunachosimamia" title="Elimu kamili kwa mwili, akili na roho" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-6">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-dark">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <LatestNews />

      {/* Health project */}
      <Section>
        <div className="card grid overflow-hidden lg:grid-cols-2">
          <img src={clinic} alt="Wanajumuiya wakijenga msingi wa kituo cha afya" loading="lazy" className="aspect-[16/10] size-full object-cover lg:aspect-auto" />
          <div className="p-6 sm:p-10">
            <p className="eyebrow">Mradi wa afya</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Tunajenga kituo cha afya</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Zahanati ya kisasa karibu na barabara kuu ya Babati - Dodoma, itakayotoa huduma kwa kufuata misingi ya dini
              ya Kiislamu na sheria za nchi. Inatarajiwa kuajiri zaidi ya wafanyakazi 30.
            </p>
            <Link to="/health" className="btn-brand mt-6">
              Maendeleo ya ujenzi <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Section>

      {/* Call to action */}
      <section className="bg-brand text-white">
        <div className="container-page flex flex-col items-start gap-6 py-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Una swali kuhusu kujiunga?</h2>
            <p className="mt-2 text-white/85">Tupigie simu, tuandikie barua pepe au utembelee shule zetu Bonga.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link to="/contact" className="btn-primary">
              Wasiliana nasi
            </Link>
            <Link to="/joining-forms" className="btn-ghost-light">
              Fomu za kujiunga
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
