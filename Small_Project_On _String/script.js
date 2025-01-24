const inputText = document.getElementById("inputText");
const resultText = document.getElementById("resultText");

function displayResult(output) {
  resultText.textContent = output;
}

function toUpperCase() {
  displayResult(inputText.value.toUpperCase());
}

function toLowerCase() {
  displayResult(inputText.value.toLowerCase());
}

function toCamelCase() {
  const words = inputText.value.toLowerCase().split(/\s+/);
  const camelCase = words
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
  displayResult(camelCase);
}

function reverseWords() {
  const reversed = inputText.value.split(/\s+/).reverse().join(" ");
  displayResult(reversed);
}

function countVowels() {
  const count = (inputText.value.match(/[aeiouAEIOU]/g) || []).length;
  displayResult(`Vowel count: ${count}`);
}

function countConsonants() {
  const count = (inputText.value.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length;
  displayResult(`Consonant count: ${count}`);
}

function countWords() {
  const count = inputText.value.trim().split(/\s+/).length;
  displayResult(`Word count: ${count}`);
}

function mostFrequentCharacter() {
  const freq = {};
  for (const char of inputText.value.replace(/\s/g, "")) {
    freq[char] = (freq[char] || 0) + 1;
  }
  const maxChar = Object.keys(freq).reduce((a, b) =>
    freq[a] > freq[b] ? a : b
  );
  displayResult(`Most frequent character: '${maxChar}' (appeared ${freq[maxChar]} times)`);
}

function checkAnagram() {
  const text = inputText.value.split("\n");
  if (text.length < 2) {
    displayResult("Please provide two lines for anagram check.");
    return;
  }
  const [str1, str2] = text.map((s) => s.replace(/\s+/g, "").toLowerCase());
  const isAnagram =
    str1.split("").sort().join("") === str2.split("").sort().join("");
  displayResult(`The lines are ${isAnagram ? "" : "not "}anagrams.`);
}

function longestWord() {
  const words = inputText.value.match(/\w+/g) || [];
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");
  displayResult(`Longest word: ${longest}`);
}
