// src\components\contactMeSection\ContactInfo.jsx

import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="jerecode22@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="1-418-806-5249" Image={FiPhone} />
      <SingleInfo text="Canada, Qc" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
