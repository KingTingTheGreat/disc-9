"use client";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const HomeContentWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`;

export default function Home() {
	const [city, setCity] = useState("");
	return (
		<HomeContentWrapper>
			<h1>Find the weather in any city!</h1>
			<p>Enter a city name below to get the current weather.</p>
			<input type="text" value={city} placeholder="City name" onChange={(e) => setCity(e.target.value)} />
			<Link href={`/${city}`}>Get Weather</Link>
		</HomeContentWrapper>
	);
}
