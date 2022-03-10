window.onload = function(){
    $.ajax({
        url: "assets/data/indexCard.json",
        method: "get",
        dataType: "json",
        success: function(data){
            console.log(data);
            ispisIndexCard(data);
        },
        error: function(xhr){
            console.log(xhr);
        }
    })
}

function ispisIndexCard(podaci){
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
    $("#index-cards").html(html);
}