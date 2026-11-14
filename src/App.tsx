import { lazy } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes, useParams } from "react-router-dom";

import Layout from "@/components/Layout";
import { PageHero, Section } from "@/components/Page";
import Home from "@/pages/Home";

// Every page except the home page loads on demand, so the first visit stays small.
const About = lazy(() => import("@/pages/About"));
const PrimarySchool = lazy(() => import("@/pages/Schools").then((m) => ({ default: m.PrimarySchool })));
const SecondarySchool = lazy(() => import("@/pages/Schools").then((m) => ({ default: m.SecondarySchool })));
const Forms = lazy(() => import("@/pages/Forms"));
const NewsList = lazy(() => import("@/pages/News").then((m) => ({ default: m.NewsList })));
const NewsDetail = lazy(() => import("@/pages/News").then((m) => ({ default: m.NewsDetail })));
const Health = lazy(() => import("@/pages/Health"));
const Contact = lazy(() => import("@/pages/Contact"));

function OldBlogLink() {
  const { id } = useParams();
  return <Navigate to={`/news/${id}`} replace />;
}

function NotFound() {
  return (
    <>
      <PageHero title="Ukurasa haupatikani" crumb="Haupatikani" intro="Anwani uliyofungua haipo au imehamishwa." />
      <Section>
        <Link to="/" className="btn-brand">
          Rudi mwanzo
        </Link>
      </Section>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="schools/primary" element={<PrimarySchool />} />
          <Route path="schools/secondary" element={<SecondarySchool />} />
          <Route path="joining-forms" element={<Forms />} />
          <Route path="news" element={<NewsList />} />
          <Route path="news/:id" element={<NewsDetail />} />
          <Route path="health" element={<Health />} />
          <Route path="contact" element={<Contact />} />

          {/* Addresses from the old website */}
          <Route path="blog" element={<Navigate to="/news" replace />} />
          <Route path="blog/:id" element={<OldBlogLink />} />
          <Route path="services" element={<Navigate to="/about" replace />} />
          <Route path="health/progress" element={<Navigate to="/health" replace />} />
          <Route path="education/nursery" element={<Navigate to="/schools/primary" replace />} />
          <Route path="education/primary" element={<Navigate to="/schools/primary" replace />} />
          <Route path="education/secondary" element={<Navigate to="/schools/secondary" replace />} />
          <Route path="education/*" element={<Navigate to="/schools/primary" replace />} />
          <Route path="register" element={<Navigate to="/joining-forms" replace />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
