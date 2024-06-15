import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.margem_wrapper}>
      <div className={styles.wrapper}>
        <div className={styles.grid_item1}>
          {/*  width='568' height='845'  */}
          <Image className={styles.img} width={650} height={880} quality={100} src="/images/imagens-hotel/portaria-crop.jpeg"/>
        </div>
        <div className={styles.grid_item2}>

          <div className={styles.infos_hotel}>

            <div className={styles.header}>
              <h3 className={styles.titulo}>O Que Oferecemos:</h3>

            </div>
            <div className={styles.description}>
              <p className={styles.texto}>
                Quartos são espaçosos e confortáveis, proporcionando um ambiente aconchegante para relaxar após um dia de atividadesl, a localização do hotel também é privilegiada na região e nossa garagem ampla comporta vários veículos. Com tudo isso, os hóspedes podem desfrutar de uma experiência única e inesquecível no Hotel Vitória Xinguara.
              </p>
            </div>

            <div className={styles.reserva_button}>
              <button className={styles.button} type="submit">
                <p>RESERVE AGORA</p>
                <svg width='14' height='14' aria-hidden="true" class="e-font-icon-svg e-fas-arrow-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
              </button>
            </div>
            <div className={styles.oferecemos}>
              <h3 className={styles.titulo}>Oferecemos:</h3>
              <div className={styles.opcao1}>
                <div className={styles.info_opcao}>
                  Check In 14:00h
                </div>
                <div className={styles.info_opcao}>
                  Check Out 11:00h
                </div>
                <div className={styles.info_opcao}>
                  Wi-Fi Áreas Comuns
                </div>
              </div>
              <div className={styles.opcao2}>
                <div className={styles.info_opcao}>
                  Ambiente Familiar
                </div>
                <div className={styles.info_opcao}>
                  Estacionamento Gratuito
                </div>

              </div>
            </div>

          </div>




        </div>
        <div className={styles.grid_item3}>
          <div className={styles.info_container}>
            <div className={styles.header}>Ambiente Totalmente Monitorado E Seguro</div>
            <div className={styles.description}>
              Ao ter câmeras instaladas na propriedade, o estabelecimento pode monitorar atividades e identificar quaisquer riscos de segurança potenciais, garantindo que os hóspedes tenham uma estadia tranquila e confortável.
            </div>
            <div className={styles.stats}>
              <div className={styles.stat_item}>
                <div className={styles.stat_number}>300+</div>
                <div className={styles.stat_label}>Hóspedes Felizes</div>
              </div>
              <div className={styles.stat_item}>
                <div className={styles.stat_number}>25</div>
                <div className={styles.stat_label}>Quartos Disponíveis</div>
              </div>
              <div className={styles.stat_item}>
                <div className={styles.stat_number}>100%</div>
                <div className={styles.stat_label}>Avaliações Positivas</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.grid_item4}>
          <div className={styles.video}>
            <video width="480" height='254' loop muted autoPlay defaultMuted style={{objectFit: 'cover', borderRadius: '10px'}}>
                <source src="/images/imagens-hotel/ap-video-convert-high.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
      </div>

      </div>
    </>
  )
}
