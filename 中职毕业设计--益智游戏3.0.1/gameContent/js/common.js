function back(){
    window.open('../../mainPage.html', '_self');
}
function intro(str){
    switch(str){
        case 'game2048':alert("2048是一个很经典又老少皆宜的游戏。\n按wasd以进行游戏，无尽得添加吧，加油");
            break;
        case 'labyrinth':alert("走迷宫是一个很经典又老少皆宜的游戏。\n按wasd以控制方向，到达终点则为胜利");
            break;
        case 'mineClearance':alert("扫雷是一个很经典又老少皆宜的游戏。\n点击任意一个块以开始，数字表示周围8格方块的雷的数量，\n右键插旗，当只剩下雷时，则胜利");
            break;
        case 'klotski':alert("华容道是一个很经典又老少皆宜的游戏。\n规则：点击块使其排序为从1-15，即为成功");
            break;
    }
}
function pause(){
	if(showDivContentStep)showDivOpenBoolean=!showDivOpenBoolean;
}
function restare(){
    window.location.reload()
}