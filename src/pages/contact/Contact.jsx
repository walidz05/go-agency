import { useEffect, useState } from "react";
import Hero from "../../components/contact/Hero";
import Cta from "../../components/home/CTA/Cta";
import { sendContact } from "../../services/contactService";
import OfficeLocation from "../../components/services/OfficeLocation";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact-form") {
      const timer = setTimeout(() => {
        document.getElementById("contact-form")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendContact(formData);

      toast.success("Votre message a été envoyé avec succès !");

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Une erreur est survenue.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Hero
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <OfficeLocation />
      <Cta />
    </>
  );
}

export default Contact;
