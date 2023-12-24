import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.navImage}>
        <div className={styles.navExterna}>
          <nav className={styles.navInterna}>
            <div>
              <Image src="/images/Hotel-Vitoria.png" width='123' height='123' />
            </div>
            <div>
              <a style={{ textDecoration: 'none' }} href='https://api.whatsapp.com/send?phone=5594991151158'>
                <div className={styles.botaoNav}>
                  <span className={styles.span}>+55 (94) 99115-1158</span>
                  <span className={styles.span}>
                    <svg width="14" height='14' aria-hidden="true" class="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                  </span>
                </div>
              </a>
            </div>
          </nav>
        </div>
        <div className={styles.reservaMargin}>
          <div className={styles.reserva}>
            <div className={styles.slogan}>
              <h2 className={styles.h2}>
                A SUA CASA FORA DE CASA!
              </h2>
              <h1 className={styles.h1}>Hotel Vitória Xinguara</h1>
              <p className={styles.p}>O Hotel Vitória Xinguara é um lugar acolhedor onde os hóspedes podem se sentir em casa. Com uma equipe simpática e prestativa, o hotel oferece serviços de qualidade que garantem uma estadia agradável e confortável.</p>
            </div>
            <div className={styles.reservaFormInterno}>
              <div className={styles.reservaFormTitulo}>
                <h1 className={styles.h1}>Reserva Rápida</h1>
                <p className={styles.p}>Escolha as suas datas de entrada e saída, então reserve sua acomodação no Hotel Vitória. A confirmação chegará via Whatsapp.</p>
              </div>
              <form className={styles.form} action="/sua-rota-de-envio" method="post">
                <input className={styles.input} type="text" id="nome" name="nome" placeholder="Nome" required />
                <input className={styles.input} type='tel' id="telefone" name="telefone" placeholder="Whatsapp" required />

                <div className={styles.divDate}>
                  <input className={styles.input} type="date" id="checkin" name="checkin" placeholder="Checkin" />
                  <input className={styles.input} type="date" id="checkout" name="checkout" placeholder="Checkout" />
                </div>
                <select className={styles.input} id="pessoas" name="pessoas">
                  <option value="1">1 Pessoa</option>
                  <option value="2">2 Pessoas</option>
                  <option value="3">3 Pessoas</option>
                  <option value="4">4 Pessoas</option>
                </select>
                <button className={styles.button} type="submit">
                  <p>RESERVE AGORA</p>
                  <svg width='14' height='14' aria-hidden="true" class="e-font-icon-svg e-fas-arrow-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
