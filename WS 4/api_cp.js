let codePostal = document.getElementById("cp")
let ville = document.getElementById("ville")

codePostal.addEventListener("change", function(){request()})

function request(){
    let cp = ""
    let html = "";
    cp = codePostal.value.toString()
    if (cp.length == 5)
    {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://apicarto.ign.fr/api/codes-postaux/communes/"+cp, true);
        xhr.onload = function(){
        if( xhr.status == 200 ){
            let recu = JSON.parse(xhr.responseText)
            let i = 0
        while (recu[i] != null)
        {
            html += "<option>"+recu[i].nomCommune+"</option>"
            i++
        }
        
        }
        
        ville.innerHTML = html;
        
        };
        xhr.send(); 
    }
}