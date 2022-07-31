import React from 'react';
import DivisorSVG from '../assets/pattern-divider-desktop.svg';
import DiceSVG from '../assets/icon-dice.svg';
import useFetch from '../customHooks/useFetch';
import Spinner from './Spinner';
import styles from "../styles/MainSection.module.css";
const {
  boxContent,
  adviceTitle,
  adviceId,
  adviceParagraph,
  dividerImg,
  diceSpan,
  diceBtn,
  boxContentLight,
  adviceTitleLight,
  diceSpanLight,
  buttonDIV,
  changeButton,
  changeButtonLight,
} = styles;

const MainSection = () => {
  const { isLoading, value, error, reFetch } = useFetch("https://api.adviceslip.com/advice");
  const [theme, setTheme] = React.useState("dark");

  React.useEffect(() => {

    const localTheme = localStorage.getItem("theme");

    if (localTheme !== undefined) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.getElementsByTagName("body")[0].classList.add("dark");
      } else {
        document.getElementsByTagName("body")[0].classList.remove("dark");
      }
    }
  }, []);

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.getElementsByTagName("body")[0].classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.getElementsByTagName("body")[0].classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  if (isLoading) {
    return <section className={theme === "dark" ? boxContent : boxContentLight}> <Spinner /> </section>
  } else if (error) {
    console.log(error);
  }

  return (
    <section className={theme === "dark" ? boxContent : boxContentLight}>
      <div className={buttonDIV}>
        <p className={theme === "dark" ? adviceTitle : adviceTitleLight}>
          Advice
          <span className={adviceId}>
            #{value.slip.id}
          </span>
        </p>
        <button onClick={() => changeTheme()} className={theme === "dark" ? changeButton : changeButtonLight}>Trocar</button>
      </div>
      <h1 className={adviceParagraph}>
        "{value.slip.advice}"
      </h1>
      <img src={DivisorSVG} alt="DivisorSVG" className={dividerImg} />
      <span className={theme === "dark" ? diceSpan : diceSpanLight}>
        <img
          src={DiceSVG}
          alt="DiceSVG"
          className={diceBtn}
          onClick={() => reFetch()}
        />
      </span>
    </section>
  )
}

export default MainSection