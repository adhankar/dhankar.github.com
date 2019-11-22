function insertLink(type, rel, href) {
	var link = document.createElement("link");
	link.setAttribute("rel", rel);
	link.type = type;
	link.href = href;
	document.head.appendChild(link);		
}

function insertStylesheet(href) {
	insertLink("text/css", "stylesheet", href);
}

function insertScript(src) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = src;
	document.head.appendChild(script);
}
// Base url
const base = "http://dhankar.ca";
// const base = "..";
// Append styles
insertStylesheet(base+"/src/style.css");
// Append favicon
insertLink("image/x-icon", "shortcut icon", "http://dhankar.ca/files/fav.png");
// Render Katex elements
window.onload = function() {
	// Set title according to first H1
	const h1s = document.getElementsByTagName("h1");
	if(h1s && 0 < h1s.length) {
		document.title = h1s[0].innerHTML;
	}
	// Render Latex
	const latexElements = document.getElementsByClassName("latex");
	for(var i = 0; i < latexElements.length; i++) {
		katex.render(latexElements[i].innerHTML, latexElements[i]);
	}
	// Append date to the bottom
	const possible = window.location.pathname.match(/\/\d+/g);
	if(possible && 0 < possible.length) {
		const date = new Date(parseInt(possible[0].replace(/\D/g,"")));
		const el = document.createElement("span");
		el.setAttribute("id","post-date");
		el.innerHTML = date.toDateString() + "<br/><a href='../'>&larr; Back</a>";
		document.getElementById("container").appendChild(el);
	}
}