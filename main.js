var buttons = document.getElementById("myButtons").childNodes;
var display = document.getElementById("display");
var announcer = document.getElementById("announcer");
var submit = document.getElementById("submit");
var currentLang = "English";

var p1 = "hello";
var p2 = "goodbye";
var p3 = "good morning";
var p4 = "goodnight";
var p5 = "good evening";
var p6 = "happy birthday";
var p7 = "how are you";

//change language
for(i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", langChange);
}
function langChange() {
    announcer.innerHTML = "English to " +this.innerHTML;
    currentLang = this.innerHTML;
}

//submit text for translation
document.getElementById("sub").addEventListener("click", translate);
function translate() {
    var phr = document.getElementById("phrase").value;
    if(currentLang === "English") {
        display.innerHTML = phr;
    }
    else if(currentLang === "Français") {
        if(phr === p1) {
            display.innerHTML = "Bonjour";
        }
        else if(phr === p2) {
            display.innerHTML = "Au revoir";
        }
        else if(phr === p3) {
            display.innerHTML = "Bonjour";
        }
        else if(phr === p4) {
            display.innerHTML = "Bonne nuit";
        }
        else if(phr === p5) {
            display.innerHTML = "Bonsoir";
        }
        else if(phr === p6) {
            display.innerHTML = "Bon anniversaire";
        }
        else if(phr === p7) {
            display.innerHTML = "Comment allez-vous";
        }
    }
    else if(currentLang === "Español") {
        if(phr === p1) {
            display.innerHTML = "Hola";
        }
        else if(phr === p2) {
            display.innerHTML = "Adios";
        }
        else if(phr === p3) {
            display.innerHTML = "Buenos días";
        }
        else if(phr === p4) {
            display.innerHTML = "Buenas noches";
        }
        else if(phr === p5) {
            display.innerHTML = "Buena noche";
        }
        else if(phr === p6) {
            display.innerHTML = "Feliz cumpleaños";
        }
        else if(phr === p7) {
            display.innerHTML = "Cómo estás";
        }
    }
    else if(currentLang === "Deutsche") {
        if(phr === p1) {
            display.innerHTML = "Hallo";
        }
        else if(phr === p2) {
            display.innerHTML = "Auf Wiedersehen";
        }
        else if(phr === p3) {
            display.innerHTML = "Guten Morgen";
        }
        else if(phr === p4) {
            display.innerHTML = "Gute Nacht";
        }
        else if(phr === p5) {
            display.innerHTML = "Guten Abend";
        }
        else if(phr === p6) {
            display.innerHTML = "Alles Gute zum Geburtstag";
        }
        else if(phr === p7) {
            display.innerHTML = "Wie geht es dir";
        }
    }
    else if(currentLang === "Pусский") {
        if(phr === p1) {
            display.innerHTML = "Привет";
        }
        else if(phr === p2) {
            display.innerHTML = "Прощай";
        }
        else if(phr === p3) {
            display.innerHTML = "Доброе утро";
        }
        else if(phr === p4) {
            display.innerHTML = "Доброй ночи";
        }
        else if(phr === p5) {
            display.innerHTML = "Добрый вечер";
        }
        else if(phr === p6) {
            display.innerHTML = "C Днем Pожденья";
        }
        else if(phr === p7) {
            display.innerHTML = "как твои дела";
        }
    }
    else if(currentLang === "中文") {
        if(phr === p1) {
            display.innerHTML = "你好";
        }
        else if(phr === p2) {
            display.innerHTML = "再见";
        }
        else if(phr === p3) {
            display.innerHTML = "早上好";
        }
        else if(phr === p4) {
            display.innerHTML = "晚安";
        }
        else if(phr === p5) {
            display.innerHTML = "晚上好";
        }
        else if(phr === p6) {
            display.innerHTML = "生日快乐";
        }
        else if(phr === p7) {
            display.innerHTML = "你好吗";
        }
    }
    else {
        display.innerHTML = "FAILED";
    }   
}
