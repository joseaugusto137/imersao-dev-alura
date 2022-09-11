/*var filme1 = "WerckMeister Harmonies"
var filme2 = "Underground"
var filme3 = "Sunset Boulevard"
var filme4 = "Woman in the Dunes"

document.write("<p>" + filme1 + "</p>")
document.write("<p>" + filme2 + "</p>")
document.write("<p>" + filme3 + "</p>")
document.write("<p>" + filme4 + "</p>")*/

let listaFilmes = ["https://upload.wikimedia.org/wikipedia/en/0/06/Werckmeister_Harmonies.jpg", "https://newtonrocha.files.wordpress.com/2015/07/underground.jpg","https://upload.wikimedia.org/wikipedia/pt/f/f3/Sunset_Boulevard.jpg", "https://flxt.tmsimg.com/assets/p7490_v_v9_aa.jpg"]
listaFilmes.push("https://br.web.img3.acsta.net/c_310_420/pictures/210/108/21010802_20130606193222789.jpg")
listaFilmes.push("https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/49/22/20202984.jpg")
/*document.write("<p>" + listaFilmes[0] + "</p>")
document.write("<p>" + listaFilmes[1] + "</p>")
document.write("<p>" + listaFilmes[2] + "</p>")
document.write("<p>" + listaFilmes[3] + "</p>")*/

for(var i = 0; i<listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">")
}
//for (valor inicial; condição; expressão final)




