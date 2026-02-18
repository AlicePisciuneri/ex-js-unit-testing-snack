TEMPLATE UNIVERSALE PER SCRIVERE TEST (JEST)

Quando devi testare qualcosa, il cervello deve seguire SEMPRE questo flusso.

## 🚦 STEP 0 — Prima di scrivere codice chiediti:
# Cosa deve fare questa funzione?
E scrivilo come frase.
Esempio:
# la funzione divide deve dividere due numeri

## 🚦 STEP 1 — Scrivi il test (RED)
Struttura base SEMPRE uguale:

test("descrizione", () => {
});
## La descrizione deve spiegare il comportamento.NON: test divide MEGLIO: "divide restituisce il quoziente"

## 🚦 STEP 2 — ARRANGE (preparo i dati) Dentro il test preparo i valori.
Schema:
const input = ... oppure direttamente: funzione(10,2)

## 🚦 STEP 3 — ACT (eseguo) Eseguo la funzione.
const result = funzione(...)

## 🚦 STEP 4 — ASSERT (verifico) Qui entra Jest.

expect(result).toBe(...)

# Template completo base

Questo è lo stampino mentale:

test("descrizione", () => {
  const result = funzione(input);

  expect(result).toBe(output);
});

Il 70% dei test è questo.

# 🧠 TEMPLATE CASI SPECIALI (quelli del live coding)
# 🧩 1️⃣ Quando testi ERRORI (toThrow)

## NON passi il risultato. Passi una funzione.

test("divide lancia errore se zero", () => {
  const operazione = () => divide(10,0);

  expect(operazione).toThrow();
});

# 🧩 2️⃣ Quando testi OGGETTI o ARRAY
NON usare toBe. Usa: toEqual()
Template:

expect(result).toEqual(obj);

# 🧩 3️⃣ Quando controlli se contiene
expect(array).toContain(valore);

# 🧩 4️⃣ Booleani
toBeTruthy()
toBeFalsy()

# 🧩 5️⃣ Lunghezza array
expect(array).toHaveLength(3);

🧠 TEMPLATE MENTALE COMPLETO 

Quando vedi una funzione nuova:

Fai SEMPRE queste domande:

1️⃣ caso normale?
2️⃣ caso limite?
3️⃣ caso errore?

# Esempio reale (schema mentale)

Funzione divide:

✔ divide normale → 10 / 2 = 5
✔ caso limite → numeri negativi
✔ errore → divisione per zero


3 test = funzione robusta.
Non scrivere 1 test enorme Scrivi: molti test piccoli.
Perché quando uno fallisce sai subito dove guardare.

### 🔥 SUPER TEMPLATE 
Questo è il tuo stampino universale:

test("DESCRIZIONE COMPORTAMENTO", () => {

  // ARRANGE
  const input = ...
  
  // ACT
  const result = funzione(input)

  // ASSERT
  expect(result).MATCHER(output)

}); 
## Quando devi scrivere test chiediti:
"Cosa potrebbe rompere questa funzione?"

## Come funziona in pratica (workflow vero)
1) Cosa devi creare un progetto (una cartella) 
2) Dentro la cartella progetto, in console: npm init -y
4) poi installo jest     npm install jest -D
5) Apri package.json e cerca la sezione "scripts".
6) modificalo così:
{
  "name": "snack-jest",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
  "test": "jest",
    "test:watch": "jest --watchAll"
  }
}
5) Quindi quando scrivi: npm run test npm traduce in: jest oppure quando scrivi: npm run test:watch
npm fa: jest --watchAll
6) creiamo il file per il primo snack di prova TDD lo chiamo getInitials.js poi creo un altro file per il test e lo chiamo getInitials.test.js
7) facciamo fallire il primo test
8) LO SNACK CHIEDE Creare un test che verifichi la seguente descrizione:
   👉 "La funzione getInitials restituisce le iniziali di un nome completo."
9) nel file getInitials.test.js scrivo
       const { getInitials } = require("./getInitials");

       test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
      const result = getInitials("Mario Rossi");
       expect(result).toBe("MR");
        });
10) test fallito FAIL RED

11) GREEN (step minimo) — Importare la funzione nel test Apri getinItial.test.js 
12) scrivo funzione corretta 
    function getInitials(fullName) {
    const names = fullName.split(" ");
    return names[0][0] + names[1][0];
}

SPIEGAZIONE 
function getInitials(fullName) {  creo una funzione
# prende una stringa tipo "Mario Rossi"
const names = fullName.split(" ");

# .split(" ") = divide la stringa quando trova uno spazio

"Mario Rossi" diventa:  ["Mario", "Rossi"]
names è quindi un array con due parole.
# return names[0][0] + names[1][0];
names[0] = prima parola → "Mario"
[0] dopo = prima lettera → "M"
names[1] = seconda parola → "Rossi" [0] = "R"

+ unisce le due lettere → "MR"

il test passa!


# Snack 2
Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug restituisce una stringa in lowercase."

1) Nella tua cartella progetto crea un file chiamato: createSlug.test.js

Nel web uno slug è: una versione semplice e pulita di un testo, usata negli URL.
Stiamo costruendo una funzione che: prende un testo normale e lo rende pronto per essere usato in un URL.
2) creo il test nel file test 
   test('creare una funzione che restituisca una stringa in lowercase', () => {
    const result = createSlug("QUESTO È UN TEST ");    chiamo la funzione con una stringa tutta maiuscola.
                                                       salvo il risultato in result.
    expect(result).tobe("questo è un test");
    });

3) Vai in console Lancia: npm run test  FALLITO!! OK 





