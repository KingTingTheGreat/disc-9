import "./globals.css";

export const metadata = {
	title: "CS391 Discussion 9",
	description: "Find the weather in a city",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
