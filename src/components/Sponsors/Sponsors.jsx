import React from 'react';

import './Sponsors.css';

const Sponsors = () => {
  const sponsors = [
    { id: 1, name: 'Company A', logo: 'pyro_logo.png' },
    { id: 2, name: 'Company B', logo: 'pyro_logo.png' },
    { id: 3, name: 'Company C', logo: 'pyro_logo.png' },
    { id: 4, name: 'Company D', logo: 'pyro_logo.png' },
    { id: 5, name: 'Company E', logo: 'pyro_logo.png' },
    { id: 6, name: 'Company F', logo: 'pyro_logo.png' },
    { id: 7, name: 'Company G', logo: 'pyro_logo.png' },
    { id: 8, name: 'Company H', logo: 'pyro_logo.png' },
    { id: 9, name: 'Company I', logo: 'pyro_logo.png' },
    { id: 10, name: 'Company J', logo: 'pyro_logo.png' },
    // Add more sponsors as needed
  ];

//   useEffect(() => {
//     // GSAP animation for the sponsors
//     gsap.from('.sponsor-item', {
//       opacity: 0,
//       y: 30,
//       stagger: 0.2,
//       duration: 1,
//       ease: 'power3.out',
//     });
//   }, []);

  return (
    <div className="sponsors-container">
      <h2>Our Sponsors</h2>
      <div className="sponsors-list">
        {sponsors.map(sponsor => (
          <div key={sponsor.id} className="sponsor-item">
            <img className='sponsors-img' src={sponsor.logo} alt={sponsor.name} />
            <p>{sponsor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
