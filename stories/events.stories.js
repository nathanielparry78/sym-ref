import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

// https://nerdsonearth.com/2019/09/100-dd-city-encounter-ideas/
// https://nerdsonearth.com/2016/02/100-dungeons-and-dragons-roadside-encounters-2/

const events = [
	{
		name: "Large Caravan",
		description: "You see fresh tracks wagon in the dirt as you walk along the road. You continue forward and begin to pick out a number of distinct tracks. They must be from a large caravan. Sure enough, as you crest a hill, you see a group of four wagons headed down the road in the same direction as you. You count perhaps three or four guards among them.",
		choices: [
			{
				text: "Approach the caravan and offer to travel with them until your paths diverge",
				consequence: ""
			},
			{
				text: "Avoid the caravan.",
				consequence: ""
			}
		]
	},
	{
		name: "Tollbooth",
		description: "The local lord has placed a tollbooth on the road the PCs are currently using. They will be required to either pay the toll (coming to 4 bits/person + a 5 penny tax on each weapon they are carrying), or try to avoid the booth by traveling through the wilderness. If the PCs go through the booth, and are fairly polite to the toll collector, he may have heard some rumors or information as to what lies ahead.",
		choices: [
			{
				text: "Pay the toll.",
				consequence: ""
			},
			{
				text: "Circumnavigate the toll booth.",
				consequence: ""
			}
		]
	},
	{
		name: "What Remains",
		description: "The PCs come across a poorly-hidden corpse along their path of travel. At the same time, a group of local guards is passing by and notice the PCs noticing it.",
		choices: [
			{
				text: "Fight the guards",
				consequence: ""
			},
			{
				text: "Explain the situation.",
				consequence: ""
			}
		]
	},
	{
		name: "Wedding Crashers",
		description: "As the PCs approach, or pass by, the village, they spot a party going on. If they bother to investigate, they will be told that the party is for the wedding of the lord's reeve to the daughter of a local farming family. The entire village is here and there is food, drink and dance.",
		choices: [
			{
				text: "Join in on the festivities",
				consequence: ""
			},
			{
				text: "Avoid the party",
				consequence: ""
			}
		]
	},
	{
		name: "What's all this, then?!",
		description: "The PCs come across two parties in the throws of a heated argument",
		choices: [
			{
				text: "Intervene and try to break up the fight",
				consequence: ""
			},
			{
				text: "",
				consequence: ""
			}
		]
	},
	{
		name: "",
		description: "Walking along the edge of the forest, you begin to hear strange, unfamiliar sounds coming from beyond the trees; You stop and listen closer. There's a rhythm to the sounds, and with that established you begin to pick out different human voices in the mix. You'd venture to say that the noise vaguely sounds like chanting.",
		choices: [
			{
				text: "Head into the forest to investigate the chanting.",
				consequence: ""
			},
			{
				text: "Keep moving down the road. No need to get mixed up in whatever is going on.",
				consequence: ""
			}
		]
	},
	{
		name: "",
		description: "Walking through a stretch of lowlands, you see a man in armor silting against a large boulder. As you get closer, you see that he is bleeding from his side. 'Ah, what luck,' he says, 'I got separated from my detail and then had an unfortunate run-in with a bear. I'm afraid I no longer have the strength to stand.' He looks at you imploringly. 'You wouldn't happen to have some herbs or something you wouId be willing to give me? I just need a little extra energy to make it back to town.'",
		choices: [
			{
				text: "Help out the guard.",
				consequence: ""
			},
			{
				text: "Claim you have no aid to give and move on.",
				consequence: ""
			}
		]
	},
	{
		name: "",
		description: "A rustling in a nearby thicket stops you in your tracks. You crouch down and assume a defensive stance. Suddenly It barks at you t ic and then begi fou relax your weapons. What is such a small[ defenseless puppy doing out in the wilderness?",
		choices: [
			{
				text: "Leave the puppy to fend for itself.",
				consequence: ""
			},
			{
				text: "Take the puppy and bring it back to town.",
				consequence: ""
			}
		]
	},
	{
		name: "",
		description: "Traveling off the beaten path, you arc surprised to see a large group ol figures on the horizon. You take out your weapons and move cautiously forward. As you get closer; it becomes clear that the figures are not aliver but sculptures of some kind\ made haphazardly out of branches, garbage, and scrap metal There are fifty or so in the middle of a field, with no other signs of life as far as you can see. You see a necklace that may be valuable on one of them and go to grab it. 'Don't touch her!' You wheel around to see an old man in rags emerge from a hole in the ground and charge at you with a broken broom handle. 'These women arc all mine!'",
		choices: [
			{
				text: "Defend yourself with lethal force.",
				consequence: ""
			},
			{
				text: "Attempt to calm down the hermit and resolve the situation peacefully.",
				consequence: ""
			}
		]
	},
	{
		name: "",
		description: "The route to your destitution is less direct than you had hoped\ and you end up taking a shortcut through a small forest. There you happen upon a family of deer. They are still a ways off in the distance and haven't noticed you. You approach cautiously...",
		choices: [
			{
				text: "Shoot at one of the deer.",
				consequence: ""
			},
			{
				text: "Just watch the deer for a little bit.",
				consequence: ""
			}
		]
	},
	{
		name: "",
		description: "The road contains many dangers. Among them are the barbarian tribes that inhabit the wilderness around the cities and towns that dot the land: This is why your heart sinks when you see a mounted group of them ride up to you and surround your party, “Ah, agents of that wretched monstrosity you call a town,' the largest of the barbarians says as he looks down at you, 'Tell me, scum. What business do you have out here on my land? Have those fools sent you out to murder more of my people?'",
		choices: [
			{
				text: "Attempt to come to a peaceful resolution",
				consequence: ""
			},
			{
				text: "Attack the insulting, contemptuous barbarians",
				consequence: ""
			}
		]
	},
	{
		name: "",
		description: "Heading down the main road[ you of you. It is covered in metal bars and a number ragge side of the wagon, you see city guards on horseback eye You get closer and one of the guards calls out to you. 'Keep your distance! We are transporting dangerous criminals.' A moment later, one of the prisoners in back slips out of his manacles and begins to sprint full speed into the tall grass.",
		choices: [
			{
				text: "Help the guards catch the escaping man.",
				consequence: ""
			},
			{
				text: "Interfere witht he guards to help the man escape.",
				consequence: ""
			}
		]
	},
	{
		name: "",
		description: "A naked man asks for directions to the nearest inn where he left his clothes and money.",
		choices: [
			{
				text: "Help out the bard.",
				consequence: ""
			},
			{
				text: "Leave him to fend for himself",
				consequence: ""
			}
		]
	},
	{
		name: "",
		description: "A mob has gathered and is about to hang a man they are accusing of being a sorcereror.",
		choices: [
			{
				text: "Intervene and help the accused.",
				consequence: ""
			},
			{
				text: "Stand back and watch.",
				consequence: ""
			}
		]
	},
	{
		name: "",
		description: "A group of young, rude nobles are racing horses through the streets and nearly ride down the characters.",
		choices: [
			{
				text: "Demand satisfaction.",
				consequence: ""
			},
			{
				text: "Leave the nobles be. It's better to not get involved with people like that.",
				consequence: ""
			}
		]
	},
	{
		name: "What's cooking",
		description: "Three types of meat hang on a spit over a campfire. It is clear that it is three types of humanoids that hang over the flames.",
		choices: [
			{
				text: "Wait to see who comes back to the fire.",
				consequence: ""
			},
			{
				text: "Keep moving as quickly as possible.",
				consequence: ""
			}
		]
	},
	{
		name: "",
		description: "Three pilgrims trudge along the dusty road, an old man and two young men. Simple travelers? Or are they more than they seem?",
		choices: [
			{
				text: "",
				consequence: ""
			},
			{
				text: "",
				consequence: ""
			}
		]
	},
	{
		name: "",
		description: "A dozen townsfolk are running after a fleeing woman and attempting to stone her to death for being a prostitute.",
		choices: [
			{
				text: "",
				consequence: ""
			},
			{
				text: "",
				consequence: ""
			}
		]
	},
	{
		name: "",
		description: "",
		choices: [
			{
				text: "",
				consequence: ""
			},
			{
				text: "",
				consequence: ""
			}
		]
	},
	{
		name: "",
		description: "",
		choices: [
			{
				text: "",
				consequence: ""
			},
			{
				text: "",
				consequence: ""
			}
		]
	},

]

// {
// 	name: "",
// 	description: "",
// 	choices: [
// 		{
// 			text: "",
// 			consequence: ""
// 		},
// 		{
// 			text: "",
// 			consequence: ""
// 		}
// 	]
// }

// export default {
//   title: 'Welcome',
//   component: Welcome,
// };

export const ToStorybook = () => <Welcome showApp={linkTo( 'Button' )} />;

ToStorybook.story = {
	name: 'to Storybook',
};
