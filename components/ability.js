import React from 'react';
import styled from 'styled-components';

const Name = styled.span`
	font-family: 'IM Fell Great Primer SC', serif;
	font-size: 1.5rem;

	&::after {
		border-bottom: 1px solid #333;
		width: 100vw;
		height: 1px;
		position: absolute;
		display: block;
	}
`;

const Source = styled.span`
	font-size: .75rem;
	padding: 0 .5rem;
`;

const Effect = styled.div``;

const Requirement = styled.div`
	font-style: italic;
`;

const TierBlock = styled.li`
	list-style: none;
	padding-left: 2rem;
	border-bottom: 1px solid #666;
	border-width: 90%;
	padding-top: .5rem;
	padding-bottom: .75rem;

	&::before {
		margin: 0 .5rem 0 -1.5rem;
		${({type}) => type === "novice" && "content:'･'; font-size: 1.4rem; line-height: 1; margin-left: -1.375rem; padding-right: .125rem;"}
		${({type}) => type === "adept" && "content: '･･'; font-size: 1.4rem; letter-spacing: -3px; margin-left: -1.625rem;	line-height: 1;"}
		${({type}) => type === "master" && "content: '𐬽';"}
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
	<div className={className}>
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

	</div>
);
