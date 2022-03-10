
    $.ajax({
        url: "assets/js/data/navMeni.json",
        method: "get",
        dataType: "json",
        success: function(data){
            console.log(data);
            ispisListiLinkova(data);
            ispisListiLinkovaFuter(data);
        },
        error: function(xhr){
            console.log(xhr);
        }
    })
    $.ajax({
        url: "assets/js/data/social.json",
        method: "get",
        dataType: "json",
        success: function(data){
            ispisSocial(data);
        },
        error: function(xhr){
            console.log(xhr);
        }
    })
    

function ispisListiLinkova (podaci){
    let html = `<ul>`;
    for (let li of podaci){
        html += `<a href="${li.href}"><li>${li.naziv}</li></a>`;
    }
    html += `</ul>`;

    $("#nav-meni").html(html);
}
function ispisListiLinkovaFuter (podaci){
    let html = `<ul>`;
    for (let li of podaci){
        html += `<a href="${li.href}"><li>${li.naziv}</li></a>`;
    }
    html += `</ul>`;

    $("#nav-meni-futer").html(html);
}
function ispisSocial (podaci){
    let html = `<ul>`;
    for (let li of podaci){
        html += `<a href="${li.href}"><li>${li.naziv}</li></a>`;
    }
    html += `</ul>`;

    $("#nav-meni-futer").html(html);
}