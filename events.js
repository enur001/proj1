// JavaScript Document

// "Cross-browser functions" enligt McPeak, J. & Wilton P. (2015) Beginning JavaScript, 5th ed., John Wiley & Sons, Inc., s.307ff

// Lägg till en händelsehanterare
// obj är elementet, type är händelsen och fn är funktionen
function addListener(obj, type, fn) {
	if (obj.addEventListener) obj.addEventListener(type,fn,false);
	else obj.attachEvent("on"+type,fn);
} // End addListener

// Ta bort en händelsehanterare
function removeListener(obj, type, fn) {
	if (obj.removeEventListener) obj.removeEventListener(type,fn,false);
	else obj.detachEvent("on"+type,fn);
} // End removeListener
