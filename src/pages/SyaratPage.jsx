import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";
const SyaratPage = () => {
  return (
    <div className="syarat">
      <div className="syarat-page min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold mb-2">Syarat & Ketentuan</h1>
              <p className="text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio, consequatur quo tempore, exercitationem necessitatibus saepe ullam ipsum soluta, explicabo corrupti. Sit quos a similique neque laudantium explicabo
                dolores illum, iure necessitatibus, deserunt ab distinctio ratione ex? Repellat ipsam totam tempora, vel nesciunt, et sequi amet ab numquam accusamus aliquid?
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">1. Lorem</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, maiores quia assumenda harum non ipsa maxime ipsum quisquam molestiae eius placeat nostrum aut nemo consequuntur et quidem corrupti tempore doloribus facilis
                autem unde nisi dolores laudantium nesciunt? Doloribus, enim maiores?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique accusantium rem, numquam a recusandae porro. Tenetur harum eos enim velit similique voluptas modi accusantium asperiores quo molestias aspernatur,
                iusto ratione ipsa assumenda. Inventore ipsam, itaque corrupti, ad sed voluptas hic fugit quam earum consectetur ut vitae voluptatibus recusandae? Enim.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, consequatur labore maiores in explicabo sed ipsam ipsum nobis laboriosam minima doloribus autem ut reprehenderit nostrum eos ea dolorem quod quas, consequuntur
                ratione et omnis corporis excepturi? Exercitationem dicta aut illo!
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">2. Lorem</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit molestias optio veniam at repudiandae ducimus, obcaecati animi nemo eum numquam tenetur modi dicta saepe, vel quasi ipsum unde ab fuga accusantium libero
                distinctio corrupti quae facere cum. Expedita, velit adipisci.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit molestias optio veniam at repudiandae ducimus, obcaecati animi nemo eum numquam tenetur modi dicta saepe, vel quasi ipsum unde ab fuga accusantium libero
                distinctio corrupti quae facere cum. Expedita, velit adipisci.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="py-3">
              <h4 className="fw-bold">3. Lorem</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit molestias optio veniam at repudiandae ducimus, obcaecati animi nemo eum numquam tenetur modi dicta saepe, vel quasi ipsum unde ab fuga accusantium libero
                distinctio corrupti quae facere cum. Expedita, velit adipisci.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit molestias optio veniam at repudiandae ducimus, obcaecati animi nemo eum numquam tenetur modi dicta saepe, vel quasi ipsum unde ab fuga accusantium libero
                distinctio corrupti quae facere cum. Expedita, velit adipisci.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};
export default SyaratPage;
