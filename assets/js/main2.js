window.onload = function(){
    $.ajax({
        url: "assets/data/navMeni.json",
        method: "get",
        dataType: "json",
        success: function(data){
            console.log(data);
            ispisListiLinkova(data);
        },
        error: function(xhr){
            console.log(xhr);
        }
    })
}
function ispisListiLinkova (podaci){
    let html = `<ul>`;
    for (let li of podaci){
        html += `<a href="${li.href}"><li>${li.naziv}</li></a>`;
    }
    html += `</ul>`;

    document.querySelector("#nav-meni").innerHTML = html;
}