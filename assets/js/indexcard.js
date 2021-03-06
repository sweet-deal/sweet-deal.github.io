var indexCard = [
    {
        "id" : 1,
        "href" : "assets/images/hearts.jpg",
        "naziv" : "Gift for a loved one",
        "tekst" : "Our specially made and decorated products are a perfect way to brighten someones day or to make it even sweeter! Show someone you care with our custom candy"
    },
    {
        "id" : 2,
        "href" : "assets/images/cupcakes.jpg",
        "naziv" : "Eco-friendly and eco-aware",
        "tekst" : "From every purchase you make we donate 5% to various organizations in our joint effort to elevate our ecological status"
    },
    {
        "id" : 3,
        "href" : "assets/images/gummies.jpg",
        "naziv" : "Vegan and gluten-free options",
        "tekst" : "Take a pick at some of our specially prepared vegan and gluten-free sweets! We use only the best, organic products"
    },
    {
        "id" : 4,
        "href" : "assets/images/macarons.jpg",
        "naziv" : "Delivery, free of charge",
        "tekst" : "For every purchase over 20$ or containing more than 5 products, we will deliver the goods to your doorstep for free!"
    }
]


this.ispisIndexCard(indexCard, "#index-cards");

function ispisIndexCard(podaci, idBloka){
    let html=``;
    for (let card of podaci){
        html += `<div class="col">
          <div class="card">
            <img src="${card.href}" class="card-img-top" alt="${card.naziv}" />
            <div class="card-body">
              <h5 class="card-title">${card.naziv}</h5>
              <p class="card-text">
                ${card.tekst}
              </p>
            </div>
          </div>
        </div>`
    }
    $(idBloka).html(html);
}