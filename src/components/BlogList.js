import React from "react";
import { Link } from "react-router-dom";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const BlogList = (props) => {

const articles = props.data;
  const listItems = articles.map((article) =>
      <span>
        <MDBRow>
          <MDBCol lg="5" xl="4">
            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7" xl="8">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>{ article.title }</strong>
            </h3>
            <p className="dark-grey-text">
              { article.content }
            </p>
            <p>
              by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
            </p>
            <MDBBtn color="primary" size="md">
              <a href={`/blog/${article.id}` }>Read More</a>
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        </span>
  );

  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Taarifa Mabalimbali
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Hapa utapata taarifa zote mpya kuhusu yale yote yanayoendelea an 
          kutokea katika taasisi ya Hayatul Islamiya Complex. Hii inajumuisha 
          shule zetu zote 
          (Shule ya Awali, Shule ya Msingi na Shule ya Sekondari). Pia utapata fursa ya 
          kujua maendeleo ya ujenzi wa zahanati mpya ya Hayatul Islamiya.
        </p>

          { listItems }

      </MDBCardBody>
    </MDBCard>
  );
}

export default BlogList;