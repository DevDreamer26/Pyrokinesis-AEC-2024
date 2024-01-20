// Team.js

import React from 'react';
import './Team.css';

const Team = () => {
  const core_members = [
    {
      id: 1,
      name: 'Dipu Kalita',
      logo: 'Core-members/Dipu Kalita-modified.png',
      role: 'Convenor (GS-AECSU)',
    },
    {
      id: 2,
      name: 'Hrishikesh Deuri',
      logo: 'Core-members/Hrishikesh Deuri-modified.png',
      role: 'Joint Convenor',
    },
    {
      id: 3,
      name: 'Himanshu Handique',
      logo: 'Core-members/Himanshu Handique-modified.png',
      role: 'Chief Coordinator',
    },
    {
      id: 4,
      name: 'Reetu Polo Phukan',
      logo: 'Core-members/Reetu polo Phukan-modified.png',
      role: 'Chief Coordinator',
    },
    {
      id: 5,
      name: 'Jyotirmoy Kalita',
      logo: 'Core-members/Jyotirmoy Kalita-modified.png',
      role: 'Chief Coordinator',
    },
    {
      id: 6,
      name: 'Tejas Borpatra Gohain',
      logo: 'Core-members/Tejas Borpatra Gohain-modified.png',
      role: 'Chief Coordinator',
    },
    {
      id: 7,
      name: 'Rikabh Ranjan Baishya',
      logo: 'Core-members/Rikabh Ranjan Baishya-modified.png',
      role: 'Financial Co-ordinator',
    },
    {
      id: 8,
      name: 'Manab Paul',
      logo: 'Core-members/Manab Paul-modified.png',
      role: 'Financial Coordinator',
    },
    {
      id: 9,
      name: 'Puspam Mazumdar',
      logo: 'Core-members/Puspam Mazumdar-modified.png',
      role: 'Financial Coordinator',
    },
    {
      id: 10,
      name: 'Deiji Das',
      logo: 'Core-members/Deiji Das-modified.png',
      role: 'Financial Coordinator',
    },
    {
      id: 11,
      name: 'Ashique Anowar',
      logo: 'Core-members/Ashique-modified.png',
      role: 'Technical Coordinator',
    },
    {
      id: 12,
      name: 'Arpon Bhuyan',
      logo: 'Core-members/Arpon Bhuyan-modified.png',
      role: 'Design Coordinator',
    },
    {
      id: 13,
      name: 'Tarik Anower',
      logo: 'Core-members/Tarik Anower-modified.png',
      role: 'Design Coordinator',
    },
    {
      id: 14,
      name: 'Raktim Malakar',
      logo: 'Core-members/Raktim Malakar-modified.png',
      role: 'Public Relations',
    },
    {
      id: 15,
      name: 'Pratyush Deep Hazarika',
      logo: 'Core-members/Pratyush Deep Hazarika-modified.png',
      role: 'Public Relations',
    },
    {
      id: 16,
      name: 'Md Najib Ahmed',
      logo: 'Core-members/Md Najib Ahmed-modified.png',
      role: 'Public Relations',
    },
    {
      id: 17,
      name: 'Khuranka Dutta',
      logo: 'Core-members/Khuranka Dutta-modified.png',
      role: 'Publicity Coordinator',
    },
    {
      id: 18,
      name: 'Nirban Saha',
      logo: 'Core-members/Nirban Saha-modified.png',
      role: 'Publicity Coordinator',
    },
    {
      id: 19,
      name: 'Aatlanta Baruah',
      logo: 'Core-members/Aatlanta Baruah-modified.png',
      role: 'Publicity Coordinator',
    },
    {
      id: 20,
      name: 'Chiman Deka',
      logo: 'Core-members/Chiman Deka-modified.png',
      role: 'Publicity Coordinator',
    },
    {
      id: 21,
      name: 'Manali Borah',
      logo: 'Core-members/Manali Borah-modified.png',
      role: 'Publicity Coordinator',
    },
  ];

  return (
    <>
      <div className="core_members-container">
        <h2>Pyrokinesis 2024 Core Committee</h2>
        <br />
        <div className="core_members-list">
          {core_members.map((core_member) => (
            <div key={core_member.id} className="core_member-item">
              <img
                className="core_members-img"
                src={core_member.logo}
                alt={core_member.name}
              />
              <b>
                {core_member.name}
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
