import SectionTitle from "../atoms/section_title";
import SectionBody from "../atoms/section_body";
import { Facebook, Instagram } from "@deemlol/next-icons";
import WhatsappIcon from "../../assets/whatsapp.svg";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="p-5 mb-16 lg:w-1/2">
      <SectionTitle>Hablemos!</SectionTitle>
      <SectionBody>
        ¿Tienes alguna pregunta o quieres iniciar un proyecto con nosotros? No
        dudes en contactarnos. Estamos aquí para ayudarte a construir tus
        sueños.
      </SectionBody>
      <ul className="my-4 flex items-center gap-4">
        {socials.map((social, idx) => (
          <li key={idx}>
            <a href={social.href} target="_blank">
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
      <h3 className="text-2xl font-bold tracking-tighter lg:text-3xl xl:text-4xl">
        +54 9 (351) 661-8536 <br /> Cochabamba 1455, Córdoba, Argentina 5000
      </h3>
    </section>
  );
};

const socials = [
  {
    icon: <Instagram size={32} />,
    href: "https://www.instagram.com/trianaconstruccion",
  },
  {
    icon: <Facebook size={32} />,
    href: "https://www.facebook.com/share/15abGQk9jS/?mibextid=wwXIfr",
  },
  {
    icon: <Image src={WhatsappIcon} width={32} height={32} alt="WhatsApp" />,
    href: "https://api.whatsapp.com/send?phone=5493516618536",
  },
];

export default Contact;
