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