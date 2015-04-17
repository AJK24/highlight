var languages = {
	  javascript: /\b(function|return|var|break|if)\b/g /* ... etc */,
	  java: /\b(function|int|string|char|break|if|else|while|for)\b/g 

	 	  // javascript: /\b\w*/
};


function highlightAllCode() {
	//Gets what is in 'pre' and stores it in 'pres'
  var pres = document.body.getElementsByTagName("pre");
   // loops for the length of pres
  for (var i = 0; i < pres.length; i++) {
         // new pre variable is set for the current character in pres
       var pre = pres[i];
       //sets new variable lang to the attribute 'data-language' in pre

       var lang = pre.getAttribute("data-language");
     //  var jlang = pre.getAttribute("java");

       var name = pre.getAttribute("class-proof");

    //   var foo = pre.getAttribute("fooness");

       //If lang is a language

       if (languages.hasOwnProperty(lang))

	       //Highlight that code

	       highlightCode(pre, languages[lang]);

  }

}

