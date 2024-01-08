// Write your describeLandmark function here! ✨
// You'll need to export it so the tests can run it.

export interface BaseLandmark {
	name: string;
}

export interface Fort extends BaseLandmark {
	type: "fort";
}

export interface Lake extends BaseLandmark {
	type: "lake";
	miles: number;
}

export interface Lighthouse extends BaseLandmark {
	type: "lighthouse";
	lit: number;
	height: number;
}

export interface Park extends BaseLandmark {
	acres: number;
	type: "park";
}

export interface River extends BaseLandmark {
	depth: number;
	length: number;
	type: "river";
}

export interface Waterfall extends BaseLandmark {
	height: number;
	type: "waterfall";
}

export interface Mountain extends BaseLandmark {
	height: number;
	type: "mountain";
}
export type Landmark =
	| Fort
	| Lake
	| Lighthouse
	| Park
	| River
	| Waterfall
	| Mountain;

export function describeLandmark(landmark: Landmark) {
	const output: string[] = [
		`${landmark.name} is a ${landmark.type} in Upstate New York.`,
	];

	switch (landmark.type) {
		case "lake":
			output.push(`It covers ${landmark.miles} square miles of water.`);
			break;

		case "mountain":
			output.push(`Its peak is ${landmark.height} feet high.`);
			break;

		case "lighthouse":
			output.push(
				`It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`
			);
			break;

		case "park":
			output.push(`It covers ${landmark.acres} square acres.`);
			break;

		case "river":
			output.push(
				`It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`
			);
			break;

		case "waterfall":
			output.push(`It is ${landmark.height} feet high.`);
			break;
	}

	return output.join("\n");
}
