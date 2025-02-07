//Il progetto di per se mi è piaciuto molto, anche l'argomento mi ha affascinato da subito.
//Ho cercato di componentizzare il più possibile andando ad "allegerire" il più possibile il codice
// rendendolo più leggibile per me e più facilmente aggiornabile man mano che si desideri modificarlo.
//Ho creato un generatore di Card (le singole immagine della griglia), che mi ha permesso tramite prop di
// utilizzare una sola fetch per l'intero progetto. Inoltre cambiando il valore all'interno di Grid generator
//è possibile selezionare la saga che si preferisce in modo più o meno dinamico.
//Avevo pensato di collegarmi ad un form per lanciare la ricerca tramite nome del titolo, probabilmente ci proverò nel WE come
//personale esperimento.
// <h4 className="my-2">{this.props.saga.replace(/\+/g, " ")}</h4> questa singola linea di codice è stato per quanto semplice,
//è stato un mio personale traguardo.

import "./App.css";
import CustomNavBar from "./Components/CustomNavBar";
import GridGenerator from "./Components/GridGenerator";
import MyFooter from "./Components/MyFooter";
import MyHero from "./Components/MyHero";

function App() {
  return (
    <>
      <CustomNavBar />
      <MyHero />
      <GridGenerator />
      <MyFooter />
    </>
  );
}

export default App;
