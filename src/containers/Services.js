import React from "react";
import { Link } from 'react-router-dom';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const ServicesPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Huduma zetu
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Taasisi ya Hayatul Islamiya Complex imekuwa ilitoa huduma mbali mbali zikiwemo
          elimu, afya na maji safi tangu kuanzishwa kwake mwaka 1998. Taasisi hii imekuwa
          ikiwahudumia wanajamii wa Bonga na maeneo jirani katika kuwapatia elimu bora na 
          yenye kukidhi matakwa ya serikali ya Jamhuri ya Muungano wa Tanzania.
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img srcset="https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, 
            https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" 
            class="photo-item__img" alt="Grayscale Photo of Opened Qur'an" data-image-width="4896" data-image-height="3264" 
            data-big-src="https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" 
            data-large-src="https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" 
            data-tiny-src="https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" 
            data-tiny-srcset="https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, 
            https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" 
            src="https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
            />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="book" className="pr-2" />
                Elimu
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Elimu ya Dini</strong>
            </h3>
            <p>
              Hayatul Islamiya Complex ilianzishwa kwa malengo ya kutoa huduma zote
              kwa kufuata misingi na taratibu zilizowekwa na dini ya Uislamu. Hivyo 
              katika kutoa elimu kwa vijana wetu, elimu ya dini imekuwa ni kipaumbele 
              cha kwanza katika utoaji wa elimu kwa ngazi zote za elimu.
            </p>
            <Link to="/education/religion">
            <MDBBtn color="success" size="md" className="waves-light ">
              Zaidi ...
            </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="book" className="pr-2" />
                Elimu
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Elimu ya Mazingira</strong>
            </h3>
            <p>
              Pamoja na utoaji wa elimu ya dini na malezi ya kiislamu kwa kiwango 
              cha hali ya juu kabisa taasisi ya Hayatul Islamiya Complex imekuwa ikitoa huduma 
              ya elimu ya mazingira kwa ubora na viwango vilivyowekwa na wizara ya 
              Elimu, Sayansi, Teknolojia na Ufundi. Tunawapatia vijana wetu elimu iliyo bora ili
              waweze kuwa na ujuzi wa kutosha ili kuutumikia Uislamu na taifa letu
               kikamilifu.
            </p>
            
            <Link to="/education/secular">
            <MDBBtn color="success" size="md" className="waves-light ">
              Zaidi ...
            </MDBBtn>
            </Link>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img srcset="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, 
            https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" 
            class="photo-item__img" alt="Text on Shelf" data-image-width="4261" data-image-height="2374" 
            data-big-src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260" 
            data-large-src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" 
            data-tiny-src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" 
            data-tiny-srcset="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, 
            https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" 
            src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
            />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://images.pexels.com/photos/60022/microscope-slide-research-close-up-60022.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940" 
                data-tiny-src="https://images.pexels.com/photos/60022/microscope-slide-research-close-up-60022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" 
                data-tiny-srcset="https://images.pexels.com/photos/60022/microscope-slide-research-close-up-60022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x, 
                https://images.pexels.com/photos/60022/microscope-slide-research-close-up-60022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500 2x" 
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="stethoscope" className="pr-2" />
                Afya
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Huduma ya Afya</strong>
            </h3>
            <p>
              Ni malengo ya taasisi ya Hayatul Islamiya Complex kutoa huduma ya Afya 
               itakayokuwa ikifuata misingi ya dini ya kiislamu kwani kama tunavyojua 
               waislamu bado tupo nyuma sana hasa katika upande wa huduma za afya.
               Kwa sasa taasisi ipo katika hatua nzuri kuelekea kwenye ujenzi wa 
               <strong>Kituo cha Afya</strong> ili tuwe huru katika utoaji wa huduma 
               hii huku tukiwa tunamcha Allah(S.W.)
            </p>
            <Link to="/health/progress">
            <MDBBtn color="indigo" size="md" className="waves-light ">
              Zaidi ...
            </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ServicesPage;