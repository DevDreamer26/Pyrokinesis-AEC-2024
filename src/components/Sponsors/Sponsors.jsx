import React from 'react';

import './Sponsors.css';

const Sponsors = () => {
  const sponsors = [
    // { id: 1, name: 'Awsome Assam', logo: 'awsome.jpg' },
    // { id: 2, name: 'Numaligarh Refinery Limited', logo: 'NRL.jpg' },
    // { id: 3, name: 'Oil India Limited', logo: 'oil.png' },
    { id: 4, name: 'Zaatio.in', logo: 'zaatio.png' },
    // { id: 5, name: 'Gplus', logo: 'gplus' },
    { id: 6, name: 'Company A', logo: 'pyro_logo.png' },
    { id: 7, name: 'Company B', logo: 'pyro_logo.png' },
    { id: 8, name: 'Company C', logo: 'pyro_logo.png' },
    { id: 9, name: 'Company D', logo: 'pyro_logo.png' },
    { id: 10, name: 'Company E', logo: 'pyro_logo.png' },
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
