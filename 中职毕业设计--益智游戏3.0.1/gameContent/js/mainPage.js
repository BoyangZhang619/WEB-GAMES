currentValue = -619;
langArr = {
    0: ["The Website of Intelligent Game", "益智游戏网站"],//title
    1: ["ENTER", "进入游戏"],//show
    2: ["<li onclick='select(0)'>2048</li><li onclick='select(1)'>迷宫</li><li onclick='select(2)'>扫雷</li><li onclick='select(3)'>华容道</li>", "<li onclick='select(0)'>2048</li><li onclick='select(1)'>迷宫</li><li onclick='select(2)'>扫雷</li><li onclick='select(3)'>华容道</li>"],//ul
    3: ["CHOOSE ONE", "选择游戏"],//divChoose
    4: ["waiting for selection...<br/><sub>click me</sub>", "请稍等...<br/><sub>点下我</sub>"]//divSubmit
}
langChangeStringArr = ["#header>h2", "#submit", "#ul", "#choose", "#show"]
lang = 0;
Lang = window.location.search;
console.log(Lang.split("?"));
Lang = Number(Lang.split("?")[1])
console.log(window.location.search + Lang);
if (typeof (Lang) != "number") {
    lang = 0;
} else {
    lang = Lang
}
if (isNaN(lang)) lang = 0;
langChange2()

function langChange() {
    if (!lang) {
        lang = 1;
        langChange2()
        return 0;
    }
    console.log("waraefa");
    if (lang) {
        lang = 0;
    }
    langChange2()
}

function langChange2() {
    if (lang) {
        for (i = 0; i < 5; i++) document.querySelector(langChangeStringArr[i]).innerHTML = langArr[i][1];
        return 0
    }
    if (!lang) {
        for (i = 0; i < 5; i++) document.querySelector(langChangeStringArr[i]).innerHTML = langArr[i][0];
        return 0
    }
}

function select(value) {
    // console.log(value)
    if (value >= 0) currentValue = value
    if (currentValue === -619) {
        // console.log("未选择游戏")
        alert("未选择游戏")
        return false;
    }
    if (value === -1) {
        switch (currentValue) {
            case 0:
                window.open('gameContent/html/game2048.html?|' + lang + "|" + currentValue, '_self');
                break;
            case 1:
                window.open('gameContent/html/labyrinth.html?|' + lang + "|" + currentValue, '_self');
                break;
            case 2:
                window.open('gameContent/html/mineClearance.html?|' + lang + "|" + currentValue, '_self');
                break;
            case 3:
                window.open('gameContent/html/klotski.html?|' + lang + "|" + currentValue, '_self');
                break;
        }
        return false;
    }
    $("li").css("box-shadow", "2px 2px 10px 1px rgba(86,66,50, 0.685)")
    $("li").eq(value).css("box-shadow", ".5px .5px 3px 1px rgba(86, 66, 50, 0.877)")
}

function test() {
    $("#show").css("display", "none")
    acount(10);
}

a = [["arise", "arose", "arisen"], ["awake", "awoke", "awoken"], ["be", "was/were", "been"], ["bear*", "bore", "borne/born"], ["burn*", "burnt", "burnt"], ["beat", "beat", "beaten"], ["begin", "began", "begun"], ["bend", "bent", "bent"], ["bite", "bit", "bittten"], ["blow", "blew", "blown"], ["break", "broke", "broken"], ["broadcast*", "broadcast", "broadcast"], ["burst", "burst", "burst"], ["bring", "brought", "brought"], ["buy", "bought", "bought"], ["become", "became", "become"], ["build", "built", "built"], ["choose", "chose", "chosen"], ["come", "came", "come"], ["catch", "caught", "caught"], ["can", "could", "/"], ["cost", "cost", "cost"], ["cut", "cut", "cut"], ["deal", "dealt", "dealt"], ["dream*", "dreamt", "dreamt"], ["dig", "dug", "dug"], ["do", "did", "done"], ["draw", "drew", "drawn"], ["drink", "drank", "drunk"], ["drive", "drove", "driven"], ["eat", "ate", "eaten"], ["fall", "fell", "fallen"], ["flee", "fled", "fled"], ["fly", "flew", "flown"], ["forbid", "forbad/forbade", "forbidden"], ["forget", "forgot", "forgotten"], ["forgive", "forgave", "gorgiven"], ["freeze", "froze", "frozen"], ["forecast", "forecast", "forecast"], ["fight", "fought", "fought"], ["feed", "fed", "fed"], ["feel", "felt", "felt"], ["find", "found", "found"], ["get", "got", "got"], ["give", "gave", "given"], ["go", "went", "gone"], ["grow", "grew", "grown"], ["hurt", "hurt", "hurt"], ["hit", "hit", "hit"], ["hear", "heart", "heart"], ["hang*", "hung", "hung"], ["hold", "held", "held"], ["have", "had", "had"], ["hide", "hid", "hidden"], ["know", "knew", "known"], ["keep", "kept", "kept"], ["let", "let", "let"], ["learn", "learnt", "learnt"], ["lead", "led", "led"], ["lose", "lost", "lost"], ["lend", "lent", "lent"], ["lay", "laid", "laid"], ["leave", "left", "left"], ["lie*", "lay", "lain"], ["light*", "lit", "lit"], ["must", "/", "/"], ["may", "might", "/"], ["make", "made", "made"], ["mean", "meant", "meant"], ["meet", "met", "met"], ["overcome", "overcame", "overcome"], ["put", "put", "put"], ["pay", "paid", "paid"], ["prove*", "proved", "proven"], ["read", "read", "read"], ["run", "ran", "run"], ["ride", "rode", "ridden"], ["ring", "rang", "rung"], ["rise", "rose", "risen"], ["say", "said", "said"], ["set", "set", "set"], ["spread", "spread", "spread"], ["shut", "shut", "shut"], ["sit", "sat", "sat"], ["speed", "sped", "sped"], ["send", "sent", "sent"], ["spend", "spent", "spent"], ["sleep", "slept", "slept"], ["smell", "smelt", "smelt"], ["spell", "spelt", "spelt"], ["sweep", "swept", "swept"], ["see", "saw", "seen"], ["shall", "should", "/"], ["seek", "sought", "sought"], ["sell", "sold", "sold"], ["shake", "shook", "shaken"], ["shine", "shone", "shone"], ["shoot", "shot", "shot"], ["sing", "sang", "sung"], ["sink", "sank", "sunk"], ["speak", "spoke", "spoken"], ["spit", "spat", "spat"], ["stand", "stood", "stood"], ["steal", "stole", "stolen"], ["stick", "stuck", "stuck"], ["strick", "struck", "struck"], ["swim", "swam", "swum"], ["teach", "taught", "taught"], ["think", "thought", "thought"], ["take", "took", "taken"], ["tear", "tore", "torn"], ["tell", "told", "told"], ["throw", "threw", "thrown"], ["understand", "understood", "understood"], ["wake", "woke", "woken"], ["wear", "wore", "worn"], ["weep", "wept", "wept"], ["win", "won", "won"], ["wind", "wound", "wound"], ["write", "wrote", "written"], ["will", "would", "/"]];

function c() {
    var d = document.querySelectorAll("input");
    // console.log(d)
    for (i = 0; i < Num; i++)
        for (j = 0; j < 2; j++)
            if (d[i * 2 + j].value === b[i][1 + j]) {
                d[i * 2 + j].style.color = "green";
            } else {
                d[i * 2 + j].style.color = "red";
                if (d[i * 2 + j].value === ">" + b[i][1 + j]) break;
                d[i * 2 + j].value += ">" + b[i][1 + j];
            }
}

function acount(num) {
    Num = num;
    if (num > a.length) num = a.length;
    document.querySelector("#main>main").innerHTML = '';
    for (i = 0; i < num; i++) document.querySelector("#main>main").innerHTML += '<div id="irregularWord"><div id="a' + i + '"></div><input type="text" placeholder="过去式"><input type="text" placeholder="过去分词"></>'
    document.querySelector("#main>main").innerHTML += '<br /><input id="rating" type="button" value="点击批改" onclick="c()" /><div id="num">数量：</div><input id="acount" type="text"  value="' + num + '"><input id="reload" type="button" value="确认数量/刷新" onclick="acount(document.querySelector(\'#acount\').value)" /><input id="wordList" type="button" value="点击查看所有动词不定式" onclick="showUp()"><input id="back" type="button" value="返回" onclick="back()"/>';
    b = [];
    for (i = 0; i < num; i++) {
        b[i] = a[Math.floor(Math.random() * a.length)];
        for (j = 0; j < i; j++)
            if (b[j] == b[i]) --i;
        document.querySelector("#a" + i).innerText = b[i][0];
    }
}

function showUp() {
    document.querySelector("#main>main").innerHTML = '<input type="button" value="点击返回测试" onclick="acount(Num)" style="position: fixed;"/><br/>';
    for (i = 0; i < a.length; i++) document.querySelector("#main>main").innerHTML += '<div class="showWord"><span>' + a[i][0] + '</span><span>' + a[i][1] + '</span><span>' + a[i][2] + '</span></div>'
}

function back() {
    $("#main>main>div").add("#main>main>input").add("#main>main>br").css("display", "none");
    if (!lang) document.querySelector("#main>main").innerHTML = '<h2 id="show" onclick="test()">waiting for selection...<br/><sub>click me</sub></h2>';
    if (lang) document.querySelector("#main>main").innerHTML = '<h2 id="show" onclick="test()">请稍等...<br/><sub>点下我</sub></h2>';
}
