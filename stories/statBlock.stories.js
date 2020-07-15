import React from 'react';
import StatBlock from '../components/statBlock';


export default {
  title: 'Stat Block',
  component: StatBlock,
};


export const Strong = () => (
	<StatBlock stat="Strong" value="10" mod="0"/>
);

export const Resolute = () => (
	<StatBlock stat="Resolute" value="13" mod="-3" />
);

export const Persuasive = () => (
	<StatBlock stat="Persuasive" value="8" mod="+2" />
);
