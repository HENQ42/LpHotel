import Image from 'next/image'
import styles from './page.module.css'
import Acomoda from '../components/acomoda/page'
import Contato from '../components/contato/page'
import Footer from '../components/footer/page'
import Grid from '../components/grid/page'
import Nav from '../components/nav/page'

export default function Home() {
  return (
    <>
    <Nav />
    <Grid />
    <Acomoda />
    <Contato />
    <Footer />
    </>
  )
}
