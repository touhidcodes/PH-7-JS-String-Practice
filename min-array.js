function maxArray(array) {
	let largest = array[0];
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (element < largest) {
			largest = element;
		}
	}
	return largest;
}

const array = [167, 190, 120, 165, 137, 265];

const tallest = maxArray(array);
console.log("Tallest is: ", tallest);
