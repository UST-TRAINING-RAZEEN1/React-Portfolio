import React from 'react';
import { Link } from 'react-router-dom';

interface Links {
    id:number;
  title: string;
  link: string;
}

const links: Links[] = [
  { id:1,title:'linkedin',link:"https://www.linkedin.com" },
  {id:2, title:'GitHub',link:"https://www.github.com" }
];

const Links: React.FC = () => {
  return (
    <main>
      <section>
        <h1>Links</h1>
        <ul>
          {links.map(Links => (
            <li key={Links.id}>
              <h2>
              <a href={Links.link} target="_blank" rel="noopener noreferrer">{Links.title}</a></h2>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Links;