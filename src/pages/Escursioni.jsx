import Carousel from '../components/Carousel'


export default function Escursioni() {
    



    return (
        

        <>
            <Carousel title='ESCURSIONI' />
            

            <div className="container py-3">
                <div className="subtitle my-3">
                    <h2>GUIDA ALLE MERAVIGLIE </h2>
                </div>
                <div>
            <iframe src="documents/Libretto2025.pdf" className="border border-3 border-black" width="100%"
                height="1000px" type="application/pdf">
            </iframe>
        </div>
            </div>

        </>
    )
}