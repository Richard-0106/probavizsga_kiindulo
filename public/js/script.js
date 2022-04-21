$(function () {
    const token = $('meta[name="csrf-token"]').attr("content");
    const myAjax = new Ajax(token);

    myAjax.getAjax("/szakdogak", tablazatKiir)

    $(window).on("Torles", (esemeny) => {
        console.log("kitörlöm a ", esemeny.detail.szakdoga_nev)

        myAjax.deleteAjax("/szakdogak", esemeny.detail.id)
    })
    $(window).on("Modositas", (esemeny) => {
        console.log("Modositom a ", esemeny.detail.szakdoga_nev)

        myAjax.deleteAjax("/szakdogak", esemeny.detail.id)
    })
    $(".uj").on("click", () => {
        console.log("uj termékre vér")
        let adat = {
            szakdoga_nev: $("#szakdoga_nev").val(),
            tagokneve: $("#tagokneve").val(),
            oldallink: $("#oldallink").val(),
            githublink: $("#githublink").val()
        }
        console.log(adat)
        myAjax.postAjax("/szakdogak", adat)

    })
    function tablazatKiir(tomb) {
        console.log(tomb)
        $("#szakdogak").empty()
        $("#szakdogak").append(
            "<thead><th>Szakdolgozat címe</th><th>Készítő neve</th><th>Github link</th><th>Szakdolgozat elérhetősége</th><th>Gombok</th></thead>")
        $("#szakdogak").append("<tbody></tbody>")


        for (let index = 0; index < tomb.length; index++) {
            const element = tomb[index];
          const elem=  $("<tr></tr>").appendTo("#szakdogak")
          new Szakdoga(elem,element)

        }

    }

})