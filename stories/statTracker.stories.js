import React from 'react';
import StatTracker from '../components/statTracker';


export default {
  title: 'Stat Tracker',
  component: StatTracker,
};


export const Corruption = () => (
	<StatTracker stat="Corruption" currentValue="3" maxValue="13"/>
);

export const Toughness = () => (
	<StatTracker stat="Toughness" currentValue="10" maxValue="10"/>
);
