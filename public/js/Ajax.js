class Ajax {
    constructor(token) {
        this.token = token;
    }
    getAjax(apivegpont, myCallback) {
        const tomb = [];
        $.ajax({
            url: apivegpont,
            type: "GET",
            success: function (result) {
                console.log(result)
                result.forEach((element) => {
                    tomb.push(element);
                });
                myCallback(tomb);
            },
        });
    }
    putAjax(fajlnev, adat, id) {
        $.ajax({
            headers: { "X-CSRF-TOKEN": this.token },
            url: fajlnev + "/" + id,
            type: "PUT",
            data: adat,
            success: function (result) {

            },
        });
    }
    deleteAjax(apivegpont, id) {

        $.ajax({
            headers: { "X-CSRF-TOKEN": this.token },
            url: apivegpont + "/" + id,
            type: "DELETE",
            success: function (result) {
               console.log(result)
            }
        });
    }
    postAjax(apivegpont, adat) {

        adat._token = this.token;
        $.ajax({
            headers: { "X-CSRF-TOKEN": this.token },
            url: apivegpont,
            type: "POST",
            data: adat,
            success: function (result) {
                console.log(result);
            },
        });
    }
}
