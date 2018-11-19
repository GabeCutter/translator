var buttons = document.getElementById("myButtons").childNodes;
var display = document.getElementById("display");
var announcer = document.getElementById("announcer");
var submit = document.getElementById("submit");
var currentLang = "English";

var fm = new Map([["hello" ,"bonjour"],
["goodbye", "au revoir"], ["good morning", "bonjour"], ["goodnight", "bonne nuit"], 
["good evening", "bonsoir"], ["happy birthday", "Bon anniversaire"], ["how are you", "Comment allez-vous"]]);
var sm = new Map([["hello" ,"Hola"],
["goodbye", "Adios"], ["good morning", "Buenos días"], ["goodnight", "Buenas noches"], 
["good evening", "Buena noche"], ["happy birthday", "Feliz cumpleaños"], ["how are you", "Cómo estás"]]);
var gm = new Map([["hello" ,"Hallo"],
["goodbye", "Auf Wiedersehen"], ["good morning", "Guten Morgen"], ["goodnight", "Gute Nacht"], 
["good evening", "Guten Abend"], ["happy birthday", "Alles Gute zum Geburtstag"], ["how are you", "Wie geht es dir"]]);
var rm = new Map([["hello" ,"Привет"],
["goodbye", "Прощай"], ["good morning", "Доброе утро"], ["goodnight", "Доброй ночи"], 
["good evening", "Добрый вечер"], ["happy birthday", "C Днем Pожденья"], ["how are you", "как твои дела"]]);
var cm = new Map([["hello" ,"你好"],
["goodbye", "再见"], ["good morning", "早上好"], ["goodnight", "晚安"], 
["good evening", "晚上好"], ["happy birthday", "生日快乐"], ["how are you", "你好吗"]]);
var langMap = new Map([["Français" ,fm],
["Español", sm], ["Deutsche", gm], ["Pусский" ,rm], ["中文" ,cm]]);

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
    else {
        if(langMap.get(currentLang).has(phr)) {
            display.innerHTML = langMap.get(currentLang).get(phr);
        }
        else {
            alert("Failed");
        }
    }
}
