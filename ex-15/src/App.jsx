import { useState } from "react";
import LanguageContext from "./LanguageContext";
import Greeting from "./Greeting";
import LanguageSwitcher from "./LanguageSwitcher";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={language}>
      <div style={{ padding: "40px" }}>
        <h1>Language Selector</h1>

        <LanguageSwitcher language={language} setLanguage={setLanguage} />

        <Greeting />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
