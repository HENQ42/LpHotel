import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.margem}>
        <div className={styles.container}>
          <div className={styles.titulo}>
            <div className={styles.texts}>
              <h2 className={styles.h2}>Nossa Acomodações</h2>
              <p className={styles.p}>Quartos aconchegantes para uma estadia dos sonhos.</p>
            </div>
            <div className={styles.buttonDiv}>
              <button className={styles.button} type="submit">
                <p>RESERVE AGORA</p>
                <svg width='14' height='14' aria-hidden="true" class="e-font-icon-svg e-fas-arrow-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
              </button>
            </div>
          </div>
          <div className={styles.quartos}>
            <div className={styles.quarto_single}>
              <Image src="/images/quarto.png" alt="Quarto de solteiro." width={311} height={381} />
              <div className={styles.titulo}>
                <h3 className={styles.h3}>Single</h3>
                <p className={styles.p}>R$ 80,00</p>
              </div>
            </div>

            <div className={styles.quarto_casal}>
              <Image src="/images/quarto2.png" alt="Quarto de casal." width={311} height={381} />
              <div className={styles.titulo}>
                <h3 className={styles.h3}>Casal</h3>
                <p className={styles.p}>R$ 120,00</p>
              </div>
            </div>

            <div className={styles.quarto_triplo}>
              <Image src="/images/quarto3.png" alt="Quarto para tres pessoas." width={311} height={381} />
              <div className={styles.titulo}>
                <h3 className={styles.h3}>Quarto Triplo</h3>
                <p className={styles.p}>R$ 160,00</p>
              </div>
            </div>

            <div className={styles.quarto_familia}>
              <Image src="/images/quarto4.png" alt="Quarto Familia." width={311} height={381} />
              <div className={styles.titulo}>
                <h3 className={styles.h3}>Quarto Família</h3>
                <p className={styles.p}>R$ 210,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.oferece}>
            <div className={styles.oferece_text}>
              <h2 className={styles.h2}>Priorizamos Seu Conforto</h2>
              <p className={styles.p}>Para que o hóspede tenha uma experiência e estadia agradável oferecemos as seguintes amenidades:</p>
            </div>
            <div className={styles.oferece_img}>
              <div className={styles.img_area}>
                <Image className={styles.img} src="/images/almoco.png" alt="Almoco." width={32} height={32} />
              </div>
              <div className={styles.img_area}>
                <Image className={styles.img} src="/images/garcom.png" alt="garçom." width={32} height={32} />
              </div>
              <div className={styles.img_area}>
                <Image className={styles.img} src="/images/estacionamento.png" alt="estacionamento." width={32} height={32} />
              </div>
              <div className={styles.img_area}>
                <Image className={styles.img} src="/images/lavanderia.png" alt="lavanderia." width={32} height={32} />
              </div>
              <div className={styles.img_area}>
                <Image className={styles.img} src="/images/security.png" alt="segurança." width={32} height={32} />
              </div>
              <div className={styles.img_area}>
                <Image className={styles.img} src="/images/tel24h.png" alt="Telefone 24 Horas." width={32} height={32} />
              </div>
            </div>
            <div className={styles.img_areaIcon}>
              <Image className={styles.img} src="/images/Arrow.png" alt="Seta." width={16} height={35} />
            </div>
          </div>
    </>
  )
}
