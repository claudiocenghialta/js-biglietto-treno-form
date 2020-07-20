

//click su genera --> biglietto visibile con transition e invio dati inseriti a tabella
document.getElementById('genera').addEventListener('click',
    function () {
        //controlli dati inseriti
        var nomeCognome = document.getElementById('nome-cognome').value
        var km = parseInt(document.getElementById('km').value);
        var eta = document.getElementById('eta').value;
        while (nomeCognome == '' || nomeCognome.length < 2 || km <= 0 || eta == '--Seleziona un opzione--') {
            alert('controlla i dati inseriti');
            return '';
        }

        //visualizzo il biglietto
        var biglietto = document.getElementById('biglietto');
        biglietto.classList.remove("hidden");
        biglietto.classList.add("visible");
        //inserisco i dati nella tabella
        document.getElementById('td-name').innerHTML = nomeCognome;
        document.getElementById('td-carrozza').innerHTML = random(1, 9);
        document.getElementById('td-codTreno').innerHTML = random(90000, 99999);
        var messaggio = 'Tariffa standard';
        var costo = 0.21 * km;
        if (eta == 'minorenne') {
            costo -= costo * 20 / 100;
            messaggio = 'Sconto Minorenne';
        } else if (eta == 'over65') {
            costo -= costo * 40 / 100;
            messaggio = 'Sconto Over 65';
        }
        document.getElementById('td-sconto').innerHTML = messaggio
        document.getElementById('td-costo').innerHTML = costo.toFixed(2) + ' €';
    }
)

//click su annulla --> reset dati + biglietto invisibile + transition
document.getElementById('annulla').addEventListener('click', function () {
    //nascondo il biglietto
    var biglietto = document.getElementById('biglietto');
    biglietto.classList.remove("visible");
    biglietto.classList.add("hidden");
    //resetto i dati inseriti
    document.getElementById('nome-cognome').value = '';
    document.getElementById('km').value = 0
    document.getElementById('eta').selectedIndex = 0;
}
)

//DEFINISCO FUNZIONE RANDOM -------------
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}