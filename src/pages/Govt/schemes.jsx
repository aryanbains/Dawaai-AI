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
  },
  {
    name: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    description: "A health insurance scheme providing coverage of up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization to over 10.74 crore poor and vulnerable families.",
    link: "https://pmjay.gov.in/"
  },
{
  name: "Pradhan Mantri Swasthya Suraksha Yojana (PMSSY)",
  description: " Aims to correct regional imbalances in the availability of affordable and reliable tertiary healthcare services and to augment facilities for quality medical education in the country.",
  link: "https://pmssy.mohfw.gov.in/"
},
{
  name: "National Health Mission (NHM)",
  description: "Encompasses two sub-missions, the National Rural Health Mission (NRHM) and the National Urban Health Mission (NUHM), aiming to improve healthcare delivery across rural and urban areas.",
  link: "https://nhm.gov.in/"
},
{
  name: "Rashtriya Swasthya Bima Yojana (RSBY)",
  description: "Provides health insurance coverage for BPL families and unorganized sector workers, offering cashless hospitalization at empaneled hospitals.",
  link: "http://www.rsby.gov.in/"
},
{
  name: "Janani Suraksha Yojana (JSY)",
  description:"A safe motherhood intervention under the NHM, promoting institutional deliveries among poor pregnant women to reduce maternal and neonatal mortality.",
  link: "https://main.mohfw.gov.in/?q=Organisation/departments-health-and-family-welfare/activities-health-and-family-welfare/janani-suraksha-yojana"
},
{
  name: "Mission Indradhanush",
  description: "Aims to cover all children and pregnant women who are partially or unvaccinated against vaccine-preventable diseases, providing immunization services to the unreached.",
  link: "https://www.drishtiias.com/daily-updates/daily-news-analysis/mission-indradhanush-1"
},
{
  name: "Integrated Child Development Services (ICDS)",
  description: "Aims to improve the health, nutrition, and education of young children and mothers through anganwadi centers.",
  link: "https://wcd.nic.in/integrated-child-development-services-icds-scheme"
},
{
  name: "Deendayal Antyodaya Yojana - National Urban Livelihoods Mission (DAY-NULM)",
  description : "Focuses on improving the quality of life of the urban poor through capacity building, enhancing access to sustainable livelihood opportunities, and providing shelters equipped with essential services.",
  link: "https://nulm.gov.in/"
},
{
  name: "National AIDS Control Programme (NACP)",
  description : "Aims to prevent and control the spread of HIV/AIDS through targeted interventions, awareness campaigns, and providing treatment to affected individuals.",
  link: "https://naco.gov.in/"
},

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
