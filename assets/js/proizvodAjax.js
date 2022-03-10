window.onload = function(){
    $.ajax({
        url: "assets/js/data/proizvodi.json",
        method: "get",
        dataType: "json",
        success: function(data){
            console.log(data);
            ispisProizvoda(data);
        },
        error: function(xhr){
            console.log(xhr);
        }
    })

    $.ajax({
        url: "assets/js/data/kategorije.json",
        method: "get",
        dataType: "json",
        success: function(data){
            console.log(data);
            padajucaLista(data, "#kategorije", "ddlKategorije", "Categories:");
        },
        error: function(xhr){
            console.log(xhr);
        }
    })

    $.ajax({
        url: "assets/js/data/sortiranje.json",
        method: "get",
        dataType: "json",
        success: function(data){
            console.log(data);
            padajucaLista(data, "#sortiranje", "ddlSort", "Sort by:");
        },
        error: function(xhr){
            console.log(xhr);
        }
    })

    $(document).on("change", "#ddlKategorije", function(){
        let idKat = $("#ddlKategorije").val();
        
        let filtriraniProizvodi = [];
        if (idKat == 0) {
            ispisProizvoda(proizvodi);
        }
        else {
            for(let objP of proizvodi){
            if (idKat == objP.idKat){
                filtriraniProizvodi.push(objP);
            }
        }
        ispisProizvoda(filtriraniProizvodi);
        }
    })

    $(document).on("change", "#ddlSort", function(){
        let idSort = $("#ddlSort").val();
        if (idSort == 0) {
            ispisProizvoda(proizvodi);
        }
        else if (idSort == 1){   
            proizvodi.sort(function(a,b) { return a.cena.valueOf() < b.cena.valueOf();});
            ispisProizvoda(proizvodi);
        }
        else if (idSort == 2) {
            proizvodi.sort(function(a,b) { return a.cena.valueOf() > b.cena.valueOf();});
            ispisProizvoda(proizvodi);
        }
    })
}
function ispisProizvoda(podaci){
    let proizvod = ``;
    if (podaci.length == 0){
        proizvod += `<p>No products are currently available.</p>`
    }
    else {
        for (let pr of podaci) {
        proizvod += `<div class="col">
                        <div class="card proizvod">
                            <img src="${pr.imgSrc}" class="card-img-top img-fluid proizvod-img" alt="${pr.naziv}">
                            <div class="card-body">
                                <h2 class="card-title"><b>${pr.naziv}</b></h5>
                                <p class="card-text"><span class=price>${pr.cena}$</span></br>${pr.tekst.opis}</br>Ingredients: ${pr.tekst.sastojci}</p>
                            </div>
                        </div>
                    </div>`
    }
    }
    
    $("#proizvod").html(proizvod);
}

function padajucaLista(podaci, idBloka, idListe, labelTxt) {
    let lista = `<div class="form-group">
    <label>${labelTxt}</label>
    <select id=${idListe}>>`
    for (let podatak of podaci){
       lista += `<option value="${podatak.id}">${podatak.naziv}</option>`;
    }
    lista += `</select></div>`
    
    $(idBloka).html(lista);
}