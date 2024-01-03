import React from 'react';

import './Team.css';

const Team = () => {
  const sponsors = [
    { id: 1, name: 'Member A', logo: 'pyro_logo.png' },
    { id: 2, name: 'Member B', logo: 'pyro_logo.png' },
    { id: 3, name: 'Member C', logo: 'pyro_logo.png' },
    { id: 4, name: 'Member D', logo: 'pyro_logo.png' },
  ];

  const developers = [
    { id: 1, name: 'Member E', logo: 'pyro_logo.png' },
    { id: 2, name: 'Member F', logo: 'pyro_logo.png' },
    { id: 3, name: 'Member G', logo: 'pyro_logo.png' },
    { id: 4, name: 'Member H', logo: 'pyro_logo.png' },
  ];
  const designers = [
    { id: 1, name: 'Member I', logo: 'pyro_logo.png' },
    { id: 2, name: 'Member J', logo: 'pyro_logo.png' },
    { id: 3, name: 'Member K', logo: 'pyro_logo.png' },
    { id: 4, name: 'Member L', logo: 'pyro_logo.png' },
  ];


  return (
    <>
    <div className="sponsors-container">
      <h2>Core Committee</h2>
      <div className="sponsors-list">
        {sponsors.map(sponsor => (
          <div key={sponsor.id} className="sponsor-item">
            <img className='sponsors-img' src={sponsor.logo} alt={sponsor.name} />
            <p>{sponsor.name}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="sponsors-container">
      <h2>Design Team</h2>
      <div className="sponsors-list">
        {designers.map(designer => (
          <div key={designer.id} className="sponsor-item">
            <img className='sponsors-img' src={designer.logo} alt={designer.name} />
            <p>{designer.name}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="sponsors-container">
      <h2>Developers</h2>
      <div className="sponsors-list">
        {developers.map(developer => (
          <div key={developer.id} className="sponsor-item">
            <img className='sponsors-img' src={developer.logo} alt={developer.name} />
            <p>{developer.name}</p>
          </div>
        ))}
      </div>
    </div>

    
    </>
  );
}

export default Team;
