import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation,
  MDBCard, MDBCardTitle, MDBCardImage,
  MDBCardBody, MDBCardText, MDBIcon 
} from "mdbreact";
import "./nursery.css";

const Nursery = () => {
  
    return (
      <div>
        <div id="apppage">
          
          <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer>
                <MDBRow>
                  <MDBCol
                    md="6"
                    className="white-text text-center text-md-left mt-xl-5 mb-5"
                  >
                    <MDBAnimation type="fadeInLeft" delay=".3s">
                      <h1 className="h1-responsive font-weight-bold mt-sm-5">
                        Elimu ya awali
                      </h1>
                      <hr className="hr-light" />
                      <h6 className="mb-4">
                        Hayatul Islamiya imekuwa ikitoa elimu ya wali kwa ubora wa hali ya juu kabisa,
                        tumekuwa tukitoa elimu hii kwa gharama nafuu kabisa kuanzia mwaka 1998.
                      </h6>
                      <MDBBtn outline color="white">
                        Zaidi ...
                      </MDBBtn>
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="6" xl="5" className="mt-xl-5">
                    <MDBAnimation type="fadeInRight" delay=".3s">
                      <img
                        src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                        alt=""
                        className="img-fluid"
                      />
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
          </MDBView>

          <MDBContainer>
            <MDBRow className="py-5">
              <MDBCol md="12" className="text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          </div>
          <div>
            <MDBRow className="mx-1">
              <MDBCol md="4" className="mb-4 mb-md-0">
                <section>
                  <MDBCard narrow>
                    <MDBView hover cascade>
                      <MDBCardImage src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="Card image cap"></MDBCardImage>
                      <MDBMask waves className="img-gradient"></MDBMask>
                    </MDBView>
                    <MDBCardBody cascade>
                      <h5 className="pink-text"><MDBIcon icon="utensils" /> Culinary</h5>
                      <MDBCardTitle>Elimu ya Dini</MDBCardTitle>
                      <MDBCardText>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</MDBCardText>
                      <MDBBtn color="unique">Button</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </section>
              </MDBCol>
              <MDBCol md="4" className="mb-4 mb-md-0">
                <section>
                  <MDBCard narrow>
                    <MDBView hover cascade>
                      <MDBCardImage src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="Card image cap"></MDBCardImage>
                      <MDBMask waves className="img-gradient"></MDBMask>
                    </MDBView>
                    <MDBCardBody cascade>
                      <h5 className="pink-text"><MDBIcon icon="utensils" /> Culinary</h5>
                      <MDBCardTitle>Elimu ya mazingira</MDBCardTitle>
                      <MDBCardText>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</MDBCardText>
                      <MDBBtn color="unique">Button</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </section>
              </MDBCol>
              <MDBCol md="4" className="mb-4 mb-md-0">
                <section>
                  <MDBCard narrow>
                    <MDBView hover cascade>
                      <MDBCardImage src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="Card image cap"></MDBCardImage>
                      <MDBMask waves className="img-gradient"></MDBMask>
                    </MDBView>
                    <MDBCardBody cascade>
                      <h5 className="pink-text"><MDBIcon icon="utensils" /> Culinary</h5>
                      <MDBCardTitle>Michezo kwa Afya</MDBCardTitle>
                      <MDBCardText>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</MDBCardText>
                      <MDBBtn color="unique">Button</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </section>
              </MDBCol>
            </MDBRow>
        </div>
      </div>
    );
  
}

export default Nursery;