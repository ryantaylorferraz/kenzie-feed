import React from 'react'
import styles from "./style.module.scss"
import { TemplateDefault } from '../../components/TemplateDefault'
import imgNews from "../../assets/imgNews/imgNews1.png"
import imgNews2 from "../../assets/imgNews/imgNews2.png"
import imgNews3 from "../../assets/imgNews/imgNews3.png"
import { MdOutlineFavoriteBorder } from "react-icons/md";



export const NewsPage = () => {
  return (
    <TemplateDefault>
      <main className={styles.main}>
        <section className={styles.sectionContainer}>
          <div className={styles.divBox}>
            <div className={styles.divNews}>
              <span>Por: Roberta Silva</span>
              <h1 className='title bold2' >5 lugares para viajarar nas próximas férias</h1>
              <img src={imgNews} alt="" />
            </div>
            <div className={styles.divLike}>
              <span><MdOutlineFavoriteBorder size={22} color='#55A3FF' />
              </span>
              <p>Seja o primeiro a curtir este post</p>
            </div>
            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
          </div>

          <div>
            <h2 className='title mobile2'>Leia também</h2>
            <ul className={styles.ulNewsList}>
              <li className={styles.liNews}>
                <img src={imgNews2} alt="img new" />
                <span className='smallParagraph'>Por: Roberto Silva</span>
                <h3 className='title small'>5 lugares para viajar nas proximas ferias</h3>
                <span className='link'>Ler mais</span>
              </li>
              <li className={styles.liNews}>
                <img src={imgNews3} alt="img new" />
                <span className='smallParagraph'>Por: Roberto Silva</span>
                <h3 className='title small'>5 lugares para viajar nas proximas ferias</h3>
                <span className='link'>Ler mais</span>
              </li>
            </ul>

          </div>
        </section>
      </main>
    </TemplateDefault>
  )
}
