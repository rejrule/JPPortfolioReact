// src\components\contactMeSection\ContactMeRight.jsx

import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="/public/images/Jeremie02.jpg"
        alt="email image"
        className="max-w-[300px] rounded-2xl shadow-lg border border-orange"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
