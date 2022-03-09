var navMeni, social, kategorije, sortiranje, proizvodi;


window.onload = function(){
    /*navMeni = [
        {
            "naziv" : "Home",
            "href" : "index.html"
        },
        {
            "naziv" : "About Us",
            "href" : "about-us.html"
        },
        {
            "naziv" : "Products",
            "href" : "products.html"
        },
        {
            "naziv" : "Contact Us",
            "href" : "contact.html"
        },
        {
            "naziv" : "Author",
            "href" : "author.html"
        }
    ]
    social = [
        {
            "naziv" : "Facebook",
            "href" : "https://facebook.com"
        },
        {
            "naziv" : "Instagram",
            "href" : "https://instagram.com"
        },
        {
            "naziv" : "LinkedIn",
            "href" : "https://linkedin.com"
        },
        {
            "naziv" : "Snapchat",
            "href" : "https://snapchat.com"
        }
    ]*/
    kategorije = [
        {   "id": 0,
            "naziv" : "Select"    
        },
        {
            "id" : 1,
            "naziv" : "Gummies"
        },
        {
            "id" : 2,
            "naziv" : "Hard Candy"
        },
        {
            "id" : 3,
            "naziv" : "Caramels"
        },
        {
            "id" : 4,
            "naziv" : "Custom Orders"
        },
        {
            "id" : 5,
            "naziv" : "Chocolates"
        }
    ]
    sortiranje = [
        {   "id": 0,
            "naziv" : "Select"    
        },
        {
            "id" : 1,
            "naziv" : "Price: Highest to Lowest"
        },
        {
            "id" : 2,
            "naziv" : "Price: Lowest to Highest"
        }
    ]
    proizvodi = [
   {
      "id":1,
      "naziv":"Gummi Bears",
      "imgSrc":"assets/images/candy/gummi-bears.jpg",
      "cena":3.99,
      "idKat":1,
      "tekst":{
         "opis":"Home-made gummy bears",
         "sastojci":"sugar, glucose syrup, starch, flavoring, food coloring, citric acid, gelatin"
      }
   },
   {
      "id":2,
      "naziv":"Gummi Worms",
      "imgSrc":"assets/images/candy/gummi-worms.jpg",
      "cena":5.99,
      "idKat":1,
      "tekst":{
         "opis":"Vegan home-made gummy worms",
         "sastojci":"sugar, glucose syrup, starch, flavoring, food coloring, citric acid, pectin"
      }
   },
   {
      "id":3,
      "naziv":"Gummi Hears",
      "imgSrc":"assets/images/candy/gummi-hearts.jpg",
      "cena":3.99,
      "idKat":1,
      "tekst":{
         "opis":"Home-made gummy hears",
         "sastojci":"sugar, glucose syrup, starch, flavoring, food coloring, citric acid, gelatin"
      }
   },
   {
      "id":4,
      "naziv":"Sour Gummies",
      "imgSrc":"assets/images/candy/sour-gummies.jpg",
      "cena":4.49,
      "idKat":1,
      "tekst":{
         "opis":"Home-made sour gummies",
         "sastojci":"sugar, sour sugar, glucose syrup, starch, flavoring, food coloring, citric acid, gelatin"
      }
   },
   {
      "id":5,
      "naziv":"Milk Chocolate",
      "imgSrc":"assets/images/candy/milk-choco.jpg",
      "cena":3.59,
      "idKat":5,
      "tekst":{
         "opis":"Home-made milk chocolate",
         "sastojci":"sugar, cocoa butter, chocolate liquor, milk"
      }
   },
   {
      "id":6,
      "naziv":"Dark Chocolate",
      "imgSrc":"assets/images/candy/dark-choco.jpg",
      "cena":2.99,
      "idKat":5,
      "tekst":{
         "opis":"Home-made dark chocolate",
         "sastojci":"cacao beans, sugar, soy lecithin, vanilla"
      }
   },
   {
      "id":7,
      "naziv":"White Chocolate",
      "imgSrc":"assets/images/candy/white-choco.jpg",
      "cena":3.99,
      "idKat":5,
      "tekst":{
         "opis":"Home-made white chocolate",
         "sastojci":"sugar, cocoa butter, milk, vanilla, lecithin"
      }
   },
   {
      "id":8,
      "naziv":"Rock Candy",
      "imgSrc":"assets/images/candy/rock-candy.jpg",
      "cena":1.99,
      "idKat":2,
      "tekst":{
         "opis":"Home-made rock candy",
         "sastojci":"sugar, light corn syrup, fruit flavouring"
      }
   },
   {
      "id":9,
      "naziv":"Candy Fruit",
      "imgSrc":"assets/images/candy/candy-fruit.jpg",
      "cena":3.59,
      "idKat":2,
      "tekst":{
         "opis":"Home-made vegan candy fruit",
         "sastojci":"sugar, pectin, fruit flavouring"
      }
   },
   {
      "id":10,
      "naziv":"Light Caramel",
      "imgSrc":"assets/images/candy/light-caramel.jpg",
      "cena":3.99,
      "idKat":3,
      "tekst":{
         "opis":"Home-made vanilla caramel",
         "sastojci":"caster sugar, vanilla, milk"
      }
   },
   {
      "id":11,
      "naziv":"Chocolate Caramel",
      "imgSrc":"assets/images/candy/caramel-choco.jpg",
      "cena":3.49,
      "idKat":3,
      "tekst":{
         "opis":"Home-made vegan chocolate caramel",
         "sastojci":"caster sugar, cacao beans"
      }
   },
   {
      "id":12,
      "naziv":"Salted Caramel",
      "imgSrc":"assets/images/candy/salted-caramel.jpg",
      "cena":4.29,
      "idKat":3,
      "tekst":{
         "opis":"Home-made salted caramel",
         "sastojci":"caster sugar, vanilla, sea salt, milk"
      }
   },
   {
      "id":13,
      "naziv":"Caramel",
      "imgSrc":"assets/images/candy/caramel.jpg",
      "cena":2.99,
      "idKat":3,
      "tekst":{
         "opis":"Home-made caramel",
         "sastojci":"caster sugar"
      }
   },
   {
      "id":14,
      "naziv":"Your Hearts",
      "imgSrc":"assets/images/candy/your-hearts.jpg",
      "cena":5.99,
      "idKat":4,
      "tekst":{
         "opis":"Custom-made heart candy! Choose the lettering while ordering!",
         "sastojci":"unflavored gelatin, water, confectioner's sugar"
      }
   },
   {
      "id":15,
      "naziv":"Special Bar",
      "imgSrc":"assets/images/candy/special-bar.jpg",
      "cena":5.99,
      "idKat":4,
      "tekst":{
         "opis":"Custom-made dark chocolate! Choose the lettering while ordering!",
         "sastojci":"cacao beans, sugar, soy lecithin, vanilla"
      }
   }
]

    //this.ispisListiLinkova(navMeni, "#nav-meni");
    //this.ispisListiLinkova(navMeni, "#nav-meni-futer");
    //this.ispisListiLinkova(social, "#socials");
    this.padajucaLista(kategorije, "#kategorije", "ddlKategorije", "Categories:");
    this.padajucaLista(sortiranje, "#sortiranje", "ddlSort", "Sort by:");
    this.ispisProizvoda(proizvodi, "#proizvod");

    $(document).on("change", "#ddlKategorije", function(){
        let idKat = $("#ddlKategorije").val();
        
        let filtriraniProizvodi = [];
        if (idKat == 0) {
            ispisProizvoda(proizvodi, "#proizvod");
        }
        else {
            for(let objP of proizvodi){
            if (idKat == objP.idKat){
                filtriraniProizvodi.push(objP);
            }
        }
        ispisProizvoda(filtriraniProizvodi, "#proizvod");
        }
    })

    $(document).on("change", "#ddlSort", function(){
        let idSort = $("#ddlSort").val();
        if (idSort == 0) {
            ispisProizvoda(proizvodi, "#proizvod");
        }
        else if (idSort == 1){   
            proizvodi.sort(function(a,b) { return a.cena.valueOf() < b.cena.valueOf();});
            ispisProizvoda(proizvodi, "#proizvod");
        }
        else if (idSort == 2) {
            proizvodi.sort(function(a,b) { return a.cena.valueOf() > b.cena.valueOf();});
            ispisProizvoda(proizvodi, "#proizvod");
        }
    })
}
/*function ispisListiLinkova (podaci, idBloka){
    let html = `<ul>`;
    for (let li of podaci){
        html += `<a href="${li.href}"><li>${li.naziv}</li></a>`;
    }
    html += `</ul>`;

    document.querySelector(idBloka).innerHTML = html;
}*/



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


function ispisProizvoda(podaci, idBloka) {
    let proizvod = ``;
    if (podaci.length == 0){
        proizvod += `<p>No products are currently available.</p>`
    }
    else {
        for (let pr of podaci) {
        proizvod += `<div class="col">
                        <div class="card proizvod">
                            <img src="${pr.imgSrc}" class="card-img-top img-fluid" alt="${pr.naziv}">
                            <div class="card-body">
                                <h2 class="card-title"><b>${pr.naziv}</b></h5>
                                <p class="card-text"><span class=price>${pr.cena}$</span></br>${pr.tekst.opis}</br>Ingredients: ${pr.tekst.sastojci}</p>
                            </div>
                        </div>
                    </div>`
    }
    }
    
    document.querySelector(idBloka).innerHTML = proizvod;
}
