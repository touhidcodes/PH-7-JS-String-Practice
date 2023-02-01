const lyrics =
	"tumi bondhu kala Pakhi ami jno ki, bosonto kale tomai bolte pari ni, sada sada kala kala rong jomese sada kala";

// Includes
const doesExist = "pakhi";
// const searchString = lyrics.toLowerCase().includes("pakhi");
const searchString = doesExist.toLowerCase();

const stringLyrics = lyrics.toLowerCase().includes(searchString);
console.log(stringLyrics);

// Index OF
const index = lyrics.indexOf("kala");
console.log(index);

if (lyrics.indexOf("sadas") !== -1) {
	console.log("Exist");
} else {
	console.log("Not Exist");
}

// Starts With
console.log(lyrics.startsWith("tumi"));

// Ends With
const file = "my-pic.png";
console.log(file.endsWith("png"));
