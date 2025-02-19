// A=[];B=15;for(i=0;i<16;i++){if(!i%4)$("#a").append("<ul></ul>");C=Math.ceil(Math.random()*15);if(i!=B){for(j=0;j<A.length;j++)if(C==A[j]||C==A[0]){C=Math.ceil(Math.random()*15);j=0}A.push(C);$("ul:last").append("<li id='.|"+i+"|"+Math.ceil((i+1)/4)+"|"+(Math.ceil(i%4)+1)+"'>"+C+"</li>")}if(i==B)$("ul:last").append("<li id='.\|"+B+"\|"+Math.ceil((B+1)/4)+"\|"+(Math.ceil(B%4)+1)+"'>&nbsp;</li>")}G=$("li");$("li[id^='.|"+B+"']").attr("class","a");$("li:not([id~='.|"+B+"'])").click(function(){var F=this.id.split("|");var D=a(F[2],F[3]);if(!D)return false;b(D);G.removeClass("a");$("li[id^='.\|"+B+"\|']").addClass("a");for(i=1;i<=15;i++){if(G[i-1].innerText!=i)break;if(i==15)alert("WIN")}});function a(a,b){for(i=0;i<16;i++){if(G[i].id.startsWith(".\|"+B+"\|")){var E=G[i].id.split("|");break}}if(b!=E[3]&&a!=E[2])return false;else if(a==E[2]){return ["x",b-E[3],+E[2],+E[3]]}else if(b==E[3]){return ["y",a-E[2],+E[2],+E[3]]}}function b(a){for(i=1;i<=Math.abs(a[1]);i++){if(a[0]=="x"){if(a[1]>0)c(i-2,0,1,0,-1,a);if(a[1]<0)c(-i,0,-1,0,+1,a)}if(a[0]=="y"){if(a[1]>0)c(i-2,3*i-3,4,-1,0,a);if(a[1]<0)c(-i,3-3*i,-4,1,0,a)}}}function c(a,b,c,d,e,f){var g=(f[2]-1)*4+f[3]+a+b;for(j=1;j<=3;j++)f.push(+G[g+c].id.split("|")[j]);G[g].innerText=G[g+c].innerText;G[g].id=".\|"+f[4]+"\|"+(f[5]+d)+"\|"+(f[6]+e);G[g+c].innerHTML='&nbsp;';G[g+c].id=".\|"+B+"\|"+f[5]+"\|"+f[6];for(j=0;j<3;f.pop(),j++);}
//上述代码为压缩版





//Because of the former command that i`m difficult to digest :(   所以下面代码的“格式化”与“注释”全部由AI完成，而代码本体由我本人完成，不含有AI参杂（一个是AI写不了逻辑性太复杂的东西，一个是我的命名，我的命名是这样是因为我想看我可以把代码压到多小，然后开始的就被替了[不过我觉得压过的代码更...高级？]）
    






A = [];// 初始化一个空数组A，用于存储已生成的拼图编号  
B = 15;// 设置变量B为15，表示空格（空位）的索引
for (i = 0; i < 16; i++) {// 循环16次，生成15个拼图块和一个空格  
	if (!i % 4) $("#a").append("<ul></ul>");// 如果当前索引i能被4整除，则在页面上添加一个<ul>元素用于存放拼图块  
	// C=i+1;//test
	C = Math.ceil(Math.random() * 15);// 生成一个1到15之间的随机整数，作为拼图块的编号  
	if (i != B) {    // 如果当前索引i不是空格的索引B  
		for (j = 0; j < A.length; j++)        // 检查生成的编号C是否已经存在于数组A中  
			if (C == A[j] || C == A[0]) {
				C = Math.ceil(Math.random() * 15); // 如果编号已存在，则重新生成  
				j = 0// 重置j以继续检查新生成的编号 
			} A.push(C);// 将生成的编号C添加到数组A中 
		$("ul:last").append("<li id='.|" + i + "|" + Math.ceil((i + 1) / 4) + "|" + (Math.ceil(i % 4) + 1) + "'>" + C +
			"</li>")// 将编号C的拼图块添加到最后一个<ul>元素中，并为其添加一个唯一的id  
	}
	if (i == B) $("ul:last").append("<li id='.\|" + B + "\|" + Math.ceil((B + 1) / 4) + "\|" + (Math.ceil(B % 4) + 1) +
		"'>&nbsp;</li>")
}
G = $("li");
$("li[id^='.|" + B + "']").attr("class", "a");// 将一个空白的拼图块添加到最后一个<ul>元素中，并为其添加一个唯一的id 
$("li:not([id~='.|" + B + "'])").click(function() {
	var F = this.id.split("|");// 将点击的拼图块的id分割成数组F 
	var D = a(F[2], F[3]);// 调用函数a计算移动方向和距离，得到结果D 
	if (!D) return false;
	showDivContentStep++;
	if(!showDivOpenBoolean)showDivOpenBoolean=true;
	b(D);// 调用函数b执行拼图块的移动 
	G.removeClass("a");
	$("li[id^='.\|" + B + "\|']").addClass("a");// 检查是否所有拼图块都已归位  
	for (i = 1; i <= 15; i++) {
		if (G[i - 1].innerText != i) break;
		if (i == 15) {
			clearInterval(showDivOpen);
			alert("WIN")
		} // 如果所有拼图块都已归位，则弹出"WIN"提示  
	}
});
// 函数a：根据点击的拼图块和目标空格的位置，计算移动方向和距离  
function a(a, b) {
	// 遍历所有拼图块，找到空格的id  
	for (i = 0; i < 16; i++) {
		if (G[i].id.startsWith(".\|" + B + "\|")) {
			var E = G[i].id.split("|");
			break
		}
	}
	// 如果点击的拼图块不在空格的行或列上，则返回false  
	if (b != E[3] && a != E[2]) return false;
	// 否则根据点击的拼图块和空格的相对位置，返回移动方向和距离  
	else if (a == E[2]) {
		return ["x", b - E[3], +E[2], +E[3]]// x方向移动
	} else if (b == E[3]) {
		return ["y", a - E[2], +E[2], +E[3]]// y方向移动 
	}
}
// 函数b：根据移动方向和距离，执行拼图块的移动
function b(a) {
	for (i = 1; i <= Math.abs(a[1]); i++) {
		if (a[0] == "x") {// x方向移动
			if (a[1] > 0) c(i - 2, 0, 1, 0, -1, a);// 正方向移动 
			if (a[1] < 0) c(-i, 0, -1, 0, +1, a);// 负方向移动
		}
		if (a[0] == "y") { // y方向移动
			if (a[1] > 0) c(i - 2, 3 * i - 3, 4, -1, 0, a);// 正方向移动 
			if (a[1] < 0) c(-i, 3 - 3 * i, -4, 1, 0, a);// 负方向移动
		}
	}
}
// 函数c：执行具体的拼图块移动操作
function c(a, b, c, d, e, f) {
	var g = (f[2] - 1) * 4 + f[3] + a + b;// 计算要移动的拼图块和空格的索引
	for (j = 1; j <= 3; j++) f.push(+G[g + c].id.split("|")[j]);// 获取移动路径上相邻的拼图块的信息
	// 将要移动的拼图块的内容赋给空格，并更新其id
	G[g].innerText = G[g + c].innerText;
	G[g].id = ".\|" + f[4] + "\|" + (f[5] + d) + "\|" + (f[6] + e);
	// 将空格的内容置空，并更新其id为点击的拼图块的id
	G[g + c].innerHTML = '&nbsp;';
	G[g + c].id = ".\|" + B + "\|" + f[5] + "\|" + f[6];
	for (j = 0; j < 3; f.pop(), j++);// 移除临时存储的相邻拼图块信息  
}



//下面的是后面加上的，不在压缩的代码内
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

pageChange()
window.addEventListener('resize',pageChange)
function pageChange() {//修改css样式
    if (parseInt($("#main>main").css("width")) < parseInt($("#main>main").css("height"))) {
        var str=($(window).width()) * .175+"px";
        $("#a>ul>li").css({
            "width": str,
            "font-size": "8.875vw",
            "line-height": str
        })
    } else {
        $("#a>ul>li").css({
            "width": "calc(25vh - 1.875vw)",
            "font-size": "calc(12.5vh - .9375vw)",
            "line-height": "calc(25vh - 1.875vw)"
        })
    }
}
