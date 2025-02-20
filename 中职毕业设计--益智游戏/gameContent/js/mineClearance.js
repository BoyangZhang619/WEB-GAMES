
// showDivContentMin+"min(s)|"+showDivContentSec+"sec(s)" = 0;
window.onload=function(){
	start(30,75);
	value2=1;
	pageChange()
}
// function startnum(num1) {
// 	switch (num1) {
// 		case 1:
// 			inputs[0].value = Number(inputs[0].value) + 1;
// 			break;
// 		case 2:
// 			if (Number(inputs[0].value) > 9) inputs[0].value = Number(inputs[0].value) - 1;
// 			break;
// 		case 3:
// 			inputs[3].value = Number(inputs[3].value) + 1;
// 			break;
// 		case 4:
// 			if (Number(inputs[3].value) > 9) inputs[3].value = Number(inputs[3].value) - 1;
// 			break;
// 		case 5:
// 			if (Number(inputs[6].value) < Number(inputs[0].value) * Number(inputs[3].value) - 8) inputs[6].value = Number(inputs[
// 				6].value) + 1;
// 			break;
// 		case 6:
// 			if (Number(inputs[6].value) > 1) inputs[6].value = Number(inputs[6].value) - 1;
// 			break;
// 		case 7:
// 			if (hwlnum1 == hwlnum.length) hwlnum1 = 0;
// 			inputs[0].value = hwlnum[hwlnum1][0];
// 			inputs[3].value = hwlnum[hwlnum1][1];
// 			inputs[6].value = hwlnum[hwlnum1][2];
// 			hwlnum1++;
// 			break;
// 		case 8:
// 			inputs[0].value = "9";
// 			inputs[3].value = "9";
// 			inputs[6].value = "10";
// 			hwlnum1 = 1;
// 			break;
// 	}
// }
// setInterval(function() {
// 	if (Number(inputs[0].value) < 9) inputs[0].value = 9;
// 	if (Number(inputs[3].value) < 9) inputs[3].value = 9;
// 	if (Number(inputs[6].value) > (Number(inputs[0].value) * Number(inputs[3].value)) - 9) inputs[6].value = Number(
// 		inputs[0].value) * Number(inputs[3].value) - 9;
// 	if (inputs[6].value == "") inputs[6].value = "1";
// });
// setInterval(function() {
// 	if (timebool) showDivContentMin+"min(s)|"+showDivContentSec+"sec(s)"++;
// 	document.querySelector("#time").innerText = showDivContentMin+"min(s)|"+showDivContentSec+"sec(s)" + "秒"
// }, 1000);
setInterval(function() {
	if (ddd[0]) {
		for (i = 0; i < boxH * boxW; i++) {
			d = Math.floor(i / boxW);
			e = i % boxW;
			b[ddd[1]][ddd[2]] = 4;
			if (a[d][e] == 0 && b[d][e] == 4) {
				if (d > 0 && e > 0) {
					if (a[d - 1][e] != -1) b[d - 1][e] = 4;
					if (a[d - 1][e - 1] != -1) b[d - 1][e - 1] = 4;
					if (a[d][e - 1] != -1) b[d][e - 1] = 4;
				}
				if (d > 0 && e < boxW - 1) {
					if (a[d - 1][e] != -1) b[d - 1][e] = 4;
					if (a[d - 1][e + 1] != -1) b[d - 1][e + 1] = 4;
					if (a[d][e + 1] != -1) b[d][e + 1] = 4;
				}
				if (d < boxH - 1 && e > 0) {
					if (a[d + 1][e] != -1) b[d + 1][e] = 4;
					if (a[d + 1][e - 1] != -1) b[d + 1][e - 1] = 4;
					if (a[d][e - 1] != -1) b[d][e - 1] = 4;
				}
				if (d < boxH - 1 && e < boxW - 1) {
					if (a[d + 1][e] != -1) b[d + 1][e] = 4;
					if (a[d + 1][e + 1] != -1) b[d + 1][e + 1] = 4;
					if (a[d][e + 1] != -1) b[d][e + 1] = 4;
				}
			}
		}
		for (i = 0; i < boxH; i++)
			for (j = 0; j < boxW; j++)
				if (b[i][j] == 4) {
					if (a[i][j] > 0) lis[i * boxW + j].innerText = a[i][j];
					if (a[i][j] == 0) lis[i * boxW + j] = "";
					lis[i * boxW + j].style.backgroundColor = "rgba(248, 247, 240,.5)";
					lis[i * boxW + j].style.color = "rgba(86,66,50, 0.685)";
				}
	}
}, 20);

function start(num1,num2) {
  showDivOpenBoolean=showDivContentStep=showDivContentMin=showDivContentSec=0;
	console.log(num1+num2);
	value2 = 0;
ccc = false;
ddd = [false, -1, -1];
// inputs = document.querySelectorAll("input");
hwlnum = [
	[9, 9, 10],
	[18, 24, 72],
	[32, 32, 184],
	[50, 50, 378],
	[72, 100, 1000]
];
hwlnum1 = 1;
timebool = false;
	// input = document.querySelectorAll("input");
	// boxH = Number(input[0].value);
	// if (input[0].value = "") boxH = 9;
	// boxW = Number(input[3].value);
	// value1 = Number(input[6].value);
	// $("input").hide(1000);
	// $("#inputs").hide(1000);
	boxH=boxW=num1;
	value1=num2;//value1为炸弹数量
	// $("#box").css({
		// height: boxH * 30 + "px",
		// width: boxW * 30 + "px"
	// });

	for (a = new Array(), i = 0; i < boxH; a[i] = new Array(boxW), i++);
	for (b = new Array(), i = 0; i < boxH; i++) {
		b[i] = new Array();
		for (j = 0; j < boxW; j++) b[i][j] = 0;
	};
	box = document.getElementById("box");
	box.innerHTML="";
	for (i = 0; i < boxH; i++) {
		ul = document.createElement("ul");
		for (j = 0; j < boxW; j++) {
			li = document.createElement("li");
			li.setAttribute("id", i * boxW + j);
			li.setAttribute("ondblclick", "dbClickReact(this);");
			ul.appendChild(li);
		}
		box.appendChild(ul);
	}
	document.oncontextmenu = function(e) {
		return false;
	};
	lis = document.querySelectorAll("li");
	for (i = 0; i < lis.length; i++) {
		lis[i].addEventListener('mouseup', function(e) {
			showDivOpenBoolean=true;
			showDivContentStep=1;
			timebool = true;
			aaa = Math.floor((this.id) / boxW);
			bbb = (this.id) % boxW;
			if (e.button == 0 && b[aaa][bbb] == 0) {
				ddd[0] = true;
				ddd[1] = aaa;
				ddd[2] = bbb;
				if (!ccc) {
					// showDivContentMin+"min(s)|"+showDivContentSec+"sec(s)" = 0;
					ccc = true;
					a[aaa][bbb] = -2;
					if (aaa < boxH - 1) a[aaa + 1][bbb] = -2;
					if (aaa > 0) a[aaa - 1][bbb] = -2;
					if (bbb < boxW - 1) a[aaa][bbb + 1] = -2;
					if (bbb > 0) a[aaa][bbb - 1] = -2;
					if (aaa > 0 && bbb > 0) a[aaa - 1][bbb - 1] = -2;
					if (aaa > 0 && bbb < boxW - 1) a[aaa - 1][bbb + 1] = -2;
					if (aaa < boxH - 1 && bbb > 0) a[aaa + 1][bbb - 1] = -2;
					if (aaa < boxH - 1 && bbb < boxW - 1) a[aaa + 1][bbb + 1] = -2;
					putingLei();
				}
				this.style.backgroundColor = "rgba(248, 247, 240,.5)";
				this.style.color = "rgba(86,66,50, 0.685)";
				b[aaa][bbb] = 3;
				if (a[aaa][bbb] == -1) endMessage();
				if (b[aaa][bbb] == 3 && a[aaa][bbb] == -1) lis[this.id].innerHTML = "<pre>💣</pre>";
				if (b[aaa][bbb] == 3 && a[aaa][bbb] == 0) lis[this.id].innerText = "";
				if (b[aaa][bbb] == 3 && a[aaa][bbb] > 0 && a[aaa][bbb] < boxW) lis[this.id].innerText = a[aaa][bbb];
			}
			if (e.button == 2) {
				if (b[aaa][bbb] == 2) {
					b[aaa][bbb] = 0;
					lis[this.id].innerText = "";
				} else if (b[aaa][bbb] == 1) {
					b[aaa][bbb] = 2;
					lis[this.id].innerText = "？";
				} else if (b[aaa][bbb] == 0) {
					b[aaa][bbb] = 1;
					lis[this.id].innerText = "☥";
				}
			}
		})
	}
	pageChange();
	value2=1;
}

function endMessage() {
	alert("FAIL,你花了" + showDivContentMin+"分|"+showDivContentSec+ "秒,菜就多练!!!");
	for (n = 0; n < boxH; n++) {
		for (m = 0; m < boxW; m++) {
			lis[n * boxW + m].style.backgroundColor = "rgba(248, 247, 240,.5)";
			lis[n * boxW + m].style.color = "rgba(86,66,50, 0.685)";
			if (a[n][m] == -1) {
				b[n][m] = 3;
				lis[n * boxW + m].innerHTML = "<pre>💣</pre>";
			}
			if (a[n][m] == 0) {
				b[n][m] = 3;
				lis[n * boxW + m].innerText = "";
			}
			if (a[n][m] > 0 && a[n][m] < boxW) {
				b[n][m] = 3;
				lis[n * boxW + m].innerText = a[n][m];
			}
		}
	}
}
setInterval(function() {
	if (value2) {
		endnum = 0;
		endnum1 = 0;
		endnum2 = 0;
		for (i = 0; i < boxH; i++) {
			for (j = 0; j < boxW; j++) {
				if (b[i][j] == 1) endnum2++;
				if ((b[i][j] != 3 && b[i][j] != 4) && a[i][j] == -1) endnum++;
				if ((b[i][j] != 3 && b[i][j] != 4) && a[i][j] != -1) endnum1++;
			}
		}
		showDivContentRestLei = value1 - endnum2;
		endnum2 = 0;
		if (endnum == value1 && endnum1 == 0) {
			alert("WIN!!!你花了" + showDivContentMin+"分|"+showDivContentSec+ "秒,CONGRATULATION!!!");
			value2 = 0;
			// window.location.href = "";
		}
	}
}, 100);

function putingLei() {
	var num0 = value1;
	do {
		var num1 = Math.floor(Math.random() * boxH);
		var num2 = Math.floor(Math.random() * boxW);
		if ((a[num1][num2] != -1 && a[num1][num2] != -2)) {
			a[num1][num2] = -1;
			num0--;
		}
	} while (num0);
	figurenum();
}

function figurenum() {
	var Leinums = 0;
	for (i = 0; i < boxH; i++) {
		for (j = 0; j < boxW; j++) {
			if (a[i][j] != -1) {
				if ((i == 0 || i == boxH - 1 || j == 0 || j == boxW - 1)) {
							if (i == 0 && j != 0 && j != boxW - 1) {
								if (a[i][j - 1] == -1) Leinums++;
								if (a[i][j + 1] == -1) Leinums++;
								if (a[i + 1][j - 1] == -1) Leinums++;
								if (a[i + 1][j] == -1) Leinums++;
								if (a[i + 1][j + 1] == -1) Leinums++;
							}
							if (i == boxH - 1 && j != 0 && j != boxW - 1) {
								if (a[i][j - 1] == -1) Leinums++;
								if (a[i][j + 1] == -1) Leinums++;
								if (a[i - 1][j - 1] == -1) Leinums++;
								if (a[i - 1][j] == -1) Leinums++;
								if (a[i - 1][j + 1] == -1) Leinums++;
							}
							if (j == 0 && i != 0 && i != boxH - 1) {
								if (a[i - 1][j] == -1) Leinums++;
								if (a[i + 1][j] == -1) Leinums++;
								if (a[i - 1][j + 1] == -1) Leinums++;
								if (a[i][j + 1] == -1) Leinums++;
								if (a[i + 1][j + 1] == -1) Leinums++;
							}
							if (j == boxW - 1 && i != 0 && i != boxH - 1) {
								if (a[i - 1][j] == -1) Leinums++;
								if (a[i + 1][j] == -1) Leinums++;
								if (a[i - 1][j - 1] == -1) Leinums++;
								if (a[i][j - 1] == -1) Leinums++;
								if (a[i + 1][j - 1] == -1) Leinums++;
							}
							if (i == 0 && j == 0) {
								if (a[i + 1][j] == -1) Leinums++;
								if (a[i + 1][j + 1] == -1) Leinums++;
								if (a[i][j + 1] == -1) Leinums++;
							}
							if (i == 0 && j == boxW - 1) {
								if (a[i + 1][j] == -1) Leinums++;
								if (a[i + 1][j - 1] == -1) Leinums++;
								if (a[i][j - 1] == -1) Leinums++;
							}
							if (i == boxH - 1 && j == 0) {
								if (a[i - 1][j] == -1) Leinums++;
								if (a[i - 1][j + 1] == -1) Leinums++;
								if (a[i][j + 1] == -1) Leinums++;
							}
							if (i == boxH - 1 && j == boxW - 1) {
								if (a[i - 1][j] == -1) Leinums++;
								if (a[i - 1][j - 1] == -1) Leinums++;
								if (a[i][j - 1] == -1) Leinums++;
							}
					a[i][j] = Leinums;
					Leinums = 0;
				} else {
					for(m=-1;m<2;m++)for(n=-1;n<2;n++)if(a[i+m][j+n]==-1)Leinums++
					a[i][j] = Leinums;
					Leinums = 0;
				}
			}
		}
	}
}

function dbClickReact(thisa) {
	var livalue = Number(thisa.innerText);
	var flagnum = 0;
	var leinum = 0;
	var tId = Number(thisa.id);
	var tH = Math.floor(tId / boxW);
	var tW = tId % boxW;
	switch (1) {
		case 1:
			if (tH > 0)
				if (b[tH - 1][tW] == 1) {
					flagnum++;
					if (a[tH - 1][tW] == -1) leinum++;
				}
		case 2:
			if (tH < boxH - 1)
				if (b[tH + 1][tW] == 1) {
					flagnum++;
					if (a[tH + 1][tW] == -1) leinum++;
				}
		case 3:
			if (tW > 0)
				if (b[tH][tW - 1] == 1) {
					flagnum++;
					if (a[tH][tW - 1] == -1) leinum++;
				}
		case 4:
			if (tW < boxW - 1)
				if (b[tH][tW + 1] == 1) {
					flagnum++;
					if (a[tH][tW + 1] == -1) leinum++;
				}
		case 5:
			if (tH > 0 && tW > 0)
				if (b[tH - 1][tW - 1] == 1) {
					flagnum++;
					if (a[tH - 1][tW - 1] == -1) leinum++;
				}
		case 6:
			if (tH < boxH - 1 && tW > 0)
				if (b[tH + 1][tW - 1] == 1) {
					flagnum++;
					if (a[tH + 1][tW - 1] == -1) leinum++;
				}
		case 7:
			if (tH > 0 && tW < boxW - 1)
				if (b[tH - 1][tW + 1] == 1) {
					flagnum++;
					if (a[tH - 1][tW + 1] == -1) leinum++;
				}
		case 8:
			if (tH < boxH - 1 && tW < boxW - 1)
				if (b[tH + 1][tW + 1] == 1) {
					flagnum++;
					if (a[tH + 1][tW + 1] == -1) leinum++;
				}
	}
	if (flagnum != livalue) return 0;
	if (flagnum == livalue) {
		if (livalue == leinum) {
			if (tH > 0 && tH < boxH - 1 && tW > 0 && tW < boxW - 1)
				for (i = -1; i < 2; i++)
					for (j = -1; j < 2; j++)
						if (b[tH + i][tW + j] != 1) b[tH + i][tW + j] = 4;
			if (tH > 0 && tW > 0) {
				if (a[tH][tW - 1] != -1) b[tH][tW - 1] = 4;
				if (a[tH - 1][tW - 1] != -1) b[tH - 1][tW - 1] = 4;
				if (a[tH - 1][tW] != -1) b[tH - 1][tW] = 4;
			}
			if (tH > 0 && tW < boxW - 1) {
				if (a[tH - 1][tW + 1] != -1) b[tH - 1][tW + 1] = 4;
				if (a[tH][tW + 1] != -1) b[tH][tW + 1] = 4;
				if (a[tH - 1][tW] != -1) b[tH - 1][tW] = 4;
			}
			if (tH < boxH - 1 && tW > 0) {
				if (a[tH][tW - 1] != -1) b[tH][tW - 1] = 4;
				if (a[tH + 1][tW - 1] != -1) b[tH + 1][tW - 1] = 4;
				if (a[tH + 1][tW] != -1) b[tH + 1][tW] = 4;
			}
			if (tH < boxH - 1 && tW < boxW - 1) {
				if (a[tH][tW + 1] != -1) b[tH][tW + 1] = 4;
				if (a[tH + 1][tW + 1] != -1) b[tH + 1][tW + 1] = 4;
				if (a[tH + 1][tW] != -1) b[tH + 1][tW] = 4;
			}
			for (i = 0; i < boxH; i++) {
				for (j = 0; j < boxW; j++) {
					if (b[i][j] == 4 && a[i][j] == 0) lis[i * boxW + j].innerText = "";
					if (b[i][j] == 4 && a[i][j] > 0 && a[i][j] < boxW) lis[i * boxW + j].innerText = a[i][j];
				}
			}
		} else endMessage();
	}
	flagnum = 0;
	leinum = 0;
}
var showDiv=$('.showDiv');
var showDivOpenBoolean=false;
var showDivContentSec=0;
var showDivContentMin=0;
var showDivContentRestLei=0;
var showDivContentStep=0;
// var showDivContentList=[];
// for(i=0;i<2;i++)showDivContentList[i]=showDiv.eq(i).text();
showDivOpen=setInterval(function(){
if(showDivOpenBoolean){
	showDiv.eq(0).text(showDivContentMin+"min(s)|"+showDivContentSec+"sec(s)");
	showDiv.eq(1).text(showDivContentRestLei+"step(s)");
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
        var str=($(window).width()) * (.7/boxW)+"px";
		//console.log(str);
        $("#box ul>li").css({
            "height": str,
            "width": str,
			"lineHeight":str,
			"fontSize":($(window).width()) * (.6/boxW)+"px"
        })
    } else {
        $("#box ul>li").css({
            "height": "calc("+(100/boxW)+"vh - "+(7.5/boxW)+"vw)",
            "width": "calc("+(100/boxW)+"vh - "+(7.5/boxW)+"vw)",
            "lineHeight": "calc("+(100/boxW)+"vh - "+(7.5/boxW)+"vw)",
			"fontSize":"calc("+(100/boxW)+"vh - "+(9/boxW)+"vw)"
        })
    }
}
