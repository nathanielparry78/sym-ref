import React from 'react';
import { BoonsBurdens } from '../components/boonsBurdens';
import {boons, burdens} from '../public/symbaroum-data.json';


export default {
  title: 'Boons & Burdens',
  component: BoonsBurdens,
};


export const Boons = () => (
	<BoonsBurdens list={boons} title="Boons"/>
);

export const Burdens = () => (
	<BoonsBurdens list={burdens} title="Burdens"/>
);
