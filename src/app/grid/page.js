import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.margem_wrapper}>
      <div className={styles.wrapper}>
        <div className={styles.grid_item1}>
          <Image src="/images/fora.png" width='568' height='845' />
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
            <Image className={styles.img} src="/images/quarto.png" width='540' height='260' />
            <svg className={styles.svg} width='100' height='107' fill='white' aria-hidden="true" class="e-font-icon-svg e-eicon-play" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M838 162C746 71 633 25 500 25 371 25 258 71 163 162 71 254 25 367 25 500 25 633 71 746 163 837 254 929 367 979 500 979 633 979 746 933 838 837 929 746 975 633 975 500 975 367 929 254 838 162M808 192C892 279 933 379 933 500 933 621 892 725 808 808 725 892 621 938 500 938 379 938 279 896 196 808 113 725 67 621 67 500 67 379 108 279 196 192 279 108 383 62 500 62 621 62 721 108 808 192M438 392V642L642 517 438 392Z"></path></svg>
          </div>
        </div>
      </div>

      </div>
    </>
  )
}
