langCommonArr = {//改语言的，这些对象的值是被改的值
    0: {//2048
        0: ["2048", "2048"],//title
        1: ["Times", "时间"],//time
        2: ["Steps", "步数"],//step
        3: ["Restart", "重开"],//restart
        4: ["Time Pause", "暂停"],//pause
        5: ["Game Intro", "介绍"],//intro
        6: ["Back", "返回"],//back
    }, 1: {//labrinth
        0: ["labrinth-迷宫", "迷宫"],//title
        1: ["Times", "时间"],//time
        2: ["Steps", "步数"],//step
        3: ["Restart", "重开"],//restart
        4: ["Time Pause", "暂停"],//pause
        5: ["Game Intro", "介绍"],//intro
        6: ["Set", "刷新"],//intro
        7: ["Back", "返回"],//back
    }, 2: {//mineClearance
        0: ["mianClearance-扫雷", "扫雷"],//title
        1: ["Times", "时间"],//time
        2: ["Steps", "步数"],//step
        3: ["Restart", "重开"],//restart
        4: ["Time Pause", "暂停"],//pause
        5: ["Game Intro", "介绍"],//intro
        6: ["Set", "刷新"],//intro
        7: ["Back", "返回"],//back
    }, 3: {//klotski
        0: ["klotski-华容道", "华容道"],//title
        1: ["Times", "时间"],//time
        2: ["Steps", "步数"],//step
        3: ["Restart", "重开"],//restart
        4: ["Time Pause", "暂停"],//pause
        5: ["Game Intro", "介绍"],//intro
        6: ["Back", "返回"],//back
    }
}
langChangeStringCommonArr = [
    ["#header>h2", "#time", "#step", "#restare", "#pause", "#intro", "#back"],
    ["#header>h2", "#time", "#step", "#restare", "#pause", "#intro", "#boxWH", "#back"],
    ["#header>h2", "#time", "#step", "#restare", "#pause", "#intro", "#boxWH", "#back"],
    ["#header>h2", "#time", "#step", "#restare", "#pause", "#intro", "#back"],
    []
]
// window.onload=function(){
lang = window.location.search;
currentValue = Number(lang.split("|")[2])
lang = Number(lang.split("|")[1])
if (isNaN(lang)) currentValue = 4;
for (let i = 0; i < langChangeStringCommonArr[currentValue].length; i++) document.querySelector(langChangeStringCommonArr[currentValue][i]).innerHTML = langCommonArr[currentValue][i][Number(lang)];

function back() {
    window.open('../../mainPage.html?' + lang, '_self');
}

function intro(str) {
    switch (str) {
        case 'game2048':
            alert("2048是一个很经典又老少皆宜的游戏。\n按wasd以进行游戏，无尽得添加吧，加油");
            break;
        case 'labyrinth':
            alert("走迷宫是一个很经典又老少皆宜的游戏。\n按wasd以控制方向，到达终点则为胜利");
            break;
        case 'mineClearance':
            alert("扫雷是一个很经典又老少皆宜的游戏。\n点击任意一个块以开始，数字表示周围8格方块的雷的数量，\n右键插旗，当只剩下雷时，则胜利");
            break;
        case 'klotski':
            alert("华容道是一个很经典又老少皆宜的游戏。\n规则：点击块使其排序为从1-15，即为成功");
            break;
    }
}

function pause() {
    if (showDivContentStep) showDivOpenBoolean = !showDivOpenBoolean;
}

function restart() {
    window.location.reload()
}
