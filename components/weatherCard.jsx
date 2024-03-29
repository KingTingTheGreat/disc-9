import styled from "styled-components";

const WeatherCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border: 1px solid black;
    margin: 1rem;
    width: 200px;
    border-radius: 10px;
`;

const WeatherCard = ({ weather }) => {
    return (
        <WeatherCardWrapper className="weather-card">
            <h2>{weather.datetime}</h2>
            <p>{weather.conditions}</p>
            <p>{weather.description}</p>
            <p>{weather.tempmin}°-{weather.tempmax}°</p>
        </WeatherCardWrapper>
    );
}

export default WeatherCard;