import React from 'react';

const Footer = () => {
  const sections = [
    {
      title: 'Abstract',
      links: ['Branches'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Help Center', 'Release Notes', 'Status'],
    },
    {
      title: 'Community',
      links: ['Twitter', 'LinkedIn', 'Facebook', 'Dribbble', 'Podcast'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Legal'],
      contact: {
        text: 'Contact Us',
        email: 'info@abstract.com',
      },
    },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              {section.contact && (
                <div className="mt-4">
                  <p>{section.contact.text}</p>
                  <a href={`mailto:${section.contact.email}`} className="hover:underline">
                    {section.contact.email}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-between">
          <img src="/abstract-logo.svg" alt="Abstract Logo" className="h-8" />
          <p>&copy; Copyright 2024 Abstract Studio Design, Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;