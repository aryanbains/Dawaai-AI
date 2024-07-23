// src/GovtSchemes.jsx

import React from 'react';

const schemes = [
  {
    name: "Pradhan Mantri Vaya Vandana Yojana (PMVVY)",
    description: "A pension scheme for senior citizens which provides an assured return of 8% per annum for 10 years.",
    link: "https://www.licindia.in/Products/Pension-Plans/Pradhan-Mantri-Vaya-Vandana-Yojana"
  },
  {
    name: "National Programme for the Health Care of Elderly (NPHCE)",
    description: "A program aimed at providing dedicated healthcare services to elderly people both at primary, secondary, and tertiary levels.",
    link: "https://main.mohfw.gov.in/sites/default/files/3203492962971471085.pdf"
  },
  {
    name: "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)",
    description: "Provides a monthly pension to senior citizens above the age of 60 years who are living below the poverty line.",
    link: "https://nsap.nic.in/"
  },
  {
    name: "Varishtha Mediclaim Policy",
    description: "Health insurance policy that caters specifically to senior citizens, covering hospitalization expenses, critical illness, etc.",
    link: "https://www.newindia.co.in/Content.aspx?pageid=1626"
  }
];

const GovtSchemes = () => {
  return (
    <div>
      <h1>Government Schemes for Older People</h1>
      <ul>
        {schemes.map((scheme, index) => (
          <li key={index}>
            <h2>{scheme.name}</h2>
            <p>{scheme.description}</p>
            <a href={scheme.link} target="_blank" rel="noopener noreferrer">Learn more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GovtSchemes;
