import React from 'react';
import { Link } from 'react-router-dom';
import './Forum.css';
import Navbar from './Navbar';
import  { useState } from 'react';

const profiles = [
  {
    name: 'Nancy Duarte',
    image: 'https://www.presentation-guru.com/wp-content/uploads/2016/05/nancy_duarte.jpg',
    link: 'https://www.linkedin.com/in/nancyduarte?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3BJISwqByXTpaWXmhJwQc5CA%3D%3D',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Ann Handley',
    image: 'https://blog.hubspot.com/hs-fs/hub/53/file-329705271-jpg/Bold_Talks_Images/AnnHandley.jpg',
    link: 'https://www.linkedin.com/in/annhandley?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3B6xCum2J8RhKDdGZK9nlNPA%3D%3D',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Gretchen Rubin',
    image: 'https://th.bing.com/th/id/OIP.3c7ZhRQqW3419K0rpRqj6QHaFS?w=221&h=180&c=7&r=0&o=5&pid=1.7',
    link: 'https://www.linkedin.com/in/gretchenrubin?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3B6xCum2J8RhKDdGZK9nlNPA%3D%3D',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Arianna Huffington',
    image: 'https://media.licdn.com/dms/image/C4D03AQHmPuoZ-4Jh6w/profile-displayphoto-shrink_800_800/0/1602549159611?e=1683763200&v=beta&t=5HJZYvDdJTVTvjKSFhmBfsBEHNz-Z5EkgdXDdDvfa4k',
    link: 'https://www.linkedin.com/in/ariannahuffington?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3B6xCum2J8RhKDdGZK9nlNPA%3D%3D',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Liz Ryan',
    image: 'https://media.licdn.com/dms/image/C5603AQF4id6Yg2MJvQ/profile-displayphoto-shrink_800_800/0/1599111632027?e=1683763200&v=beta&t=PXKC05ZAWw4aU9-xNaNdI5Q5eaEW3m8mf8d8AVdI1ps',
    link: 'https://www.linkedin.com/in/lizryan?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Btbf2%2Fw0nQ42op0ezQgfLNw%3D%3D',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Rachel Schall Thomas',
    image: 'https://media.licdn.com/dms/image/C5603AQH2ZHODNZ4fOw/profile-displayphoto-shrink_800_800/0/1580231904741?e=1683763200&v=beta&t=OwEt93b657JeXSgETU-xKkfNpGmpugSrYdu6t6GZnuk',
    link: 'https://www.linkedin.com/in/rsthomas?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Btbf2%2Fw0nQ42op0ezQgfLNw%3D%3D',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Sallie Krawcheck',
    image: 'https://media.licdn.com/dms/image/C5603AQEuXso_iebCGg/profile-displayphoto-shrink_800_800/0/1654721783487?e=1683763200&v=beta&t=YtnQpJq9OQEPgoHPON_5PABuO8dWz5r_8M1gVT3U7qc',
    link: 'https://www.linkedin.com/in/salliekrawcheck?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Btbf2%2Fw0nQ42op0ezQgfLNw%3D%3D',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Randi Zuckerberg',
    image: 'https://media.licdn.com/dms/image/C5603AQEY8Dx60kTB1w/profile-displayphoto-shrink_800_800/0/1650670416164?e=1683763200&v=beta&t=_p0maBAwKNlBMQZtd6HJUyUrCQ9z6AiuFcqfVvw3piI',
    link: 'https://www.linkedin.com/in/randizuckerberg?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Btbf2%2Fw0nQ42op0ezQgfLNw%3D%3D'
  },
  {
    name: 'Susan Cain',
    image: 'https://media.licdn.com/dms/image/D4E03AQFBzmOdlxeSPA/profile-displayphoto-shrink_800_800/0/1677516731131?e=1683763200&v=beta&t=osvnP2kvxzIOSqmFW-voKqCMr3jsmYObN7LsuT3keSw',
    link: 'https://www.linkedin.com/in/susancain?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Btbf2%2Fw0nQ42op0ezQgfLNw%3D%3D',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Allie K. Miller',
    image: 'https://media.licdn.com/dms/image/C5603AQFcmNxBigo9_g/profile-displayphoto-shrink_800_800/0/1553407140303?e=1683763200&v=beta&t=w9EsA3hSUyF5D9UJORqIM82gUp7gCQzJ93P5hP3i0Y4',
    link: 'https://www.linkedin.com/in/alliekmiller/',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Tamara McCleary',
    image:'https://media.licdn.com/dms/image/C4E03AQHUvZ5naTpRAw/profile-displayphoto-shrink_800_800/0/1640030026355?e=1683763200&v=beta&t=1TtH-QZn1NoRAXS-ymXUjS-_71l749MuWrL5b8QchPc',
    link:'https://www.linkedin.com/in/tamaramccleary/',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Cassie Kozyrkov ',
    image: 'https://miro.medium.com/v2/resize:fit:2400/1*IL0mnvzNcpG2ZD0JBqo7zQ.jpeg',
    link: 'https://www.linkedin.com/in/kozyrkov/',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Samantha Kelly',
    image: 'https://mario.wiki.gallery/images/thumb/0/0e/Samantha_Kelly.jpg/1200px-Samantha_Kelly.jpg',
    link: 'https://www.linkedin.com/in/tweetinggoddess/',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Kate Strachnyi ',
    image: 'https://media.licdn.com/dms/image/D4E03AQFBB6Van6qRXA/profile-displayphoto-shrink_800_800/0/1667300253120?e=1683763200&v=beta&t=T9hTVJ-QXCdzb_JgejYzHmwvrhSou7jddBmT2jVRW8w',
    link: 'https://www.linkedin.com/in/kate-strachnyi-data/',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Rana el Kaliouby',
    image: 'https://media.licdn.com/dms/image/C4E03AQHcXFyHmAzcqA/profile-displayphoto-shrink_800_800/0/1644636680118?e=1683763200&v=beta&t=xZjuX6EVW8e9ZAQuBIfQcWPZ3VUD3JNwwKwekhgqrGI',
    link: 'https://www.linkedin.com/in/kaliouby/',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Chelsea Larson-Andrews',
    image: 'https://media.licdn.com/dms/image/D5603AQHVEMZmWcT2ng/profile-displayphoto-shrink_800_800/0/1673639838392?e=1683763200&v=beta&t=a-LJupBamnj8uYWu36GMeo4Wc-nuAPsOcoy-TT8YIjk',
    link: 'https://www.linkedin.com/in/chelsealarsonandrews/',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Aishwarya Srinivasan',
    image: 'https://media.licdn.com/dms/image/D5603AQHaPDyUPhNEdg/profile-displayphoto-shrink_800_800/0/1664674482212?e=1683763200&v=beta&t=ZC5A6iFUlXw5Ka9zv5tpoY8S4Zq2T5xAHRWkmpbbE-E',
    link: 'https://www.linkedin.com/in/aishwarya-srinivasan/',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Sandy Carter',
    image: 'https://media.licdn.com/dms/image/C5603AQG7LRGgSKvVzg/profile-displayphoto-shrink_800_800/0/1517706383527?e=1683763200&v=beta&t=H1z85Jzwdvd46zM2Y7Ok8TYjz_B-iWzNFwDN5nOoQQo',
    link: 'https://www.linkedin.com/in/sandyacarter/',
    topmateLink: 'https://topmate.io/'
  },
  {
    name: 'Jane Frankland ',
    image: 'https://media.licdn.com/dms/image/C4D03AQHe7-46ejvWIQ/profile-displayphoto-shrink_800_800/0/1516276433337?e=1683763200&v=beta&t=QSmQKmzBUeEqEu3lzIQQ-Of-hK7aObPAjNHB93Yr6Q8',
    link: 'https://www.linkedin.com/in/janefrankland/',
    topmateLink: 'https://topmate.io/'
  }

];
  

function ForumLink() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "blue" }}>
          Top Influential Women on LinkedIn 
          </a>
        </div>
      </nav>

      <div className="search-container">
        <label htmlFor="search">Search profile:</label>
        <br/>
        <input
          type="text"
          id="search"
          placeholder="  Enter Profile Name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="profiles-container">
    

        {filteredProfiles.map((profile, index) => (
          <a href={profile.link} key={index} target="_blank" rel="noopener noreferrer">
           
            <div className="profile-card">
              <img src={profile.image} alt={profile.name} />
              <h3>{profile.name}</h3>
              <br/>
              <p>Book your sessions now using below link </p>
              <a href={profile.topmateLink} target="_blank" rel="noopener noreferrer">Connect</a>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ForumLink;



  
