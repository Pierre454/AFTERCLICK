/* Code de la pop-up */

var daFunction;

function appendPopup(text)
{
	document.getElementsByTagName('BODY')[0].innerHTML += '<div id="popupContainer"><div id="popup"><h3>'
		+ text
		+ '</h3><button id="rButt" class="main" onclick="preClosePopup();">OK</button></div></div>';
}

function appendPopup2(text, daNewFunction)
{
	document.getElementsByTagName('BODY')[0].innerHTML += '<div id="popupContainer"><div id="popup"><h3>'
		+ text
		+ '</h3><button id="lButt" onclick="preClosePopup();">Annuler</button><button id="rButt" class="main" onclick="execFunc();">OK</button></div></div>';
	daFunction = daNewFunction;
}

function execFunc()
{
	daFunction();
	preClosePopup();
}

function preClosePopup()
{
	document.getElementById('popupContainer').style.animationName = "uncolorPpBck";
	document.getElementById('popupContainer').style.backgroundColor = "rgba(255, 255, 255, 0.0)";
	document.getElementById('popup').style.animationName = "upPp";
	document.getElementById('popup').style.top = "-100%";

	setTimeout(closePopup, 500);
}

function closePopup()
{
	let elem = document.getElementById('popupContainer');
	elem.parentNode.removeChild(elem);

	console.log('pop-up closed');
}
