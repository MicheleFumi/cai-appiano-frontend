export default function Footer() {
    return (
        <>
            <footer className="text-center" style={{ height: '10rem', paddingTop: '2rem' }}>
                <div className="container">
                    <section>
                        <p className="w-lighter m-0">
                            CLUB ALPINO ITALIANO - SEZIONE DI APPIANO DEL CAI ALTO ADIGE (ONLUS DPGP nr. 182/1/1
                            del 18.09.98)<br />
                            39057 APPIANO – PIAZZA A. MAGNUS 1 - C.F. 80010460212 - Tel. 0471/348932
                            <a href="#" className="text-decoration-none text-reset"> - Email: appiano.a.a@cai.it</a>
                        </p>
                    </section>
                    <section>
                        <a data-mdb-ripple-init className="btn btn-outline btn-floating" href="https://www.facebook.com/CaiAppiano/"
                            role="button">
                            <i className="fa-brands fa-square-facebook fa-xl"></i>
                        </a>
                    </section>

                    <a href="#" className="text-decoration-none text-reset w-lighter">Cookie & Privacy policy</a>
                </div>
            </footer>
        </>
    )
}
