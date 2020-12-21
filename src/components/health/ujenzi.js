import React from 'react';
import { Image, Row, Col, List, Table } from 'antd';

const dataSource = [
  {
    key: '1',
    UkubwaWaChumba: '15 x 15',
    JumlaYaVyumba: 24,
    IdadiYaTofaliKwaChumba: 472,
    JumlaYaTofali: 11328,
  },
  {
    key: '2',
    UkubwaWaChumba: '17 x 20',
    JumlaYaVyumba: 2,
    IdadiYaTofaliKwaChumba: 586,
    JumlaYaTofali: 1171,
  },
  {
    key: '3',
    UkubwaWaChumba: '10 x 20',
    JumlaYaVyumba: 4,
    IdadiYaTofaliKwaChumba: 212,
    JumlaYaTofali: 848,
  },
  {
    key: '4',
    UkubwaWaChumba: '25 x 15',
    JumlaYaVyumba: 2,
    IdadiYaTofaliKwaChumba: 664,
    JumlaYaTofali: 1328,
  },
  {
    key: '5',
    UkubwaWaChumba: '18 x 25',
    JumlaYaVyumba: 2,
    IdadiYaTofaliKwaChumba: 548,
    JumlaYaTofali: 1096,
  },
  {
    key: '5',
    UkubwaWaChumba: ' ',
    JumlaYaVyumba: ' Jumla kuu',
    IdadiYaTofaliKwaChumba: ' ',
    JumlaYaTofali: 15771,
  },
];

const columns = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: 'Ukubwa wa chumba',
    dataIndex: 'UkubwaWaChumba',
    key: 'UkubwaWaChumba',
  },
  {
    title: 'Jumla ya vyumba',
    dataIndex: 'JumlaYaVyumba',
    key: 'JumlaYaVyumba',
  },
  {
    title: 'Idadi ya tofali kwa chumba',
    dataIndex: 'IdadiYaTofaliKwaChumba',
    key: 'IdadiYaTofaliKwaChumba',
  },
  {
    title: 'Jumla ya Tofali',
    dataIndex: 'JumlaYaTofali',
    key: 'JumlaYaTofali',
  },
];


const data2 = [
  'Ufyetuaji wa matofali na unuliwaji wa vifaa vya ujenzi.',
  'Ujenzi wa majengo na umaliziaji (finishing).',
  'Ununuliwaji wa vifaa vya ndani na kuajiri wafanyakazi.',
];

const Ujenzi = () => {
    return(
        <div>
          <h1>Hatua za ujenzi</h1>
         
          <Row>
            <Col span={24}>
            <List
            header={<div> <h3>Awamu za Ujenzi</h3></div>}
            bordered
            dataSource={data2}
            renderItem={item => <List.Item>{item}</List.Item>}
            />
            </Col>
            </Row>
          <br />
          <h2>UFYETUAJI WA MATOFALI NA UNULIWAJI WA VIFAA VYA UJENZI</h2>
          <p>
            Hii ni hatua ya kwanza kabisa katika ujenz wa jengo lolote. Vifaa vya ujenzi
            huagizwa au kununuliwa baada ya kufanya makisio kutokana na ramani husika.
            Mara nyingi hutumia mahesabu madogo ili kuepusha kununuliwa kwa vifaa vingi
            au kidogo kulingana na mahitaji, vile vile ukisiaji wa vifaa vya ujenzi hutupa picha
            kamili ya gharama za ujenzi wa zahanati yetu ili kujitathimin kifedha na muda
            utakaotumika mpaka kumalizika kwake.
          </p>
          <Row>
            <Col span={12}>
              <Image
                className='img-fluid'
                width={600}
                src="http://127.0.0.1:8000/media/hayatul/dispensary.jpg"
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
          <h3>Tofali zinazohitajika</h3>
          <p>
          Tofali zitakazotumika ni za block zenye urefu wa inch 18 upana wa nchi 9 na
          unene wa nchi 5. Katika ratio ya mchanga na kokoto 2:1 yaani kwa kila ndoo
          mbili za mchanga kutakuwa nan doo moja ya kokoto (gravel).
          </p>
          <h3>Idadi ya tofali zinazohitajika</h3>
          <p>
          Idadi nzima ya tofali imekisiwa kutokana na ramani ya zahanati. Imefanywa kwa
          kuzingatia mzunguko wa chumba kimoja kimoja. Ikumbukwe ujenzi wa ukuta
          utakuwa na mistari kumi na tatu ya tofali ikiwa mistari kumi ni kabla ya lenta na
          mitatu ni baada ya lenta na kufanya urefu wa ukuta uwe na futi 11 na inch 8.
          </p>
          <Table dataSource={dataSource} columns={columns} />;
          <Row>
            <Col span={12}>
              <Image
                className='img-fluid'
                width={600}
                src="http://127.0.0.1:8000/media/hayatul/dispensary.jpg"
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
        </div>
    )
}
 export default Ujenzi;