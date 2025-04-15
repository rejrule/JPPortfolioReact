// src/components/contactMeSection/ContactSocial.jsx

import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/jeremie-pivin-85bba5303/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/rejrule"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/jpivvin/"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
