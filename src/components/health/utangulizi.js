import React from 'react';
import { Image, Row, Col, List } from 'antd';

const data = [
  'Huduma ya mapokezi.',
  'Huduma ya wagonjwa wa nje.',
  'Huduma ya maabara.',
  'Huduma ya dawa na store.',
  'Huduma ya afya ya uzazi na mtoto.',
  'Huduma ya upasuaji mdogo, macho na meno.',
];
const data2 = [
  'Ufyetuaji wa matofali na unuliwaji wa vifaa vya ujenzi.',
  'Ujenzi wa majengo na umaliziaji (finishing).',
  'Ununuliwaji wa vifaa vya ndani na kuajiri wafanyakazi.',
];

const Introduction = () => {
    return(
        <div>
          <h1>Utangulizi</h1>
          <p>Kwa maana hiyo, sasa hivi taasisi ipo katika mkakati wa ujenzi wa zahanati ya
          kisasa kabisa itakayofuata mashart ya kiislamu na inatakayotoa huduma kwa
          jamii kwa mujibu wa sheria na kanuni za serikali ya Jamhuri ya Muungano wa
          Tanzania.</p>

          <p>Zahanati hii itajengwa eneo pembeni ya barabara kuu ya Babati Dodoma karibu
          na shule ya Sekondari Hayatul longitude 4 0 21’10’’ S, 35 0 44’22’’ E katika eneo
          lenye ukubwa wa mita za mraba 56 kwa 32. Zahanati yetu itajengwa kwa mujibu
          wa zamani iliyo buniwa (redesign) kulingana na matakwa na masharti ya dini ya kiislamu.</p>

          <Row>
            <Col span={12}>
              <Image
                className='img-fluid'
                width={600}
                src="http://127.0.0.1:8000/media/carousel/20200918_100730.jpg"
              />
            </Col>
            <Col span={12}>
              <Image
                className='img-fluid'
                width={600}
                src="http://127.0.0.1:8000/media/hayatul/dispensary.jpg"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={14}>
            <List
            header={<div> <h3>Huduma zitakazotolewa katika zahanati hii</h3></div>}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
            />
            </Col>
            <Col span={10}>
            <List
            header={<div> <h3>Awamu za Ujenzi</h3></div>}
            bordered
            dataSource={data2}
            renderItem={item => <List.Item>{item}</List.Item>}
            />
            </Col>
            </Row>
          <br />
          <p>
            Huduma zote hizi zitatolewa kwa kuzingatia jinsia, kwa maana hiyo hakutakuwa
            na mchanganyiko wa jinsia kwenye zahanati isipokuwa sehemu chache za
            dharura kama vile upasuaji mdogo na huduma ya macho na ya meno.</p>
          <p>
            Kama mambo yataenda kama yalivyopangwa zahanati hii ikachukua miezi kumi
            na nane (18) mpaka kukamika kwake. Tunatarajia zahanati hii ikikamilika itaajiri
            zaidi ya wafanyakazi thelathini (30) na kuchochea maisha ya wana bonga
            kiujumla katika nyanja mbalimbali za kijamii na kiuchumi.
          </p>
          <Row>
            <Col span={12}>
              <Image
                className='img-fluid'
                width={600}
                src="http://127.0.0.1:8000/media/carousel/20200921_093334.jpg"
              />
            </Col>
            <Col span={12}>
              <Image
                className='img-fluid'
                width={600}
                src="http://127.0.0.1:8000/media/carousel/20200921_093729.jpg"
              />
            </Col>
          </Row>
          <br />
        </div>
    )
}
 export default Introduction;