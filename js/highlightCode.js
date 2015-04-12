function highlightCode(node, keywords) {
// Create a new variable to hold the text of the node recieved
  var text = node.textContent;
  node.textContent = ""; // Clear the node

  //create two new variables. Match compares and pos holds the position
  var match, pos = 0;
//loops through all possible matches
  while (match = keywords.exec(text)) {
	  //Create new variable and add the text you want of the position
    var before = text.slice(pos, match.index);
    //create new node with the variable that holds the text 'before'
    node.appendChild(document.createTextNode(before));
    //create a new variable that will be bolded
    var strong = document.createElement("strong");
    //new element now will create a bolded version of the matched element
    strong.appendChild(document.createTextNode(match[0]));
    //Adds to the new element into the node
    node.appendChild(strong);
    //sets the position to the last index of keywords
    pos = keywords.lastIndex;
  }
  //get new variable to create a new spot after the current position
  var after = text.slice(pos);
  //add the bolded text element into the node
  node.appendChild(document.createTextNode(after));
}

