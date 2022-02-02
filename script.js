let words_list = [];
function add_word_to_list() {
	var inputted_word = document.getElementById("inputted_word").value;;
	words_list.push(inputted_word);
}
function search_word() {
	var searched_word = document.getElementById("searched_word").value;
	if (words_list.includes(searched_word) == true) {
		document.getElementById("respond").innerHTML = "The word '" + searched_word + "' exists in the dictionary";
	}
	else {
		document.getElementById("respond").innerHTML = "The word '" + searched_word + "' does not exist in the dictionary";
	}
}
function clear_fields() {
	document.getElementById("searched_word").value = "";
	document.getElementById("inputted_word").value = "";
}