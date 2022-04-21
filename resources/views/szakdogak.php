<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content=<?php $token = csrf_token();
                                    echo $token; ?>>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/Ajax.js"></script>
    <script src="js/Szakdoga.js"></script>

    <script src="js/script.js"></script>
    <link rel="stylesheet" href="css/stilus.css">
    <title>Li Richárd</title>
</head>

<body>
    <main>
        <header>
            <h1>Szakdogák</h1>
        </header>
        <article>
            <table id="szakdogak">
            </table>
        </article>
        <section>
            <fieldset>
                <form action="" method="post">

                    <label for="szakdoga_nev">Szakdolgozat Címe:</label>
                    <input type="text" id="szakdoga_nev" name="szakdoga_nev">
                    <label for="tagokneve">Készítők neve</label>
                    <input type="text" id="tagokneve" name="tagokneve">
                    <label for="oldallink">Az oldal elérhetősége</label>
                    <input type="text" id="oldallink" name="oldallink">
                    <label for="githublink">Github elérhetősége</label>
                    <input type="text" id="githublink" name="githublink">

                </form>
                <input type="button" value="Új" class="btn uj">
            </fieldset>

        </section>
    </main>
</body>

</html>