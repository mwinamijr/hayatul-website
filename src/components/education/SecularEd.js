import React from "react";
import { Link } from 'react-router-dom';

import {  MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBTable, MDBTableBody  } from "mdbreact";

const SecularEd = () => {
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>Elimu ya Mazingia</h2>
      <p className='grey-text w-responsive mx-auto mb-5'>
        Kama lilivyo lengo la taifa letu kuweza kuondoa ujinga,
        Taasisi ya Hayatul Islamiya Complex imeungana na juhudi za serikali katika 
        hili kwani tumekuwa tukitoa elimu ya mazingira kwa kufuata mitaala ya elimu
        kama ilivyoelekzwa na Wizara ya elimu ya Jamhuri ya Muungano wa Tanzania. 
         Sio kwa wanafunzi tu bali tumekuwa tukitoa elimu pia kwa watu wazima ambao wapo 
         tayari kujiendeleza katika nyanja hii ya elimu.
      </p>

      <MDBRow>
        <MDBCol md='12' className='mb-2'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url()'
            }}
          >
            <div className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded'>
              
              <h3 className='py-3 font-weight-bold'>
                <strong>Shule ya Awali</strong>
              </h3>
              <p className='pb-3'>
                Elimu ya awali ndio msingi wa elimu zote nasi pia tumejizatiti vizuri 
                katika kutoa elimu hii kwani ndio itakayo mjengea msingi mzuri wa 
                kuendelea na elimu ya msingi
              </p>
              <p>
              <h6 className='light-blue-text'>
                <MDBIcon icon='book' />
                <strong> Masomo ya Elimu ya awali.</strong>
              </h6>
              <ul>
                <li>Vitendo vya kuhesabu</li>
                <li>Vitendo vya kuandika</li>
                <li>Vitendo vya sayansi</li>
                <li>Vitendo vya kusoma</li>
                <li>Vitendo vya kuhesabu</li>
                <li>Vitendo vya kuhesabu</li>
              </ul>
            <Link to="/education/nursery">
              <MDBBtn color='success' rounded size='md'>
                 zaidi ...
                </MDBBtn>
            </Link>
              </p>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='12' className='mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url()'
            }}
          >
            <div className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded'>
              
              <h3 className='py-3 font-weight-bold'>
                <strong>Shule ya Msingi</strong>
              </h3>
              <p className='pb-3'>
                Elimu ya msingi ndio inamjenga na kumuandaa mwanafunzi ili awe tayari
                 kuingia katika ulimwengu wa kielimu, hivyo katika kutoa elimu hii ya msingi 
                 tumekuwa katika ubora wa hali ya juu kabisa.
                 <hr />
                 Elimu hii ya msingi kwa shule ya Msingi Hayatul Islamiya inatolewa kwa lugha 
                 ya <strong>Kiswahili.</strong>
              </p>
              <p>
              <h6 className='light-blue-text'>
                <MDBIcon icon='book' />
                <strong> Masomo ya Elimu ya Msingi.</strong>
              </h6>
              <ul>
                <li>Hisabati</li>
                <li>Sayansi</li>
                <li>Maarifa ya jamii</li>
                <li>Kiswahili</li>
                <li>English</li>
              </ul>
              <hr />
              <Link to="/education/primary">
              <MDBBtn color='success' rounded size='md'>
                 zaidi ...
                </MDBBtn>
            </Link>
              </p>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='12' className='mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url()'
            }}
          >
            <div className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded'>
              
              <h3 className='py-3 font-weight-bold'>
                <strong>Shule ya Sekondari - <em>O-Level</em></strong>
              </h3>
              <p className='pb-3'>
                Elimu ya awali ndio msingi wa elimu zote nasi pia tumejizatiti vizuri 
                katika kutoa elimu hii kwani ndio itakayo mjengea msingi mzuri wa 
                kuendelea na elimu ya msingi
              </p>
              <p>
              <h6 className='light-blue-text'>
                <MDBIcon icon='book' />
                <strong> Masomo ya Elimu ya sekondari.</strong>
              </h6>
              <MDBTable>
                <MDBTableBody>
                  <tr>
                    <td>Basic Mathematics</td>
                    <td>English</td>
                    <td>Geography</td>
                  </tr>
                  <tr>
                    <td>Physics</td>
                    <td>Kiswahili</td>
                    <td>History</td>
                  </tr>
                  <tr>
                    <td>Chemistry</td>
                    <td>Kiarabu</td>
                    <td>Elimu ya dini ya kkislamu</td>
                  </tr>
                  <tr>
                    <td>Biology</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
              <hr />
              <Link to="/education/secondary">
              <MDBBtn color='success' rounded size='md'>
                 zaidi ...
                </MDBBtn>
            </Link>
              </p>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='12' className='mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url()'
            }}
          >
            <div className='text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-4 rounded'>
              
              <h3 className='py-3 font-weight-bold'>
                <strong>Shule ya Sekondari - <em>A-Level</em></strong>
              </h3>
              <p className='pb-3'>
                Elimu ya awali ndio msingi wa elimu zote nasi pia tumejizatiti vizuri 
                katika kutoa elimu hii kwani ndio itakayo mjengea msingi mzuri wa 
                kuendelea na elimu ya msingi
              </p>
              <p>
              <h6 className='light-blue-text'>
                <MDBIcon icon='book' />
                <strong> Michepuo ya masomo</strong>
              </h6>
                <MDBTable>
                  <MDBTableBody>
                    <tr>
                      <td>PCM</td>
                      <td>PCB</td>
                      <td>PGM</td>
                    </tr>
                    <tr>
                      <td>HGL</td>
                      <td>HGK</td>
                      <td>HKL</td>
                    </tr>
                    <tr>
                      <td>EGM</td>
                      <td>KLA</td>
                      <td>HGE</td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
                <hr />
              <Link to="/education/secondary">
              <MDBBtn color='success' rounded size='md'>
                 zaidi ...
                </MDBBtn>
            </Link>
              </p>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6' className='md-0 mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)'
            }}
          >
            <div className='text-white text-center  d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
              <div>
                <h6 className='pink-text'>
                  <MDBIcon icon='chart-pie' />
                  <strong> Marketing</strong>
                </h6>
                <h3 className='py-3 font-weight-bold'>
                  <strong>This is card title</strong>
                </h3>
                <p className='pb-3'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                  sit officia accusamus minus error nisi architecto nulla ipsum
                  dignissimos. Odit sed qui, dolorum!
                </p>
                <MDBBtn color='pink' rounded size='md'>
                  <MDBIcon far icon='clone' className='left' /> MDBView project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md='6' className='md-0 mb-4'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)'
            }}
          >
            <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>
              <div>
                <h6 className='green-text'>
                  <MDBIcon icon='eye' />
                  <strong> Entertainment</strong>
                </h6>
                <h3 className='py-3 font-weight-bold'>
                  <strong>This is card title</strong>
                </h3>
                <p className='pb-3'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                  sit officia accusamus minus error nisi architecto nulla ipsum
                  dignissimos. Odit sed qui, dolorum!
                </p>
                <MDBBtn color='success' rounded size='md'>
                  <MDBIcon far icon='clone' className='left' /> MDBView project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default SecularEd;