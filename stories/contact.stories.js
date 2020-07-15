import React from 'react';
import ContactCard from '../components/contactCard';

const markdown = `# This is an H1  \n## This is a H2  \n###### This is a H6
  * bullet list one with **bold**
  * bullet list two with *italics*

  1. numbered list
  1. numbered list
`;


const contact1 = {
  name: "Lasifor Nightpitch",
  location: "Thistle Hold",
  faction: "Thistle Hold Ruler",
  notes: markdown
}


export default {
  title: 'Contact Card',
  component: ContactCard,
};


export const LasiforNightpitch = () => (
	<ContactCard {...contact1} title="Lasifor Nightpitch"/>
);

