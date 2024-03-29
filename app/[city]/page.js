"use client";
import { useParams } from "next/navigation";
import useSWR from "swr";
import WeatherCard from "@/components/weatherCard";
import styled from "styled-components";

const CityName = styled.h1`
	text-align: center;
	text-transform: capitalize;
`;

const WeatherCardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80%;
	justify-content: center;
`;

const WeatherContentWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`;

const CityPage = () => {
	const params = useParams();

	const res = useSWR(`/api/getWeatherData?city=${params.city}`, (url) => fetch(url).then((res) => res.json()));
	if (res.error) return <div>failed to load</div>;

	if (res.isLoading) return <div>loading</div>;

	const days = res.data.days;

	return (
		<WeatherContentWrapper>
			<CityName>{params.city}</CityName>
			<WeatherCardsContainer>
				{days.map((weather, i) => (
					<WeatherCard key={i} weather={weather} />
				))}
			</WeatherCardsContainer>
		</WeatherContentWrapper>
	);
};

export default CityPage;
