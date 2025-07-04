const prodotti = {
  ushanka1: {
    titolo: "Ushanka “Colomba Marcia”",
    descrizione: "Questa ushanka sa di piccione carbonizzato e cemento bagnato.",
    materiali: "Pelle sintetica, feltro post-sovietico, piume vere di dubbia origine",
    manutenzione: "Non lavare mai. Più puzza, più valore ha."
  },
  ushanka2: {
    titolo: "Ushanka “Asfalto Sanguinante”",
    descrizione: "Nata da una rissa fuori dal rave. Protegge dal freddo e dagli sbirri.",
    materiali: "Cotone grezzo, nylon bruciato, cuciture con filo da pesca",
    manutenzione: "Solo a secco, o in benzina. Poi accendi e corri."
  }
};

function apriScheda(id) {
  const dati = prodotti[id];
  document.getElementById("titolo-prodotto").innerText = dati.titolo;
  document.getElementById("descrizione-prodotto").innerText = dati.descrizione;
  document.getElementById("materiali").innerText = dati.materiali;
  document.getElementById("manutenzione").innerText = dati.manutenzione;
  document.getElementById("scheda-prodotto").classList.remove("hidden");
}

function chiudiScheda() {
  document.getElementById("scheda-prodotto").classList.add("hidden");
}
