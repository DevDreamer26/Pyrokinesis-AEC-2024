import React from "react";

import "./Team.css";

const Team = () => {
  const core_members = [
    {
      id: 1,
      name: "Hrishikesh Deuri",
      logo: "Core-members/Hrishikesh Deuri-modified.png",
      role: "Joint Convenor",
    },
    {
      id: 2,
      name: "Himanshu Handique",
      logo: "Core-members/Himanshu Handique-modified.png",
      role: "Chief Coordinator",
    },
    {
      id: 3,
      name: "Reetu polo Phukan",
      logo: "Core-members/Reetu polo Phukan-modified.png",
      role: "Chief Coordinator ",
    },
    {
      id: 4,
      name: "Jyotirmoy Kalita",
      logo: "Core-members/Jyotirmoy Kalita-modified.png",
      role: "Chief Coordinator ",
    },
    {
      id: 5,
      name: "Tejas Borpatra Gohain",
      logo: "Core-members/Tejas Borpatra Gohain-modified.png",
      role: "Chief Coordinator ",
    },
    {
      id: 6,
      name: "Rikabh Ranjan Baishya",
      logo: "Core-members/Rikabh Ranjan Baishya-modified.png",
      role: "Financial Co-ordinator",
    },
    {
      id: 7,
      name: "Manab Paul",
      logo: "Core-members/Manab Paul-modified.png",
      role: "Financial Coordinator ",
    },
    {
      id: 8,
      name: "Puspam Mazumdar ",
      logo: "Core-members/Puspam Mazumdar-modified.png",
      role: "Financial Coordinator",
    },
    {
      id: 9,
      name: "Deiji Das ",
      logo: "Core-members/Deiji Das-modified.png",
      role: "Financial coordinator ",
    },
    {
      id: 10,
      name: "Ashique Anowar",
      logo: "Core-members/Ashique-modified.png",
      role: "Technical Coordinator",
    },
    {
      id: 11,
      name: "Arpon Bhuyan",
      logo: "Core-members/Arpon Bhuyan-modified.png",
      role: "Design Coordinator",
    },
    {
      id: 12,
      name: "Tarik Anower ",
      logo: "Core-members/Tarik Anower-modified.png",
      role: "Design coordinator",
    },
    {
      id: 13,
      name: "Raktim Malakar",
      logo: "Core-members/Raktim Malakar-modified.png",
      role: "Public Relations ",
    },

    {
      id: 14,
      name: "Pratyush Deep Hazarika",
      logo: "Core-members/Pratyush Deep Hazarika-modified.png",
      role: "Public Relations",
    },

    {
      id: 15,
      name: "Khuranka Dutta",
      logo: "Core-members/Khuranka Dutta-modified.png",
      role: "Publicity Coordinator",
    },

    {
      id: 16,
      name: "Nirban Saha",
      logo: "Core-members/Nirban Saha-modified.png",
      role: "Publicity Coordinator",
    },

    {
      id: 17,
      name: "Aatlanta Baruah ",
      logo: "Core-members/Aatlanta Baruah-modified.png",
      role: "Publicity Coordinator",
    },

    {
      id: 18,
      name: "Chiman Deka",
      logo: "Core-members/Chiman Deka-modified.png",
      role: "Publicity Coordinator ",
    },
    {
      id: 19,
      name: "Manali Borah",
      logo: "Core-members/Manali Borah-modified.png",
      role: "Publicity Coordinator",
    },

    {
      id: 20,
      name: "Name Here",
      logo: "Core-members/pyro_logo.png",
      role: "Position",
    },
  ];

  return (
    <>
      <div className="core_members-container">
        <h2>Pyrokinesis 2024 Core Committee</h2>
        <br />
        <div className="core_members-list">
          {core_members.map((core_member) => (
            <div key={core_member.id} className="sponsor-item">
              <img
                className="core_members-img"
                src={core_member.logo}
                alt={core_member.name}
              />
              <b>
                <p>{core_member.name}</p>
              </b>

              <p>{core_member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
