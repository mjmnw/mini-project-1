import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";


function AboutUsPage () {
    return (
        < >
        <div className="bg-black ">
        <Navbar/>
        <div className="justify-center px-[500px]  ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RBjSr7g_gk4nmI0ofH8lk2rHxKRAx6zerQ&usqp=CAU"/>
        </div>
        <div className=" h-4 w-[400px] pt-20 pl-20">    
            <img src="https://killtownbookings.com/wp-content/uploads/component_killtown-deathfest.jpg"/>
                 
            </div>
        <div className=" text-sm  ml-[400px] text-white pr-12  ">
                The Sounds Project bermula pada tahun 2015 dimana empat orang anak muda dari satu kampus yang bermimpi untuk membuat platform musik berbasis kampus-komunitas, yang dapat diterima oleh publik dan pecinta musik secara universal. Dengan hanya berlandaskan semangat dan passion, mereka mulai menginisiasi gigs-gigs kecil dan mengubah event medium secara lokal.

                Seiring berjalannya waktu, dari gigs lokal, maupun kampus internal, The Sounds Project terus berkelanjutan dan dikelola oleh para pendirinya setelah mereka lulus kuliah. Dan melalui belasan trial-error event, The Sounds Project menjelma menjadi kolektif musik yang sedikit demi sedikit dikenal oleh para penikmat, sebagai platform penyelenggara konser yang konsisten di area Jakarta dan Depok.

                Selama kurang lebih lima tahun – kini memasuki tahun ke enam, The Sounds Project menjelma sebagai wadah musik berskala nasional yang menyuguhkan puluhan band lokal maupun internasional dalam satu kesatuan festival, dan menjadi benchmark & ​​sumber inspirasi-sekaligus pemicu munculnya berbagai alternatif festival lain, yang banyak di inisiasi oleh anak muda sekarang.

                Sekarang, The Sounds Project menawarkan bahwa sebagai brand ini tidak memiliki apapun/siapapun yang ada dibaliknya, tetapi merepresentasikan diri sebagai festival milik semua orang, milik komunitas, musisi, sponsor, vendor, maupun stakeholder lainnya, dan yang terutama, The Sounds Project adalah milik semua penonton yang datang.

                Berbekalkan prinsip “Where The Dreamers Go”, The Sounds Project akan terus menjadi rumah bagi anak muda yang berani bermimpi & mewujudkan karya kreatifnya tanpa peduli halangan apapun. Tempat mereka belajar untuk menjadi versi terbaik dari diri mereka, melalui kerja nyata untuk mewujudkan festival yang punya konsep, delivery serta eksekusi yang sempurna.
        </div>
        <div className="pt-12">
            <Footer/> 
        </div>
        </div>
        </>
    )
}

export default AboutUsPage;