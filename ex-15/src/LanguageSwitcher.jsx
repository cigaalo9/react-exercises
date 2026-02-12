function LanguageSwitcher({ language, setLanguage }) {
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <button onClick={toggleLanguage}>
        {language === "en" ? "Change to Spanish" : "Change to English"}
      </button>
    </div>
  );
}

export default LanguageSwitcher;
