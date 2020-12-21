import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="grey" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Hayatul Islam
            iya</h5>
            <p>
              Pata fursa ya kutembelea sehemu mbalimbali nakujionea mambo yote yanayo patikana
              haya katika taasisi yaetu.
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">School Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">School Management</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Shule ya msingi</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Shule ya sekondari</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.necta.go.tz">NECTA</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.nacte.go.tz!">NACTE</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.moe.go.tz">Wizara ya elimu</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.moh.go.tz">Wizara ya Afya</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;