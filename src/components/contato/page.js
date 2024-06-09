import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.div_extensa}>
        <div className={styles.margem_contato}>
          <div className={styles.titulo_contato}>
            <div className={styles.desc}>
              <h2 className={styles.h2}>Suíte Família</h2>
              <p className={styles.p}>Comporta confortavelmente até 4 pessoas.</p>
            </div>
            <button className={styles.button} type="submit">
                  <p>CONTATO</p>
            </button>
          </div>
          <div className={styles.grid}>
            <div className={styles.div1}>
              <img className={styles.img} src="/images/1grid.png" alt="segurança." />
            </div>
            <div className={styles.div2}>
              <img className={styles.img} src="/images/2grid.png" alt="segurança." />
            </div>
            <div className={styles.div3}>
              <img className={styles.img} src="/images/3grid.png" alt="segurança." />
            </div>
            <div className={styles.div4}>
              <div className={styles.loc}>
                <svg width='12px' height='12px' fill='#828282' aria-hidden="true" class="e-font-icon-svg e-fas-map-marker-alt" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                <p className={styles.p}>XINGUARA, PARÁ</p>
              </div>
              <h3 className={styles.h3}>Suíte Familia</h3>
              <div className={styles.avaliacao}>
                <div className={styles.star_rating}>
                  <span className={styles.star}>&#9733;</span>
                  <span className={styles.star}>&#9733;</span>
                  <span className={styles.star}>&#9733;</span>
                  <span className={styles.star}>&#9733;</span>
                </div>
                <div className={styles.avaliacao_texto}>
                  <span className={styles.rating_value}>5.0 PONTOS</span>
                  <span className={styles.rating_count}>+ DE 20 AVALIAÇÕES</span>
                </div>

              </div>
              <p className={styles.p}>Se você está à procura de uma ótima opção para a próxima viagem em família, considere ficar nesta suíte. Este espaço é super acolhedor e confortável, perfeito para quem procura o seu próprio cantinho. Todos podem desfrutar de privacidade, mas ainda fazer memórias juntos!</p>
              <div className={styles.val}>
                <h3 className={styles.h3}>R$ 210,00</h3>
                <button className={styles.button} type="submit">
                  <p>RESERVE AGORA</p>
                  <svg width='14' height='14' aria-hidden="true" class="e-font-icon-svg e-fas-arrow-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                </button>
              </div>
              <div className={styles.destaque}>
                <p className={styles.p}>DESTAQUE:</p>
                <div className={styles.dest}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}