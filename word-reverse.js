const myString = "I am a good boy";

function wordReverse(word) {
	let reversed = [];
	const words = word.split(" ");
	for (let i = words.length - 1; i >= 0; i--) {
		const element = words[i];
		reversed.push(element);
	}
	const reversedWord = reversed.join(" ");
	return reversedWord;
}

const result = wordReverse(myString);
console.log(result);
