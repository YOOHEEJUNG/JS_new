var date = new Date();
date.setDate(date.getDate() + 1);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);


var cookie = "";
cookie += "pop" + "=" + "true" + ";";
cookie += " path=/;";
cookie += " expires=" + date.toUTCString();

document.cookie = cookie;
window.close();


function get(x){

var a = document.cookie.split(";");
for (i in a) {
    if (a[i].indexOf(x) != -1) {
        return true;
    }
}
    
}