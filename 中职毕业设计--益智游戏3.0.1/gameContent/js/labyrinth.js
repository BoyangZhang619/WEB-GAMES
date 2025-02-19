var boxWH =39;

 var spt = new Array(2);
 var ept = new Array(2);
 var cpt = new Array(2);
 var entirePoint= [619];
 var wpt;
 var mazearr = ['.'];//存储当前路径，0-4顺时针
 var mazewt = 1;
 var num1 = 1;
 var funcmazes;
 var gobool, gobool1;
initialCreate(boxWH)
// document.querySelector("#box").style.height = boxWH * 10 + "px";
// document.querySelector("#box").style.width = boxWH * 10 + "px";
function initialCreate(num) {
	 spt = new Array(2);
	 ept = new Array(2);
	 mazearr = ['.']
	boxWH=num
	 functionUse=0;
 box = document.getElementById("box");
 box.innerHTML="";
for (i = 0; i < boxWH; i++) {
	 ul = document.createElement("ul");
	for (j = 0; j < boxWH; j++) {
		 li = document.createElement("li");
		ul.appendChild(li);
	}
	box.appendChild(ul);
	pageChange()
}
 boxli = document.querySelectorAll("li");
for (a = new Array(), i = 0; i < boxWH; a[i] = new Array(boxWH), i++);
start();
maze();
}
setInterval(function() {
	if (funcmazes) {
		window.clearTimeout(funcmaze);
		funcmazes = 0;
	}
});
function start() {
	// functionUse++;
	do {
		var randomNum = Math.floor(Math.random() * 10);
	} while (randomNum == 8 || randomNum == 9);
	randomNum %= 4;
	switch (randomNum) {
		case 0:
			spt = [1, Math.floor((boxWH - 1) / 2)];
			ept = [boxWH - 2, Math.floor((boxWH - 1) / 2)];
			break;
		case 1:
			spt = [Math.floor((boxWH - 1) / 2), boxWH - 2];
			ept = [Math.floor((boxWH - 1) / 2), 1];
			break;
		case 2:
			spt = [boxWH - 2, Math.floor((boxWH - 1) / 2)];
			ept = [1, Math.floor((boxWH - 1) / 2)];
			break;
		case 3:
			spt = [Math.floor((boxWH - 1) / 2), 1];
			ept = [Math.floor((boxWH - 1) / 2), boxWH - 2];
			break;
	}
	cpt = spt;
	a[spt[0]][spt[1]] = 1;
}

function maze() {
	for(g=0;g<=100;g++){
	functionUse++;
	if (mazearr.length != 1) {
		do {
			var randomNum = Math.floor(Math.random() * 10);
		} while (randomNum == 8 || randomNum == 9);
		randomNum %= 4;
		switch (randomNum) {//自动构建路径
			case 0:
				if (cpt[0] > 2 && !a[cpt[0] - 1][cpt[1]] && !a[cpt[0] - 2][cpt[1]] && !a[cpt[0] - 3][cpt[1]]) {
					for (i = 1; i <= 2; i++) a[cpt[0] - i][cpt[1]] = 1;
					mazearr.push(randomNum);
					cpt[0] -= 2;
				}
				break;
			case 1:
				if (cpt[1] < boxWH - 3 && !a[cpt[0]][cpt[1] + 1] && !a[cpt[0]][cpt[1] + 2] && !a[cpt[0]][cpt[1] + 3]) {
					for (i = 1; i <= 2; i++) a[cpt[0]][cpt[1] + i] = 1;
					mazearr.push(randomNum);
					cpt[1] += 2;
				}
				break;
			case 2:
				if (cpt[0] < boxWH - 3 && !a[cpt[0] + 1][cpt[1]] && !a[cpt[0] + 2][cpt[1]] && !a[cpt[0] + 3][cpt[1]]) {
					for (i = 1; i <= 2; i++) a[cpt[0] + i][cpt[1]] = 1;
					mazearr.push(randomNum);
					cpt[0] += 2;
				}
				break;
			case 3:
				if (cpt[1] > 2 && !a[cpt[0]][cpt[1] - 1] && !a[cpt[0]][cpt[1] - 2] && !a[cpt[0]][cpt[1] - 3]) {
					for (i = 1; i <= 2; i++) a[cpt[0]][cpt[1] - i] = 1;
					mazearr.push(randomNum);
					cpt[1] -= 2;
				}
				break;
		}
	} else {
		do {
			var randomNum = Math.floor(Math.random() * 10);
		} while (randomNum == 8 || randomNum == 9);
		randomNum %= 4;
		switch (randomNum) {
			case 0:
				if (cpt[0] > 2) {
					for (i = 1; i <= 2; i++) a[cpt[0] - i][cpt[1]] = 1;
					mazearr.push(randomNum);
					cpt[0] -= 2;
				}
				break;
			case 1:
				if (cpt[1] < boxWH - 3) {
					for (i = 1; i <= 2; i++) a[cpt[0]][cpt[1] + i] = 1;
					mazearr.push(randomNum);
					cpt[1] += 2;
				}
				break;
			case 2:
				if (cpt[0] < boxWH - 3) {
					for (i = 1; i <= 2; i++) a[cpt[0] + i][cpt[1]] = 1;
					mazearr.push(randomNum);
					cpt[0] += 2;
				}
				break;
			case 3:
				if (cpt[1] > 2) {
					for (i = 1; i <= 2; i++) a[cpt[0]][cpt[1] - i] = 1;
					mazearr.push(randomNum);
					cpt[1] -= 2;
				}
				break;
		}
	}
	mazewt=1;
	if (cpt[0] > 2) mazewt *= 2;//通过不同质数的相乘进行
	if (cpt[1] < boxWH - 3) mazewt *= 3;
	if (cpt[0] < boxWH - 3) mazewt *= 5;
	if (cpt[1] > 2) mazewt *= 7;
	//console.log(cpt + '|' + mazewt);
	if (mazewt != 1) {
		switch (num1) {
			case 1:
				if (mazewt % 2 == 0) {
					console.log(cpt+"|"+mazearr)
					if (a[cpt[0] - 2][cpt[1]] == 1 || a[cpt[0] - 1][cpt[1]] == 1) {} else break;
				}
			case 2:
				if (mazewt % 3 == 0) {
					console.log(cpt+"|"+mazearr)
					if (a[cpt[0]][[cpt[1]+2]] == 1 || a[cpt[0]][[cpt[1]+1]] == 1) {} else break;
				}
			case 3:
				if (mazewt % 5 == 0) {
					console.log(cpt+"|"+mazearr)
					if (a[cpt[0] + 2][cpt[1]] == 1 || a[cpt[0] + 1][cpt[1]] == 1) {} else break;
				}
			case 4:
				if (mazewt % 7 == 0) {
					console.log(cpt+"|"+mazearr)
					if (a[cpt[0]][cpt[1] - 2] == 1 || a[cpt[0]][cpt[1] - 1] == 1) {} else break;
				}
			case 5:
				if(cpt[0]==ept[0]&&cpt[1]==ept[1]&&entirePoint[0]===619){
					for(i=0;i<mazearr.length;i++)entirePoint[i]=mazearr[i];
					entirePoint=entirePoint.join("");
					console.log("cpt:"+cpt+"|ept:"+ept+"|entirePoint:"+entirePoint);
					console.log(entirePoint);
				}
				console.log("finish" + '|' + mazearr+"|"+cpt[0]+","+cpt[1]);
				if (mazearr.length == 0) {
					a[spt[0]][spt[1]] = 2;
					a[ept[0]][ept[1]] = 2;
					for (m = 0; m < boxWH; m++){
						for (n = 0; n < boxWH; n++){
							if (a[m][n]==1) boxli[boxWH * m + n].style.backgroundColor = "rgb(240, 240, 240)";
						}
					}
					for (i = 0; i < a[0].length - 1; i++)
						for (j = 0; j < a[0].length - 1; j++){
							if (a[i][j] == 2) boxli[boxWH * i + j].style.backgroundColor = "peachpuff";
							//console.log(boxli);
						}
					document.querySelector("#wait").style.display="none"
					funcmazes=1;
					gobool = 1;
					return 0;
				}
				wpt = mazearr.pop();
				switch (wpt) {
					case 0:cpt[0] += 2;break;
					case 1:cpt[1] -= 2;break;
					case 2:cpt[0] -= 2;break;
					case 3:cpt[1] += 2;break;
				}
				break;
		}
		mazewt = 1;
	}
}
	funcmaze = setTimeout(maze);
}
window.onkeydown = function(kn) {
	switch (kn.keyCode) {
		case 87:case 38:go(0);break;
		case 65:case 37:go(2);break;
		case 83:case 40:go(1);break;
		case 68:case 39:go(3);break;
	}
}

function go(num) {
	// functionUse++;
	//console.log(num);
	gobool1 = 1;
	if (gobool){
		  if(!showDivOpenBoolean)showDivOpenBoolean=true;
	showDivContentStep++;
	 switch (num) {
		case 0:
			if (a[cpt[0] - 1][cpt[1]]) {
				cpt[0]--;
				a[cpt[0]][cpt[1]] = 3;
				a[cpt[0] + 1][cpt[1]] = 4;
			}
			break;
		case 1:
			if (a[cpt[0] + 1][cpt[1]]) {
				cpt[0]++;
				a[cpt[0]][cpt[1]] = 3;
				a[cpt[0] - 1][cpt[1]] = 4;
			}
			break;
		case 2:
			if (a[cpt[0]][cpt[1] - 1]) {
				cpt[1]--;
				a[cpt[0]][cpt[1]] = 3;
				a[cpt[0]][cpt[1] + 1] = 4;
			}
			break;
		case 3:
			if (a[cpt[0]][cpt[1] + 1]) {
				cpt[1]++;
				a[cpt[0]][cpt[1]] = 3;
				a[cpt[0]][cpt[1] - 1] = 4;
			}
			break;
	}

	if (cpt[0] == ept[0] && cpt[1] == ept[1] && gobool){
		 showDivOpenBoolean=false
		 alert("你已通关并花了" + showDivContentMin + "分钟|" + showDivContentSec + "秒以及" + showDivContentStep + "步!")
		}
}
	for (i = cpt[0] - 1; i <= cpt[0] + 1; i++)
		for (j = cpt[1] - 1; j <= cpt[1] + 1; j++) {
			if (a[i][j] == 3) boxli[boxWH * i + j].style.backgroundColor = "rgba(86,66,50, 0.75)";
			if (a[i][j] == 4) boxli[boxWH * i + j].style.backgroundColor = "rgba(86,66,50, 0.175)";
		}
}
var showDiv=$('.showDiv');
var showDivOpenBoolean=false;
var showDivContentSec=0;
var showDivContentMin=0;
var showDivContentStep=0;
// var showDivContentList=[];
// for(i=0;i<2;i++)showDivContentList[i]=showDiv.eq(i).text();
showDivOpen=setInterval(function(){
if(showDivOpenBoolean){
	showDiv.eq(0).text(showDivContentMin+"min(s)|"+showDivContentSec+"sec(s)");
	showDiv.eq(1).text(showDivContentStep+"step(s)");
	showDivContentSec++;
	showDivContentSec.toFixed(1)
	if(showDivContentSec==60){
		showDivContentSec=0;
		showDivContentMin++;
	}
}
},1000)
window.addEventListener('resize',pageChange)
function pageChange() {//修改css样式
	// functionUse++;
    if (parseInt($("#main>main").css("width")) < parseInt($("#main>main").css("height"))) {
        var str=($(window).width()) * (.7/boxWH)+"px";
		//console.log(str);
        $("#box ul>li").css({
            "height": str,
            "width": str,
        })
        $("#box ul").css({
			"height": str,
        })
    } else {
        $("#box ul>li").css({
            "height": "calc("+(100/boxWH)+"vh - "+(7.5/boxWH)+"vw)",
            "width": "calc("+(100/boxWH)+"vh - "+(7.5/boxWH)+"vw)",
        })
        $("#box ul").css({
            "height": "calc("+(100/boxWH)+"vh - "+(7.5/boxWH)+"vw)",
        })
    }
}
function boxWH() {
	initialCreate(document.querySelector("#boxWHnum").value);
}