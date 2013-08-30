window.onload = function() {
    buildSelectFontSize();
}

function buildSelectFontSize(){
    var min = 10,
    max = 32,
    select = document.getElementById("fontSize");

    for (var i = min; i<=max; i++){
       var opt = document.createElement('option');
       opt.value = i;
       opt.innerHTML = i;
       select.appendChild(opt);
    }
}

function fontSize(fs){
    fs = parseInt(fs) + 5;
    document.designMode = "on";
    document.execCommand("fontSize", false, "7");
    var fontElem = document.getElementsByTagName("font");
    for(var i = 0;i < fontElem.length;i++){
        if(fontElem[i].size=="7"){
            fontElem[i].removeAttribute("size");
            fontElem[i].style.fontSize = fs + "px";
        }
    }
    document.designMode = "off";
}

function fontType(fontName){
    document.designMode = "on";
    document.execCommand("fontName", false, fontName);
    document.designMode ="off";
}

function fontFormat(format){
    document.designMode = "on";
    document.execCommand(format, false, null);
    document.designMode ="off";
}