// Write your unique function here! ✨
// You'll need to export it so the tests can run it.

export function unique<T>(...arr: T[][]) {
	const found = new Set();
	for (const items of arr) {
		for (const item of items) {
			found.add(item);
		}
	}

	return Array.from(found);
}
