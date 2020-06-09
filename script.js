// JavaScript

// Globala variabler
var resElem;	// Referens till div-elementet för resultat
var scandElems;	// Array med referenser till länder i Skandinavien

// Initiering då webbsidan är inläst
function init() {
	var i;				// Loopvariabel
	var countriesElem;	// Referens till elementet med listan av länder
	var imgElems;		// Array med referenser till alla img-taggar
	resElem = document.getElementById("result");
	countriesElem = document.getElementById("countries");
	imgElems = countriesElem.getElementsByTagName("img");
	scandElems = countriesElem.getElementsByClassName("scandinavia");
	for (i=0; i<imgElems.length; i++) {
		addListener(imgElems[i],"click",clickFlag);
	}
	addListener(document.getElementById("scandBtn"),"click",listScandinavia);
} // End init
addListener(window,"load",init); // Se till att init aktiveras då sidan är inladdad

// Skriv namn på länderna som tillhör Skandinavien
function listScandinavia() {
	var i;			// Loopvariabel
	var country;	// Namn på ett land
	resElem.innerHTML = "";
	for (i=0; i<scandElems.length; i++) {
		country = scandElems[i].getElementsByTagName("span")[0].innerHTML;
		resElem.innerHTML += "<p>" + country + "</p>";
	}
} // End listScandinavia

// Användaren har klickat på en flagga. Skriv ut landets och huvudstadens namn.
function clickFlag() {
	var liElem;		// Referens till li-elementet för landet
	var country;	// Namn på landet
	var capital;	// Namn på huvudstaden
	liElem = this.parentNode;
	country = liElem.getElementsByTagName("span")[0].innerHTML;
	capital = liElem.getAttribute("data-capital");
	resElem.innerHTML = "<p>" + country + " har huvudstaden " + capital + ".</p>";
	if (liElem.className == "scandinavia") {
		resElem.innerHTML += "<p>Landet ingår i Skandinavien.</p>"
	}
} // End clickFlag
