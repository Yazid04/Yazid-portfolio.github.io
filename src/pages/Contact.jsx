import React, { useState, useEffect } from "react";
import Navbar from "../Shared/Navbar";
import { FaRegCopy } from "react-icons/fa";
import Footer from "../Shared/Footer";
import ClipboardJS from "clipboard";

const Contact = () => {
  const data = [
    {
      id: "00",
      title: "Contact using Gmail",
      contact: "yazidramadan04@gmail.com",
      link: "mailto:yazidramadan04@gmail.com",
      copy: <FaRegCopy />,
      copied: false,
    },
    {
      id: "01",
      title: "Or using X (A.K.A Twitter)",
      contact: "https://twitter.com/Yazid__Mo",
      link: "https://twitter.com/Yazid__Mo",
      copy: <FaRegCopy />,
      copied: false,
    },
    {
      id: "02",
      title: "LinkedIn",
      contact: "https://www.linkedin.com/in/yazid-mohammed-9a45a1219/",
      link: "https://www.linkedin.com/in/yazid-mohammed-9a45a1219/",
      copy: <FaRegCopy />,
      copied: false,
    },
  ];
  const [copiedContact, setCopiedContact] = useState(null);

  useEffect(() => {
    // Initialize clipboard.js after the component is mounted
    const clipboard = new ClipboardJS(".clipbaord-icon .icon", {
      text: function () {
        return copiedContact; // The text you want to copy
      },
    });

    // Cleanup when the component is unmounted
    return () => {
      clipboard.destroy();
    };
  }, [copiedContact]);

  function showCopiedMsg(contact) {
    // Add the "show" class
    const element = data.find(
      (singleContact) => singleContact.contact === contact
    );
    setCopiedContact(element.contact);

    // Remove the "show" class after 2 seconds
    setTimeout(() => {
      setCopiedContact(null);
    }, 3000);
  }

  return (
    <>
      <section className="text-light">
        <Navbar />
        <main className="w-[90%] font-LeagueSpartan h-min mt-36 md:mt-28 max-w-5xl mx-auto">
          <div className="text-center w-full grid p-5 place-content-center">
            <h2 className="text-4xl overflow-hidden">My Contacts</h2>
          </div>
          <div className="flex flex-col justify-evenly">
            {data.map((singleContact) => {
              const { id, title, contact, link, copy } = singleContact;
              return (
                <div key={id} className="p-3">
                  <div className="flex items-center justify-between">
                    <h2 className="py-2 text-xl">{title}:</h2>
                    <p
                      className={`block md:hidden text-[#358a35] transition-all duration-[3000] ${
                        copiedContact === contact ? "opacity-[1]" : "opacity-0"
                      }`}
                    >
                      Copied!
                    </p>
                  </div>
                  <div className="px-2 py-3 bg-light text-dark flex w-full justify-between items-center">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-blue-500 underline"
                    >
                      {contact}
                    </a>
                    <div className="clipbaord-icon flex items-center gap-5">
                      <p
                        className={`hidden md:block text-[#226322] transition-all duration-[3000] ${
                          copiedContact === contact
                            ? "opacity-[1]"
                            : "opacity-0"
                        }`}
                      >
                        Copied!
                      </p>
                      <p
                        onClick={() => showCopiedMsg(contact)}
                        className="icon cursor-pointer"
                      >
                        {copy}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
