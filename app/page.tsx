import Catalogue from "@/src/components/organisms/catalogue";
import Contact from "@/src/components/organisms/contact";
import Hero from "@/src/components/organisms/hero";
import Section from "@/src/components/organisms/section";

export default function Home() {
  return (
    <main className="max-w-screen">
      <Hero />
      <Section
        title="Una familia construyendo sueños"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        imageSrc="/nordic_45.jpg"
        imageAlt="Nordic 45 render"
      />
      <Catalogue />
      <Section
        /* imagePosition="right" */ id="about"
        title="Sobre nosotros"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        imageSrc="/about_us.png"
        imageAlt="About Us Image"
      />
      <Contact />
    </main>
  );
}
