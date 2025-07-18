import React from "react";
import Button from "../atoms/Button";
import { BsGithub, BsLinkedin, BsEnvelope, BsInstagram } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const contacts = [
  {
    label: "Email",
    icon: <BsEnvelope />,
    href: "mailto:fthnmrh012@gmail.com",
  },
  {
    label: "GitHub",
    icon: <BsGithub />,
    href: "https://github.com/fathanmaul",
  },
  {
    label: "LinkedIn",
    icon: <BsLinkedin />,
    href: "https://www.linkedin.com/in/fathanmaul/",
  },
  {
    label: "Instagram",
    icon: <BsInstagram />,
    href: "https://www.instagram.com/fathanmaul_/",
  }
];

export default function Contacts() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-9 lg:gap-0">
      <div className="col-span-12 lg:col-span-2">
        <h3 className="uppercase">Contacts</h3>
      </div>
      <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 lg:col-span-7">
        {contacts.map((contact, idx) => (
          <a key={idx} href={contact.href} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="text-base lg:text-xl w-full flex items-center gap-2 justify-center">
              <span>{contact.icon}</span>
              {contact.label}
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
}