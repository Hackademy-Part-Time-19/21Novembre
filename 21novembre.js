
let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]
console.log(listaProdotti)

let listaOrdinata =listaProdotti.sort (function (prodotto1, prodotto2){
    return prodotto1.prezzo - prodotto2.prezzo
})
console.log(listaOrdinata)

let listaNome = listaProdotti.sort((a, b) => {
    if (a.nome < b.nome) {
      return -1;
    }
    if (a.nome > b.nome) {
      return 1;
    }
  
    return 0;
  });

  function filtraListaPrezzo(listaProdotti) {
    let listaFiltrata = [];
    for (let i=0; i<listaProdotti.lenght; i++) {
        if (listaProdotti[i].prezzo <=250) {
            listaFiltrata.push(listaProdotti[i])
        }
    }
    return listaFiltrata;
  }

  console.log (listaProdotti)

  let url = "https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999"

  let coppiaParametri = url.split("?")[1]

  let chiaveValore = coppiaParametri.split("&")

  chiaveValore.forEach(element => {
    let coppia = element.split ("=")
    console.log(coppia[0] + ":" + coppia[1])
 });


  function checkPalindroma(stringaDaControllare) {
    let palindroma = true;

    let stringaSenzaPunteggiature = stringaDaControllare.replace(/\W/g, "")
    let stringaArray = stringaSenzaPunteggiature.split("")
    let stringaArrayReverse = stringaArray.reverse()

    for (let i = 0; i < stringaArrayReverse.lenght; i++) {
        if (stringaSenzaPunteggiature[i] != stringaArrayReverse[i]) {
            palindroma = false
        }
    }

    return palindroma
  } 

  console.log("La stringa è palindroma? " + checkPalindroma("grazie a tutti"))