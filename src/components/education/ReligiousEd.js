import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn  } from "mdbreact";

const ReligiousEd = () => {
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>Elimu ya dini</h2>
      <p className='grey-text w-responsive mx-auto mb-5'>
        Taasisi ya Hayatul Islamiya Complex imekuwa ikitoa elimu ya dini kwa wanafunzi wote 
        ambao wamepita katika shule zetu. Sio kwa wanafunzi tu bali tumekuwa tukitoa elimu 
        hii kwa kushirikiana na wanajamii wote wa maeneo ya Bonga.
      </p>

      <MDBRow>
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
                <strong>Elimu ya dini kwa shule za Msingi na Sekondari</strong>
              </h3>
              <p className='pb-3'>
                Shule ya Msingi Hayatul Islamiya inatoa elimu ya dini kuanzia shule ya awali hadi darasa 
                la saba. Wanafunzi wote waliopita katika shule hii wamepata hiyo fursa ya kujifunza elimu 
                ya dini ya kiislamu tena kwa kufuata mtaala sahihi kwa ngazi ya shule ya msingi.
              </p>
              <p>
              <h6 className='light-blue-text'>
                <MDBIcon icon='book' />
                <strong> Masomo ya dini tunayofundisha.</strong>
              </h6>
              <ul>
                <li>Elimu ya dini ya kiislamu</li>
                <li>Lugha ya kiarabu</li>
                <li>Kusoma Qur-an</li>
                <li>Kuhifadhi Qur-an</li>
                <li>Tafsiri ya Qur-an</li>
              </ul>
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

export default ReligiousEd;