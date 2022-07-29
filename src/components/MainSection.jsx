import styles from '../styles/MainSection.module.css';
import DivisorSVG from '../assets/pattern-divider-desktop.svg';
import DiceSVG from '../assets/icon-dice.svg';
import useFetch from '../customHooks/useFetch';

const MainSection = () => {
  const { isLoading, value, error, reFetch } = useFetch("https://api.adviceslip.com/advice");

  if (isLoading) {
    return "Carregando...";
  } else if (error) {
    console.log(error);
  }

  return (
    <section className={styles.boxContent}>
      <p className={styles.adviceTitle}>
        Advice
        <span className={styles.adviceId}>
          #{value.slip.id}
        </span>
      </p>
      <h1 className={styles.adviceParagraph}>
        "{value.slip.advice}"
      </h1>
      <img src={DivisorSVG} alt="DivisorSVG" className={styles.dividerImg} />
      <span className={styles.diceSpan}>
        <img
          src={DiceSVG}
          alt="DiceSVG"
          className={styles.diceBtn}
          onClick={() => reFetch()}
        />
      </span>
    </section>
  )
}

export default MainSection