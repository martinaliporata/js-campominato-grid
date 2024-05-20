Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Creo una const per chiamare con query selector la grid nel DOM e un query selector per selezionare il bottone.

Con un ciclo for, creo le celle della griglia; creo un elemento article (che sarà la griglia) e il contenuto (il numero) che sarà in uno span.

Creiamo un event listener per cui se l'indice è pari, allora la cella si colorerà di azzuro; se inevce è dispari, allora la cella si colorerà di rosso.