var navMeni, social;

window.onload = function(){
    navMeni = [
        {
            "naziv" : "Home",
            "href" : "index.html"
        },
        {
            "naziv" : "Products",
            "href" : "products.html"
        },
        {
            "naziv" : "Contact Us",
            "href" : "contact-us.html"
        },
        {
            "naziv" : "Author",
            "href" : "author.html"
        }
    ]
    social = [
        {
            "naziv" : "Facebook",
            "href" : "https://www.facebook.com/"
        },
        {
            "naziv" : "Instagram",
            "href" : "https://www.instagram.com/"
        },
        {
            "naziv" : "Twitter",
            "href" : "https://www.twitter.com/"
        },
        {
            "naziv" : "Snapchat",
            "href" : "https://www.snapchat.com/"
        },
    ]
    
    
    this.ispisListiLinkova(navMeni, "#nav-meni");
    this.ispisListiLinkova(navMeni, "#nav-meni-futer");
    this.ispisListiLinkova(social, "#socials");
    
}
function ispisListiLinkova (podaci, idBloka){
    let html = `<ul>`;
    for (let li of podaci){
        html += `<a href="${li.href}"><li>${li.naziv}</li></a>`;
    }
    html += `</ul>`;

    $(idBloka).html(html);
}



