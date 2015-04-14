var languages = {
	  javascript: /\b(function|return|var|break|if)\b/g /* ... etc */
	  javascript: /\b\W*/
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

    //   var foo = pre.getAttribute("fooness");

       //If lang is a language

       if (languages.hasOwnProperty(lang))

	       //Highlight that code

	       highlightCode(pre, languages[lang]);

  }

}

