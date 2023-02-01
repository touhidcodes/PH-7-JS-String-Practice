const lyrics =
	"tumi bondhu kala Pakhi ami jno ki, bosonto kale tomai bolte pari ni, sada sada kala kala rong jomese sada kala";

// Split
const parts = lyrics.split(" ");
console.log(parts);

const comma = lyrics.split(",");
console.log(comma);

const character = lyrics.split("");
console.log(character);

// Slice
const portions = lyrics.slice(10, 30);
console.log(portions);

Substring;
const portions2 = lyrics.substring(10, 30);
console.log(portions2);

const lines = [
	"tumi bondhu kala Pakhi ami jno ki",
	"bosonto kale tomai bolte pari ni",
	"sada sada kala kala",
	"rong jomese sada kala",
];

// Join
const joint = lines.join(" ");
console.log(joint);
