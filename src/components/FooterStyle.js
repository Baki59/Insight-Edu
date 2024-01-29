// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
	//padding: 5% 2.5%;
	background: #313131;
	// position: absolute;
	bottom: 0;
	width: 100%;

	@media (max-width: 1000px) {
		// padding: 70px 30px;
	}
`;

export const Logo = styled.div`

    //position: relative;
    //padding: 1% 1%;
    //left: 10%;
    top: 0;
    width: 20%;
    border-bottom-right-radius: 80px 80px;
    background: #d8d8d8;


`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: green;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 24px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
`;
