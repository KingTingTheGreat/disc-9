import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

// get our API key from the environment (.env.local)
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

// handle GET requests
export async function GET(request) {
	const city = request.nextUrl.searchParams.get("city");

	// handle missing city
	if (!city) {
		return NextResponse.json({ error: "No city provided" }, { status: 400 });
	}

	// fetch weather data
	const res = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
        ${city}/next7days?unitGroup=us&include=days%2Ccurrent%2Cevents&key=${WEATHER_API_KEY}&contentType=json`
	);

	// handle errors
	if (res.status !== 200) {
		return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
	}

	const data = await res.json();

	return NextResponse.json(data);
}
