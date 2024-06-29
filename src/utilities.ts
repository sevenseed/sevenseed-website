function randomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// > https://gist.github.com/bendc/76c48ce53299e6078a76
export function getRandomColor() {
	const h = randomInt(0, 360);
	const s = randomInt(42, 98);
	const l = randomInt(60, 70);

	return `hsl(${h},${s}%,${l}%)`;
}
