import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  myImage: "/assets/my_image.webp",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "omar55shalaby@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Cairo, Egypt",
      Link: "https://www.google.com/maps/place/Cairo,+Cairo+Governorate/@30.0594885,31.2584644,13z", // This is just a simple location of my city
    },
    {
      Icon: FaPhoneAlt,
      Label: "+20 1030634710",
      Link: "tel:+201030634710",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "Arab Open University",
      Link: "https://www.arabou.edu.eg/",
    },
    {
      Icon: FaGraduationCap,
      Label: "Bachelor's Degree in Computer Science",
      Link: "https://www.arabou.edu.eg/",
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/OmarHany-sudo",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/omar-hany-l850/",
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "https://www.facebook.com/Omar.Hany.850",
    },
    {
      Icon: FaInstagram,
      Label: "Instagram",
      Link: "https://www.instagram.com/omar.hany.850/",
    },
  ],
};

