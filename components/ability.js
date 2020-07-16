import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	position: relative;
`

const Name = styled.span`
	font-family: 'IM Fell Great Primer SC', serif;
	font-size: 2rem;
	color: var(--brown);

	&::after {
		content: "";
		border-bottom: 3px solid var(--lightBrown);
		width: 100%;
		height: 1px;
		top: 40px;
		position: absolute;
		display: block;
	}
`;

const Source = styled.span`
	font-size: .75rem;
	padding: 0 .5rem;
`;

const Effect = styled.div`
	margin-top: 1rem;
`;

const Requirement = styled.div`
	font-style: italic;
`;

const TierBlock = styled.li`
	position: relative;
	list-style: none;
	padding-left: 2rem;
	border-width: 90%;
	padding-top: .5rem;
	padding-bottom: 1rem;

	&::before {
		margin: 0 .5rem 0 -1.5rem;
		${({type}) => type === "novice" && "content:'･'; font-size: 1.4rem; line-height: 1; margin-left: -1.375rem; padding-right: .125rem;"}
		${({type}) => type === "adept" && "content: '･･'; font-size: 1.4rem; letter-spacing: -3px; margin-left: -1.625rem;	line-height: 1;"}
		${({type}) => type === "master" && "content: '𐬽';"}
	}

	&:after {
		position: absolute;
		content: "";
		width: calc(100% - 2rem);
		height: 1px;
		bottom: 0;
		background: #666;
		left: 2rem;
	}

	&:last-of-type:after {
		background: none;
	}
`;

const Type = styled.span`
	font-weight: 700;
	font-style: italic;
`;

const Text = styled.span``;

export const Ability = ({
	className,
	name,
	source,
	requirement,
	effect,
	novice,
	adept,
	master,
	tier=3}) => (
	<Card className={className}>
		<Name>{name}</Name>
		<Source>{source}</Source>
		{requirement &&
			<Requirement>Requirement: {requirement}</Requirement>
		}
		<Effect>{effect}</Effect>

		{novice &&
			<TierBlock type={"novice"}>
				<Type>{novice.type}. </Type>
				<Text>{novice.text}</Text>
			</TierBlock>
		}

		{(tier === 2 || tier === 3) &&
			<TierBlock type={"adept"}>
				<Type>{adept.type}. </Type>
				<Text>{adept.text}</Text>
			</TierBlock>
		}

		{tier === 3 &&
			<TierBlock type={"master"}>
				<Type>{master.type}. </Type>
				<Text>{master.text}</Text>
			</TierBlock>
		}
	</Card>
);
