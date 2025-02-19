for (i = 0, a = new Array(); i < 5; a[i] = new Array(), i++);
for (i = 1; i <= 4; i++) a[4][i - 1] = Math.floor(Math.random() * 20 % 4);
window.onload = function () {
	for (i = 0; i < 16; i++) {
		$("#box2048").append("<li></li>");
		console.log("a")
		// if (i % 4 == 0 && i != 0) $("#box2048").append("<br/>");
	}
	for (i = 0; i < 4; i += 2) document.querySelectorAll('li')[a[4][i] + (a[4][i + 1]) * 4].innerText = (Math.floor(
		Math.random() *
		10) % 2 + 1) * 2;
	// info = navigator.userAgent;
	// isphone = /mobile/i.test(info);
	// if (isphone) $("#MoveBottom2048").css("display", "block");
	// if (!isphone) $("#MoveBottom2048").hide();
	pageChange()
	insteadColour()
}
function insteadColour() {
	for (i = 0; i < 16; i++) a[Math.floor(i / 4)][i % 4] = document.querySelectorAll('li')[i].innerText;
	for (i = 0; i < 16; i++) {
		k = document.querySelectorAll('li')[i];
		switch (k.innerText) {
			case '2': k.style.backgroundColor = 'rgba(198,202,185,.3)'; break;
			case '4': k.style.backgroundColor = 'rgba(186,188,170,.3)'; break;
			case '8': k.style.backgroundColor = 'rgba(173,164,155,.3)'; break;
			case '16': k.style.backgroundColor = 'rgba(161,150,140,.3)'; break;
			case '32': k.style.backgroundColor = 'rgba(148,136,125,.3)'; break;
			case '64': k.style.backgroundColor = 'rgba(136,122,110,.3)'; break;
			case '128': k.style.backgroundColor = 'rgba(123,108,95,.3)'; break;
			case '256': k.style.backgroundColor = 'rgba(111,94,80,.3)'; break;
			case '512': k.style.backgroundColor = 'rgba(98,80,65,.3)'; break;
			case '1024': k.style.backgroundColor = 'rgba(86,66,50,.3)'; break;
			case '': k.style.backgroundColor = ''; break;
		}
	}
}
window.onkeyup = function (kn) {
	switch (kn.keyCode) {
		case 87: case 38: d(0); break;
		case 83: case 40: d(1); break;
		case 65: case 37: d(2); break;
		case 68: case 39: d(3); break;
	}
}
function text() {
	var l = 0;
	for (i = 0; i < 16; i++) {
		if (document.querySelectorAll('li')[i].innerText == '') break;
		else if (i == 15) {
			for (j = 1; j < 4; j++) {
				for (n = 0; n < 4; n++) {
					if (a[n][j] == a[n][j - 1]) {
						l = 1;
						break;
					} else if (n == 3 && j == 3) var p = 1;
					if (a[j][n] == a[j - 1][n]) {
						l = 1;
						break;
					} else if (n == 3 && j == 3 && p) p += 1;
				}
				if (l) break;
			}
			if (p == 2 && v) {
				clearInterval(showDivOpen);
				alert('you\' fail!');
			}
		}
	}
}

function d(e) {		//2024
	v = 0;
	switch (e) {
		case 0:
			for (m = 0; m < 3; m++)
				for (i = 0; i <= 3; i++)
					for (j = 1; j <= 3; j++) {
						if (a[j - 1][i] == a[j][i] && a[j][i] != '') {
							a[j - 1][i] *= 2;
							a[j][i] = '';
						}
						if (a[j - 1][i] == '') {
							a[j - 1][i] = a[j][i];
							a[j][i] = '';
						}
					}
			break;
		case 1:
			for (m = 0; m < 3; m++)
				for (i = 0; i <= 3; i++)
					for (j = 0; j < 3; j++) {
						if (a[j][i] == a[j + 1][i] && a[j][i] != '') {
							a[j][i] = '';
							a[j + 1][i] *= 2;
						}
						if (a[j + 1][i] == '') {
							a[j + 1][i] = a[j][i];
							a[j][i] = '';
						}
					}
			break;
		case 2:
			for (m = 0; m < 3; m++)
				for (i = 0; i <= 3; i++)
					for (j = 1; j <= 3; j++) {
						if (a[i][j] == a[i][j - 1] && a[i][j] != '') {
							a[i][j - 1] *= 2;
							a[i][j] = '';
						}
						if (a[i][j - 1] === '') {
							a[i][j - 1] = a[i][j];
							a[i][j] = '';
						}
					}
			break;
		case 3:
			for (m = 0; m < 3; m++)
				for (i = 0; i <= 3; i++)
					for (j = 0; j < 3; j++) {
						if (a[i][j] == a[i][j + 1] && a[i][j] != '') {
							a[i][j] = '';
							a[i][j + 1] *= 2;
						}
						if (a[i][j + 1] == '') {
							a[i][j + 1] = a[i][j];
							a[i][j] = ''
						}
					}
			break;
	}
	for (i = 0, g = 0; i < 16; i++)
		if (a[Math.floor(i / 4)][i % 4] == '') g++;
	h = g;
	if (g > 0) {
		for (i = 0; i < 16; i++) {
			if (a[Math.floor(i / 4)][i % 4] == '') {
				g--;
			}
			if (a[Math.floor(i / 4)][i % 4] == '' && g == Math.floor(h / 2)) {
				a[Math.floor(i / 4)][i % 4] = (Math.floor(Math.random() * 10) % 2 + 1) * 2;
				break;
			}
		}
	}
	for (i = 0; i < 16; i++) document.querySelectorAll('li')[i].innerText = a[Math.floor(i / 4)][i % 4];
	v = 1;
	insteadColour()
	text()
	showDivContentStep++;
	if (!showDivOpenBoolean) showDivOpenBoolean = true;
}
window.addEventListener('resize', pageChange)
function pageChange() {//修改css样式
	if (parseInt($("#main>main").css("width")) < parseInt($("#main>main").css("height"))) {
		var str = ($(window).width()) * .175 + "px";
		$("#box>ul>li").css({
			"width": str,
			"font-size": "8.875vw",
			"line-height": str
		})
	} else {
		$("#box>ul>li").css({
			"width": "calc(25vh - 1.875vw)",
			"font-size": "calc(12.5vh - .9375vw)",
			"line-height": "calc(25vh - 1.875vw)"
		})
	}
}
var showDiv = $('.showDiv');
var showDivOpenBoolean = false;
var showDivContentSec = 0;
var showDivContentMin = 0;
var showDivContentStep = 0;
// var showDivContentList=[];
// for(i=0;i<2;i++)showDivContentList[i]=showDiv.eq(i).text();
showDivOpen = setInterval(function () {
	if (showDivOpenBoolean) {
		showDiv.eq(0).text(showDivContentMin + "min(s)|" + showDivContentSec + "sec(s)");
		showDiv.eq(1).text(showDivContentStep + "step(s)");
		showDivContentSec++;
		showDivContentSec.toFixed(1)
		if (showDivContentSec == 60) {
			showDivContentSec = 0;
			showDivContentMin++;
		}
	}

}, 1000)
// function pause(){
// 	showDivOpenBoolean=!showDivOpenBoolean;
// }