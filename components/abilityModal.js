import React, { useState } from "react";
import styled from "styled-components";
import { Ability } from "./ability";

import ability from '../public/ability.png'
import boon from '../public/boon.png'
import burden from '../public/burden.png'
import mysticalPower from '../public/mysticalPower.png'
import ritual from '../public/ritual.png'
import monster from '../public/monster2.png'

const Modal = styled.div`
	display: absolute;
	height: auto;
	box-shadow: var(--shadowBrown);
	padding: .5rem 1rem 1rem;
	margin-top: .5rem;
	display: ${({isVisible}) => isVisible
		? "block"
		: "none"
	};
	background: var(--white);
`;

const Type = styled.div`
		${({type}) => type === "Ability" &&
			`color: #417505;`
		}
		${({type}) => type === "Boon" &&
			`color: #417507;`
		}
		${({type}) => type === "Burden" &&
			`color: #961B1B;`
		}
		${({type}) => type === "Mystical Power" &&
			`color: #9013FE;`
		}
		${({type}) => type === "Ritual" &&
			`color: #024696;`
		}
		${({type}) => type === "Monstrous Trait" &&
			`color: #B40303;`
		}
`

const AbilityToggle = styled.div`
	cursor: pointer;
	user-select: none;
	position: relative;
	padding-left: 2rem;
	font-size: 1.25rem;

	&:before {
		position: absolute;
		content: "";
		height: 24px;
		width: 24px;
		left: 0;
		top: 3px;

		${({type}) => type === "Ability" &&
			`background: url(${ability}) no-repeat center;`
		}
		${({type}) => type === "Boon" &&
			`background: url(${boon}) no-repeat center;`
		}
		${({type}) => type === "Burden" &&
			`background: url(${burden}) no-repeat center;`
		}
		${({type}) => type === "Mystical Power" &&
			`background: url(${mysticalPower}) no-repeat center;`
		}
		${({type}) => type === "Ritual" &&
			`background: url(${ritual}) no-repeat center;`
		}
		${({type}) => type === "Monstrous Trait" &&
			`background: url(${monster}) no-repeat center;`
		}
		background-size: contain;
	}
`;

export const AbilityModal = ({ability, tier, type}) => {
	const [visible, setVisible] = useState(false)

	const handleToggle = () => {
		return setVisible(!visible)
	}

	return (
		<>
			<AbilityToggle onClick={handleToggle} type={ability.type}>{ability.name}</AbilityToggle>
			<Modal isVisible={visible}>
				<Type type={type}>{type}</Type>
				<Ability tier="master" {...ability} tier={tier}/>
			</Modal>
		</>
	)
}