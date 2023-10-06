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

          <Map className={styles.homeMap} width="800" height="400" center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={popup1}>
                  <Popup>
                   binnenhof
                  </Popup>
                </Marker>
                <Marker position={popup2}>
                  <Popup>
                    ridderzaal
                  </Popup>
                </Marker>
                <Marker position={popup3}>
                  <Popup>
                    vredespaleis
                  </Popup>
                </Marker>
                <Marker position={popup4}>
                  <Popup>
                    paleis noordeinde
                  </Popup>
                </Marker>
                <Marker position={popup5}>
                  <Popup>
                   mauritshuis
                  </Popup>
                </Marker>
                <Marker position={popup6}>
                  <Popup>
                    lange voorhout
                  </Popup>
                </Marker>
                <Marker position={popup7}>
                  <Popup>
                  Museum de Gevangenpoort
                  </Popup>
                </Marker>
                <Marker position={popup8}>
                  <Popup>
                    Het Oude Stadhuis
                  </Popup>
                </Marker>
                <Marker position={popup9}>
                  <Popup>
                    Sint-Jacobskerk
                  </Popup>
                </Marker>
                <Marker position={popup10}>
                  <Popup>
                    Stadhuis Den Haag
                  </Popup>
                </Marker>
                <Marker position={popup11}>
                  <Popup>
                    Madurodam
                  </Popup>
                </Marker>
                <Marker position={popup12}>
                  <Popup>
                    Panorama Mesdag
                  </Popup>
                </Marker>
                <Marker position={popup13}>
                  <Popup>
                    Escher in Het Paleis
                  </Popup>
                </Marker>
                <Marker position={popup14}>
                  <Popup>
                    Kunstmuseum Den Haag
                  </Popup>
                </Marker>
                <Marker position={popup15}>
                  <Popup>
                    Duinrell Amusement Park
                  </Popup>
                </Marker>
                <Marker position={popup16}>
                  <Popup>
                    Scheveningen Strand
                  </Popup>
                </Marker>
                <Marker position={popup17}>
                  <Popup>
                    Haagse Markt
                  </Popup>
                </Marker>
                <Marker position={popup18}>
                  <Popup>
                    Museon
                  </Popup>
                </Marker>
                <Marker position={popup19}>
                  <Popup>
                    De Pier
                  </Popup>
                </Marker>
                <Marker position={popup20}>
                  <Popup>
                    Haags Historisch Museum
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

