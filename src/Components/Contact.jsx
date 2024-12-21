import React from "react";
import { CONTACT } from "../constants";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 cursor-pointer flex items-center justify-center gap-3"
        >
          <FaPhone /> {CONTACT.phoneNo}
        </motion.p>

        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCMtPbPNxscFlFrCwVfsqQFGHnHGhqVSVdDsnxZhWSmqWBzjGpdnRspnjFPXxxtHXglTdK"
          className=" underline flex items-center justify-center gap-3"
        >
          <IoIosMail /> {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
