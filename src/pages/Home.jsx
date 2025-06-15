import { Carousel, Container } from "react-bootstrap";

function Home() {
  
  return (
    <>
      <Container className="mb-5 border-0 w-50 p-0">
        <h1 className="text-center my-3 w-100 home-title">Bienvenido a nuestro e-commerce</h1>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 object-fit-cover"
              src="https://m.media-amazon.com/images/I/71w8BcErW2L._AC_SL1500_.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 object-fit-cover"
              src="https://www.simplestore.com.ar/v2/wp-content/uploads/2024/02/p33-015_1665673073-6348277139b55-jpg.webp"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}
export default Home;
