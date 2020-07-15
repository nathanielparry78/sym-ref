import React from 'react';
import { Stats } from '../components/stats';

export default {
  title: 'Stats',
  component: Stats,
};

const data = "Accurate 13 (−3), Cunning 7 (+3), Discreet 5 (+5), Persuasive 9 (+1), Quick 11 (−1), Resolute 10 (0), Strong 15 (−5), Vigilant 10 (0)"

const data2 = "Accurate 5 (+5), Cunning 15 (−5), Discreet 10 (0), Persuasive 10 (0), Quick 9 (+1), Resolute 13 (−3), Strong 7 (+3), Vigilant 11 (−1)"


export const One = () => (
	<Stats data={data} />
);

export const Two = () => (
	<Stats data={data2} />
);