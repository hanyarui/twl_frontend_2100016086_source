import React from "react";
import { Carousel } from "react-bootstrap";
import caro1 from "./../../assets/caro1.jpg";
import caro2 from "./../../assets/caro2.jpg";
import caro3 from "./../../assets/caro3.jpg";
import "./../../App.css";

function Home() {
  return (
    <div className="content">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={caro1} alt="First slide" />
          <Carousel.Caption>
            <div className="konten-home">
              <p>
                Perusahaan Ruinz adalah perusahaan teknologi inovatif yang
                berfokus pada pengembangan aplikasi berkinerja tinggi. Dengan
                tim pengembang yang berpengalaman dan antusias, kami
                mendedikasikan diri untuk menciptakan solusi perangkat lunak
                yang memecahkan masalah dunia nyata. Kami percaya bahwa
                teknologi dapat membantu mengubah cara orang hidup dan bekerja,
                dan kami berkomitmen untuk memberikan produk-produk yang
                memenuhi harapan pelanggan kami.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={caro2} alt="Second slide" />

          <Carousel.Caption>
            <div className="konten-home">
              <p>
                Perusahaan Ruinz adalah perusahaan konsultan IT global yang
                menyediakan solusi teknologi tingkat tinggi untuk bisnis di
                seluruh dunia. Dengan keahlian dalam pengembangan perangkat
                lunak, keamanan informasi, dan analisis data, kami membantu
                perusahaan meningkatkan efisiensi operasional, mengoptimalkan
                keamanan data, dan menghasilkan wawasan berharga dari data
                mereka. Kami berkomitmen untuk memberikan layanan berkualitas
                tinggi dan solusi yang inovatif kepada klien kami.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={caro3} alt="Third slide" />

          <Carousel.Caption>
            <div className="konten-home">
              <p>
                Perusahaan Ruinz adalah startup teknologi yang berfokus pada
                pengembangan aplikasi mobile revolusioner. Kami memiliki tim
                berbakat yang terdiri dari desainer UI/UX, pengembang perangkat
                lunak, dan profesional kreatif lainnya yang berdedikasi untuk
                menciptakan pengalaman pengguna yang menakjubkan. Dengan fokus
                pada inovasi dan kualitas, kami berusaha menciptakan aplikasi
                yang mudah digunakan, elegan, dan berdampak positif bagi
                kehidupan sehari-hari pengguna kami.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Home;
