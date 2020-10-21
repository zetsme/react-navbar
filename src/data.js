import {
  FaApple,
  FaAmazon,
  FaAngular,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaMicrosoft,
  FaReddit,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import React from 'react';

export default [
  {
    name: 'Companies',
    items: [
      { name: 'Apple', icon: <FaApple /> },
      { name: 'Amazon', icon: <FaAmazon /> },
      { name: 'Microsoft', icon: <FaMicrosoft /> },
    ],
  },
  {
    name: 'Javascript',
    items: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Angular', icon: <FaAngular /> },
      { name: 'Vue', icon: <FaVuejs /> },
      { name: 'Node', icon: <FaNodeJs /> },
    ],
  },
  {
    name: 'Socials',
    items: [
      { name: 'Reddit', icon: <FaReddit /> },
      { name: 'Github', icon: <FaGithub /> },
      { name: 'Twitter', icon: <FaTwitter /> },
      { name: 'Linedin', icon: <FaLinkedin /> },
    ],
  },
];
