function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("dwn-btn").addEventListener("click", function(){

    var text = '/**\n* @name BetterUserBackgrounds\n* @version 1.0\n* @description Custom Modal and Pop Up User Backgrounds!\n* @source https://github.com/MirayXS/BetterUserBackgrounds\n* @website https://mirayxs.github.io/BetterUserBackgrounds\n* @authorId 325605285731500033\n* @author XxMirayxX21#3561\n**/\n@import url("https://mirayxs.github.io/BetterUserBackgrounds/assets/css/base.css");\n[user_by_bdfdb*="'+document.getElementById("text-val").value+'"],\n[data-user-id*="'+document.getElementById("text-val").value+'"] {\n	--user-background: url('+document.getElementById("text-val2").value+');}'
    var filename = "BetterUserBackgrounds.theme.css";
    
    download(filename, text);
}, false);