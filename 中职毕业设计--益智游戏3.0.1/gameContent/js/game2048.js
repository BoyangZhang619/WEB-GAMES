for(i = 0,dataArray = []; i < 5; dataArray[i] = [], i++,console.log(dataArray));//创建存储数值的二维数组dataArray
console.log(dataArray)
for (let i = 0; i < 4; i++) dataArray[4][i] = Math.floor(Math.random() * 20 % 4);
window.onload = function () {
	for (let i = 0; i < 16; i++)$("#box2048").append("<li></li>");
	for (let i = 0; i < 4; i += 2) document.querySelectorAll('li')[dataArray[4][i] + (dataArray[4][i + 1]) * 4].innerText = (Math.floor(Math.random() *10) % 2 + 1) * 2;
	// info = navigator.userAgent;
	// isPhone = /mobile/i.test(info);
	// if (isPhone) $("#MoveBottom2048").css("display", "block");
	// if (!isPhone) $("#MoveBottom2048").hide();
	pageChange()
	insteadColour()
}
const objectColour={
	"2":[198,202,185,.3],
	"4":[186,188,170,.3],
	"8":[173,164,155,.3],
	"16":[161,150,140,.3],
	"32":[148,136,125,.3],
	"64":[136,122,110,.3],
	"128":[123,108,95,.3],
	"256":[111,94,80,.3],
	"512":[98,80,65,.3],
	"1024":[86,66,50,.3],
	"":[86,66,50,.3]
}
function insteadColour() {
	for (let i = 0; i < 16; i++) dataArray[Math.floor(i / 4)][i % 4] = document.querySelectorAll('li')[i].innerText;
	for (let i = 0; i < 16; i++) {
		chosenLi = document.querySelectorAll('li')[i];
		for (let objectColourKey in objectColour)if(chosenLi.innerText===objectColourKey)for(let n=0; n<4; n++)chosenLi.style.backgroundColor='rgba('+objectColour[objectColourKey][0]+','+objectColour[objectColourKey][1]+','+objectColour[objectColourKey][2]+','+objectColour[objectColourKey][3]+')';
	}
}
window.onkeyup = function (kn) {
	console.log(dataArray);
	console.log(kn.code)
	switch (kn.code) {
		case "KeyW": case "ArrowUp": direction(0); break;
		case "KeyS":console.log(dataArray);  case "ArrowDown":
			console.log(dataArray); direction(1); break;
		case "KeyA": case "ArrowLeft": direction(2); break;
		case "KeyD": case "ArrowRight": direction(3); break;
	}
}

function direction(dir) {		//
	v = 0;
	isMove=false;
	switch (dir) {
		case 0://上
			for (let m = 0; m < 3; m++)
				for (let i = 0; i <= 3; i++)
					for (let j = 1; j <= 3; j++) {
						if (dataArray[j - 1][i] === '') {
							dataArray[j - 1][i] = dataArray[j][i];
							dataArray[j][i] = '';
						}
						if (dataArray[j - 1][i] === dataArray[j][i] && dataArray[j][i] !== '') {
							dataArray[j - 1][i] *= 2;
							dataArray[j][i] = '';
							isMove=!isMove;
						}
						if(j===3&&!isMove&&dataArray[1][i]===dataArray[2][i]){
							dataArray[2][i] = '';
							dataArray[1][i] *= 2;
						}
					}
			break;
		case 1://下
			for (m = 0; m < 3; m++)
				for (i = 0; i <= 3; i++)
					for (j = 0; j < 3; j++) {
						if (dataArray[j + 1][i] === '') {
							dataArray[j + 1][i] = dataArray[j][i];
							dataArray[j][i] = '';
						}
						// if(dataArray[j][i]===dataArray[j-1][i]&&dataArray[j][i] !== '')
						if (dataArray[j][i] === dataArray[j + 1][i] && dataArray[j][i] !== '') {
						console.log((dataArray))
							dataArray[j][i] = '';
							dataArray[j + 1][i] *= 2;
							isMove=!isMove;
						}
						if(j===2&&!isMove&&dataArray[1][i]===dataArray[2][i]){
							dataArray[1][i] = '';
							dataArray[2][i] *= 2;
						}
					}
			break;
		case 2://左
			for (m = 0; m < 3; m++)
				for (i = 0; i <= 3; i++)
					for (j = 1; j <= 3; j++) {
						if (dataArray[i][j - 1] === '') {
							dataArray[i][j - 1] = dataArray[i][j];
							dataArray[i][j] = '';
						}
						if (dataArray[i][j] === dataArray[i][j - 1] && dataArray[i][j] !== '') {
							dataArray[i][j - 1] *= 2;
							dataArray[i][j] = '';
							isMove=!isMove;
						}
						if(j===3&&!isMove&&dataArray[i][1]===dataArray[i][2]){
							dataArray[i][2] = '';
							dataArray[i][1] *= 2;
						}
					}
			break;
		case 3://右
			for (m = 0; m < 3; m++)
				for (i = 0; i <= 3; i++)
					for (j = 0; j < 3; j++) {
						if (dataArray[i][j + 1] === '') {
							dataArray[i][j + 1] = dataArray[i][j];
							dataArray[i][j] = ''
						}
						if (dataArray[i][j] === dataArray[i][j + 1] && dataArray[i][j] !== '') {
							dataArray[i][j] = '';
							dataArray[i][j + 1] *= 2;
							isMove=!isMove;
						}
						if(j===2&&!isMove&&dataArray[i][1]===dataArray[i][2]){
							dataArray[i][1] = '';
							dataArray[i][2] *= 2;
						}
					}
			break;
	}
	for (i = 0, g = 0; i < 16; i++)
		if (dataArray[Math.floor(i / 4)][i % 4] === '') g++;
	h = g;
	console.log(h)
	if (g > 0) {
		for (i = 0; i < 16; i++) {
			if (dataArray[Math.floor(i / 4)][i % 4] === '') {
				g--;
			}
			if (dataArray[Math.floor(i / 4)][i % 4] === '' && g === Math.floor(h / 2)) {
				dataArray[Math.floor(i / 4)][i % 4] = (Math.floor(Math.random() * 10) % 2 + 1) * 2;
				break;
			}
		}
	}
	for(i=0;i<4;i++)for(j=0;j<4;j++)if(dataArray[i][j]=="0")dataArray[i][j]=""
	for (i = 0; i < 16; i++) document.querySelectorAll('li')[i].innerText = dataArray[Math.floor(i / 4)][i % 4];
	v = 1;
	insteadColour()
	text()
	showDivContentStep++;
	if (!showDivOpenBoolean) showDivOpenBoolean = true;
	isMove=false
}

function text() {
	var l = 0;
	for (i = 0; i < 16; i++) {
		if (document.querySelectorAll('li')[i].innerText === '') break;
		else if (i === 15) {
			for (j = 1; j < 4; j++) {
				for (n = 0; n < 4; n++) {
					if (dataArray[n][j] === dataArray[n][j - 1]) {
						l = 1;
						break;
					} else if (n === 3 && j === 3) var p = 1;
					if (dataArray[j][n] === dataArray[j - 1][n]) {
						l = 1;
						break;
					} else if (n === 3 && j === 3 && p) p += 1;
				}
				if (l) break;
			}
			if (p === 2 && v) {
				clearInterval(showDivOpen);
				alert('you fail!');
			}
		}
	}
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
		if (showDivContentSec === 60) {
			showDivContentSec = 0;
			showDivContentMin++;
		}
	}

}, 1000)
// function pause(){
// 	showDivOpenBoolean=!showDivOpenBoolean;
// }
