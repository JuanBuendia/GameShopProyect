import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";

function Library() {
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col className="col-3">
            <ListGroup as="ol" numbered className="bg-dark">
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start bg-dark text-white"
              >
                <Image
                  src="https://as.com/meristation/imagenes/2021/09/10/noticias/1631258356_385205_1631258464_noticia_normal_recorte1.jpg"
                  rounded
                  alt="Image"
                  width="25"
                  height="25    "
                />
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Image test</div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start bg-dark text-white"
              >
                <Image
                  src="https://as.com/meristation/imagenes/2021/09/10/noticias/1631258356_385205_1631258464_noticia_normal_recorte1.jpg"
                  rounded
                  alt="Image"
                  width="25"
                  height="25    "
                />
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Image test</div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start bg-dark text-white"
              >
                <Image
                  src="https://as.com/meristation/imagenes/2021/09/10/noticias/1631258356_385205_1631258464_noticia_normal_recorte1.jpg"
                  rounded
                  alt="Image"
                  width="25"
                  height="25    "
                />
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Image test</div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className="col-9 bg-light bg-gradient">
            <Row>
              <Col className="col-3">
                <Image
                  src="https://oyster.ignimgs.com/wordpress/stg.ign.com/2020/07/halo_infinite_keyart_primary_vertical-748a0db8be6c497d86f83ad76265060f-720x915.png"
                  rounded
                  alt="Image"
                  width="240"
                  height="305"
                />
              </Col>
              <Col className="col-9 g-5 mt-3">
                <Row>
                  <h2>Halo Infinite</h2>
                </Row>
                <Row>
                  <h3>
                    <br />
                  </h3>
                </Row>
                <Row>
                  <h3>Xbox Game Studios</h3>
                </Row>
                <Row>
                  <h3>
                    <br />
                  </h3>
                </Row>
                <Row>
                  <h4>Multiplayer</h4>
                  <h4>Campaing history</h4>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4 g-1">
              <Button className="col-3" variant="success" width="100%">
                Play
              </Button>
              <Col className="col-1"></Col>
              <Button className="col-3" variant="secondary">
                Tiempo Jugado
              </Button>

              <Col className="col-6 bg-dark"></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Library;
