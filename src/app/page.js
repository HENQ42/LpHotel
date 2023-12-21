import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.divAvo}>
      <div className={styles.divPai}>
        <nav>
          <div>
            <Image src="/images/Hotel-Vitoria.png" width='123' height='123' />
          </div>
          <div>
            <div>
              <a className={styles.a}>+55 (94) 99115_1158</a>
            </div>
          </div>
        </nav>

        <main className={styles.main}></main>

      </div>
      <footer className={styles.footer}>
        <div className={styles.footerDiv}>
          <div>
            <div>
              <Image />
            </div>
            <div>
              <h2>Fale-nos sobre os seus planos de viagem, estamos aqui para ajudar.</h2>

              <div> {/* botao */}
                <div>WHATSAPP</div>
                <div>
                  <svg width='14' height='14' aria_hidden="true" class="e_font_icon_svg e_fab_whatsapp" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c_122.4 0_222 99.6_222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7_30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1_99.6 224.1_222 0_59.3_25.2_115_67.1_157zm_157 341.6c_33.2 0_65.7_8.9_94_25.7l_6.7_4_69.8 18.3L72 359.2l_4.4_7c_18.5_29.4_28.2_63.3_28.2_98.2 0_101.7 82.8_184.5 184.6_184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8_84.9 184.6_186.6 184.6zm101.2_138.2c_5.5_2.8_32.8_16.2_37.9_18_5.1_1.9_8.8_2.8_12.5 2.8_3.7 5.6_14.3 18_17.6 21.8_3.2 3.7_6.5 4.2_12 1.4_32.6_16.3_54_29.1_75.5_66_5.7_9.8 5.7_9.1 16.3_30.3 1.8_3.7.9_6.9_.5_9.7_1.4_2.8_12.5_30.1_17.1_41.2_4.5_10.8_9.1_9.3_12.5_9.5_3.2_.2_6.9_.2_10.6_.2_3.7 0_9.7 1.4_14.8 6.9_5.1 5.6_19.4 19_19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7_1.6 32.8_13.4 37.4_26.4 4.6_13 4.6_24.1 3.2_26.4_1.3_2.5_5_3.9_10.5_6.6z"></path></svg>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.newsletter}> {/* newsletter */}
            <h2 className={styles.h2}>Junte-se à nossa newsletter.</h2>
            <p className={styles.p}>Receba em primeira mão as novidades do hotel Vitória!</p>
            <form className={styles.formulario_newsletter}>
              <input type="email" className={styles.input_email} placeholder="Insira seu melhor email" />
              <button type="submit" className={styles.botao_enviar}>ENVIAR</button>
            </form>

          </div>
          <div className={styles.endereco}> {/* endereco */}
            <div>
              <strong className={styles.strong} >Onde Estamos</strong>
              <p className={styles.p}>Rua Guajajaras, 252 - Centro - Xinguara - PA</p>
              <p className={styles.p}>+55 (94) 99115 - 1158</p>
            </div>
            <div>
              <strong>Serviços</strong>
              <div class={styles.footer_social_icons}>
                <a href="https://www.facebook.com" target="_blank">
                  <svg width='14' height='14' class="e-font-icon-svg e-fab-facebook-f" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                </a>
                <a href="https://twitter.com" target="_blank">
                  <svg width='14' height='14' class="e-font-icon-svg e-fab-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                </a>
                <a href="https://www.youtube.com" target="_blank">
                  <svg width='14' height='14' class="e-font-icon-svg e-fab-youtube" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <svg width='14' height='14' class="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </a>
              </div>
            </div>
            <div>
                <div>
                  <Image src='/images/Hotel-Vitoria.png' width='128' height='128' />
                </div>
              </div>
            
          </div>
          <div class={styles.footer_copy}>
              © 2023 Hotel Vitória Xinguara. Todos os direitos reservados.
            </div>
        </div>
      </footer>
    </div>

  )
}
