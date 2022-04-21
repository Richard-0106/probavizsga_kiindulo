class Szakdoga {
    constructor(elem, adat) {
        this.elem = elem
        this.adat = adat
        this.megjelenit()
        this.torles = this.elem.find(".torles")
        this.modositas = this.elem.find(".modositas")
        this.torles.on("click", () => {
            this.torlesEsemeny()
        })
        this.modositas.on("click", () => {
            this.modositEsemeny()
        })
      
    }
    megjelenit(){
        this.elem.append("<td>" + this.adat.szakdoga_nev + "</td>")
        this.elem.append("<td>" + this.adat.tagokneve+ "</td>")
        this.elem.append("<td>" + this.adat.githublink + "</td>")
        this.elem.append("<td>" + this.adat.oldallink + "</td>")
        this.elem.append("<td>" + "<input type='button' value='Törles' class='torles'>" + "</td>")
        this.elem.append("<td>" + "<input type='button' value='Módosítas' class='modositas'>" + "</td>")
        this.elem.append()
    }
    torlesEsemeny() {
        let esemeny = new CustomEvent("Torles", { detail: this.adat })
        window.dispatchEvent(esemeny)
    }
    modositEsemeny() {
        let esemeny = new CustomEvent("Modositas", { detail: this.adat })
        window.dispatchEvent(esemeny)
    }
}

