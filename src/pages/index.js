import Head from 'next/head';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';

import styles from '@styles/Home.module.scss';

const DEFAULT_CENTER = [52.079286, 4.312190]
const popup1 = [52.079286, 4.312190]

const popup2 = [52.079534, 4.313124753150408]

const popup3 = [52.0863931,4.2956313]

const popup4 = [52.0807452,4.3064802]

const popup5 = [52.0803906,4.3143086]

const popup6 = [52.0825098,4.3131418]

const popup7 = [52.0795297,4.3100829]

const popup8 = [52.0777346,4.3079943]

const popup9 = [52.0773944,4.3071566]

const popup10 = [52.0779773,4.3169084]

const popup11 = [52.0995368, 4.2973837]

const popup12 = [52.0849563, 4.3041707]

const popup13 = [52.083431243896484, 4.314299583435059]

const popup14 = [52.0892056, 4.2798778]

const popup15 = [52.1475159, 4.3803108]

const popup16 = [52.1144, 4.2814]

const popup17 = [52.0644113, 4.2993087]

const popup18 = [52.08859, 4.28019]

const popup19 = [52.116874, 4.279567]

const popup20 = [52.081268310546875, 4.314035415649414]

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Bezichtingen map Den Haag</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
        <h2 className={styles.text}>Bezichtingen map van Den Haag</h2>
          <Map className={styles.homeMap} width="800" height="400" center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={popup1}>
                  <Popup>
                   <h2>Het Binnenhof</h2>
                   <p>Het historische politieke centrum van Den Haag.</p>
                  </Popup>
                </Marker>
                <Marker position={popup2}>
                  <Popup>
                    <h2>De Ridderzaal</h2>
                    <p>Een prachtig middeleeuws gebouw met een rijke geschiedenis.</p>
                  </Popup>
                </Marker>
                <Marker position={popup3}>
                  <Popup>
                    <h2>Het Vredespaleis</h2>
                    <p>Een iconisch symbool van vrede en internationale gerechtigheid.</p>
                  </Popup>
                </Marker>
                <Marker position={popup4}>
                  <Popup>
                    <h2>Paleis Noordeinde</h2>
                    <p>De officiële residentie van de Nederlandse koning.</p>
                  </Popup>
                </Marker>
                <Marker position={popup5}>
                  <Popup>
                   <h2>Het Mauritshuis</h2>
                   <p>Een beroemd museum met een indrukwekkende kunstcollectie.</p>
                  </Popup>
                </Marker>
                <Marker position={popup6}>
                  <Popup>
                    <h2>Lange Voorhout</h2>
                    <p>Een schilderachtige laan met mooie gebouwen en kunstwerken.</p>
                  </Popup>
                </Marker>
                <Marker position={popup7}>
                  <Popup>
                  <h2>Museum de Gevangenpoort</h2>
                  <p>Een historisch museum in een voormalige gevangenis.</p>
                  </Popup>
                </Marker>
                <Marker position={popup8}>
                  <Popup>
                    <h2>Het Oude Stadhuis</h2>
                    <p>Een historisch stadhuis met prachtige architectuur.</p>
                  </Popup>
                </Marker>
                <Marker position={popup9}>
                  <Popup>
                    <h2>De Sint-Jacobskerk</h2>
                    <p>Een oude kerk met een rijke geschiedenis en architectuur.</p>
                  </Popup>
                </Marker>
                <Marker position={popup10}>
                  <Popup>
                    <h2>Stadhuis Den Haag</h2>
                    <p>Het moderne stadhuis van Den Haag.</p>
                  </Popup>
                </Marker>
                <Marker position={popup11}>
                  <Popup>
                    <h2>Madurodam</h2>
                    <p>Een miniatuurpark dat Nederland in het klein laat zien.</p>
                  </Popup>
                </Marker>
                <Marker position={popup12}>
                  <Popup>
                    <h2>Panorama Mesdag</h2>
                    <p>Een uniek cilindervormig schilderij van een zeegezicht.</p>
                  </Popup>
                </Marker>
                <Marker position={popup13}>
                  <Popup>
                    <h2>Escher in Het Paleis</h2>
                    <p>Een museum gewijd aan de kunstenaar M.C. Escher.</p>
                  </Popup>
                </Marker>
                <Marker position={popup14}>
                  <Popup>
                    <h2>Kunstmuseum Den Haag</h2>
                    <p>Een museum met een uitgebreide kunstcollectie.</p>
                  </Popup>
                </Marker>
                <Marker position={popup15}>
                  <Popup>
                    <h2>Duinrell Amusement Park</h2>
                    <p> Een pretpark met attracties en glijbanen.</p>
                  </Popup>
                </Marker>
                <Marker position={popup16}>
                  <Popup>
                    <h2>Scheveningen Strand</h2>
                    <p>Het populairste strand van Den Haag.</p>
                  </Popup>
                </Marker>
                <Marker position={popup17}>
                  <Popup>
                    <h2>De Haagse Markt</h2>
                    <p>Een levendige markt met diverse producten en gerechten.</p>
                  </Popup>
                </Marker>
                <Marker position={popup18}>
                  <Popup>
                    <h2>Museon</h2>
                    <p>Een museum voor cultuur en wetenschap.</p>
                  </Popup>
                </Marker>
                <Marker position={popup19}>
                  <Popup>
                    <h2>De Pier</h2>
                    <p>Een iconische pier met winkels, restaurants en attracties.</p>
                  </Popup>
                </Marker>
                <Marker position={popup20}>
                  <Popup>
                    <h2>Haags Historisch Museum</h2>
                    <p>Een museum dat de geschiedenis van Den Haag belicht.</p>
                  </Popup>
                </Marker>

              </>
            )}
          </Map>



        </Container>
      </Section>
    </Layout>
  )
}

