import React from "react";
import axios from 'axios';

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask,
MDBListGroup, MDBListGroupItem, MDBIcon, MDBView, MDBBtn } from "mdbreact";

class BlogDetail extends React.Component {

  state = {
    article: {}
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/articles/${articleID}`)
    .then(res => {
      this.setState({
        article: res.data
      })
      console.log(res.data)
    })
  }

  render() {
    return(
      <div>
      <MDBContainer fluid>
      <br />
      <br />
        <MDBRow>
          <MDBCol lg="7" xl="8">

            <h3 className="font-weight-bold mb-3 p-0">
              <strong>{ this.state.article.title }</strong>
            </h3>
            <p>
              by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
            </p>

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

            <br />
            <br />
            <p className="dark-grey-text">
              { this.state.article.content }
            </p>
            
          </MDBCol>
          <MDBCol lg="5" xl="4">
            <MDBListGroup style={{ width: "22rem" }}>
              <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
              <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
              <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
              <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
              <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
            </MDBListGroup>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        </MDBContainer>
        </div>
      )
  }
}

export default BlogDetail;