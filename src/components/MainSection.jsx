import styles from '../styles/MainSection.module.css';
import DivisorSVG from '../assets/pattern-divider-desktop.svg';
import DiceSVG from '../assets/icon-dice.svg';

const MainSection = () => {
  return (
    <section>
      <p className={styles.adviceTitle}>
        {}
        <span className={styles.adviceId}>
          { }
        </span>
      </p>
      <h1 className={styles.adviceParagraph}>
        { }
      </h1>
      <img src={DivisorSVG} alt="DivisorSVG" className={styles.dividerImg} />
      <span className={styles.diceSpan}>
        <img src={DiceSVG} alt="DiceSVG" className={styles.diceBtn} />
      </span>
    </section>
  )
}

export default MainSection