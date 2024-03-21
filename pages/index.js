import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Copyright from "../src/components/Copyright";
import CounterSection from "../src/components/CounterSection";
import Features from "../src/components/Features";
import Home from "../src/components/Home";
import Partners from "../src/components/Partners";
import Portfolio from "../src/components/Portfolio";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
// import Testimonials from "../src/components/Testimonials";
import Head from "next/head";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileHeader from "../src/layouts/MobileHeader";
import Mouse from "../src/layouts/Mouse";
import ScrollTop from "../src/layouts/ScrollTop";
const Testimonials = dynamic(() => import("../src/components/Testimonials"), {
  ssr: false,
});
const Index = ({ userData }) => {
  return (
    <Layout>
      <Head>
        <title>{userData?.about.name.split(" ")[0]} | Home</title>
      </Head>
      <MobileHeader userData={userData?.about}/>
      <Header userData={userData?.about} />
      <Home userData={userData?.about} />
      <Features />
      <About userData={userData} />
      <CounterSection />
      <Portfolio projects={userData?.projects} />
      <Skills skills={userData?.skills} />
      <Service services={userData?.services} />
      <Process />
      <Testimonials testimonials={userData?.testimonials} />
      {/* <Partners /> */}
      <Contact user={userData?.about} userEmail={userData?.email}/>
      {/* <Blog /> */}
      <Copyright socialData={userData?.social_handles} />
      <Mouse />
      <ScrollTop />
    </Layout>
  );
};


export const getServerSideProps = async () => {
  const res = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
  const data = await res.json();
  console.log(data);
  if (data.success)
    return { props: { userData: data.user } };
}

export default Index;


