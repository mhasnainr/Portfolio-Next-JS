"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FormEvent } from "react";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Welcome!";
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY!
        )
        .then(
          () => {
            setSuccess(true);
            form.current?.reset();
          },
          () => {
            setError(true);
          }
        );
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen flex flex-col lg:flex-row p-8 sm:p-12 lg:p-20 xl:p-32">
        {/* Text container */}
        <div className="lg:w-1/2 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Form container */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="lg:w-1/2 bg-red-50 rounded-xl text-lg sm:text-xl flex flex-col gap-6 p-8 sm:p-12 lg:p-16 xl:p-24 justify-center my-10"
        >
          <span>Dear Hasnain Rizvi,</span>
          <textarea
            rows={5}
            className="bg-transparent border-b-2 border-black outline-none resize-none"
            name="user_message"
            placeholder="Your message..."
          />
          <span>Email Address:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-black outline-none"
            placeholder="example@email.com"
          />
          <span>Regards</span>
          <br />
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-3 hover:bg-purple-300 transition-colors">
            Send
          </button>

          {success && (
            <span className="text-green-600">
              Your message has been sent successfully!
            </span>
          )}
          {error && <span className="text-red-600">Something went wrong!</span>}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
