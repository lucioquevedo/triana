import SectionTitle from "../atoms/section_title";
import SectionBody from "../atoms/section_body";

const Contact = () => {
  return (
    <section id="contact" className="p-5 mb-16 lg:w-1/2">
      <SectionTitle>Hablemos!</SectionTitle>
      <SectionBody>
        ¿Tienes alguna pregunta o quieres iniciar un proyecto con nosotros? No
        dudes en contactarnos. Estamos aquí para ayudarte a construir tus
        sueños.
      </SectionBody>
      <h3 className="text-2xl font-bold tracking-tighter lg:text-3xl xl:text-4xl">
        +54 9 (351) 661-8536 <br /> Cochabamba 1455, Córdoba, Argentina 5000
      </h3>
    </section>
  );
};

export default Contact;
