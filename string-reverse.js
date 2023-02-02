const myString = "I am a good boy.";

function stringReverse(text) {
	let reversed = "";
	for (let i = text.length - 1; i >= 0; i--) {
		const element = text[i];
		reversed = reversed + element;
	}
	return reversed;
}

const result = stringReverse(myString);
console.log(result);
