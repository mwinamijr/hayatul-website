import React from "react";
import { PageHeader } from 'antd';
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

import './styles.css';

const AboutPage = () => {
  return (
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Ijue taasisi ya Hayatul Islamiya Complex
        </h2>
        <p className="lead grey-text w-responsive mx-auto mb-5">
          Hayatul Islamiya Complex ni taasisi ya kiislamu iliyo chini ya
          Baraza Kuu la Waislamu Tanzania (BAKWATA). Taasisi hii inamilikiwa kihalali
          kabisa na wanajumuiya wa Hayatul Islamiya Complex ambao wametoa ahadi mbele ya Allah(S.W.)
          kuitumikia na kujitolea kikamilifu ili kuweza kupata radhi zake.
        </p>

				<MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
              alt=""
            />
          </MDBCol>
          <MDBCol lg="7">
            <PageHeader
              className="site-page-header"
              title="Madhumuni ya taasisi"
            />
            <br />
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Elimu</h5>
                <p className="grey-text">
                Kujenga, kusimamia na kugharamia uendeshaji wa miradi ya elimu 
                kuanzia Shule za Awali, za Msingi na za Sekondari.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Afya</h5>
                <p className="grey-text">
                Kujenga , kusimamia na kugharamia uendeshaji wa miradi ya Afya
                 kuanzia Zahanati hadi vituo vya afya na hospitali.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Udhamini</h5>
                <p className="grey-text">
                Kudhamini na kugharamia elimu kwa vijana wa kiislamu wenye uwezo
                 wa kuendelea na masomo lakini hawana uwezo wa kugharamia elimu hiyo.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Kilimo na Biashara</h5>
                <p className="grey-text">
                Kutafuta na kumiliki maeneo ya kilimo ili kulima mazao ya chakula na mboga
                 zitzkazotumika katika vitengo vya Jumuiya ili kupunguza gharama za 
                 uendeshaji katika vitengo hivyo . 
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
				<br />
        <MDBRow>
          <MDBCol md="6">
            <MDBIcon icon="chart-area" size="3x" className="red-text" />
            <h5 className="font-weight-bold my-4">Dira</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <MDBIcon icon="book" size="3x" className="cyan-text" />
            <h5 className="font-weight-bold my-4">Dhamira</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default AboutPage;