import Carousel from "../components/Carousel";
export default function Home() {
  const events = [
    {
      id: 1,
      title: "Escursione nelle Dolomiti",
      description:
        "Un'escursione guidata adatta a tutta la famiglia tra le vette più suggestive.",
      image: "/images/pic2.webp",
      alt: "Escursione nelle Dolomiti",
    },
    {
      id: 2,
      title: "Ferrata sul Grappa",
      description: "Un'avventura sulla ferrata più emozionante del Grappa.",
      image: "/images/pic3.webp",
      alt: "Ferrata sul Grappa",
    },
    {
      id: 3,
      title: "Viaggio alla Diga del Vajont",
      description:
        "Un viaggio esplorativo alla scoperta della storia della Diga del Vajont.",
      image: "/images/pic1.webp",
      alt: "Viaggio alla Diga del Vajont",
    },
  ];
  return (
    <>
      <Carousel title="BENVENUTI" />

      <div className="container">
        <section className="row align-items-center mt-4 mb-5">
          <div className="col-md-6">
            <h2>Chi Siamo</h2>
            <p>
              Il CAI (Club Alpino Italiano) di Appiano è una realtà ben radicata
              nella comunità montana e un punto di riferimento per gli
              appassionati di outdoor e natura. Situato nel cuore delle
              Dolomiti, il CAI di Appiano si distingue per l'organizzazione di
              escursioni, attività didattiche e corsi per persone di ogni età e
              livello di preparazione. Le attività spaziano dalle semplici
              passeggiate in montagna a esperienze più impegnative, come ferrate
              e alpinismo, sempre all'insegna della sicurezza e del rispetto per
              l'ambiente.
            </p>
            <p>
              Il CAI di Appiano non è solo un centro per escursioni, ma anche un
              luogo di incontro per chi condivide la passione per la montagna.
              Con eventi che vanno da uscite settimanali a grandi escursioni nei
              periodi estivi e invernali, i soci hanno la possibilità di
              partecipare a esperienze indimenticabili, rafforzando lo spirito
              di gruppo e la connessione con la natura.
            </p>
            <p>
              Inoltre, vengono offerti corsi di formazione che spaziano
              dall'orientamento e la sicurezza in montagna fino alla
              preparazione alpinistica avanzata, contribuendo a formare nuovi
              appassionati e a mantenere viva la tradizione dell'alpinismo. Con
              una lunga storia di impegno sul territorio, il CAI di Appiano
              continua a essere un pilastro fondamentale per la valorizzazione e
              la conservazione del patrimonio montano
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/images/pic3.webp"
              alt="Montagne"
              className="img-fluid rounded"
            />
          </div>
        </section>

        {/* Eventi Recenti */}
        <section className="mb-5">
          <h2 className="mb-3">Prossimi Eventi</h2>
          <div className="row">
            {events.map((event) => (
              <div key={event.id} className="col-md-4">
                <div className="card">
                  <img
                    src={event.image}
                    className="card-img-top"
                    alt={event.alt}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">{event.description}</p>
                    <button className="btn btn-outline-secondary text-black">
                      Scopri di più
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mappa Rifugi */}
        <section className="mb-5">
          <h2 className="mb-3">Mappa dei Rifugi</h2>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.391678293126!2d11.2825!3d46.4561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDZNMjcnMjEuNiJOIDExwrAxNycyOS4yIkU!5e0!3m2!1sit!2sit!4v1615630182345"
              title="Mappa Rifugi"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}
