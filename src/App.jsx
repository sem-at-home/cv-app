import drosoLogo from "./assets/droso.png";
import "./styles/App.css";
import GeneralInformation from "./components/GeneralInformation";
import Experience from "./components/Experience";

export default function App() {
  return (
    <>
      <header>
        <div>
          <a href="https://aws.amazon.com" target="_blank">
            <img src={drosoLogo} className="logo" alt="Droso Logo" />
          </a>
        </div>
        <h1>CV App</h1>
      </header>
      <main>
        <GeneralInformation />
        <Experience name="Educational Experience" />
        <Experience name="Practical Experience"/>
      </main>
    </>
  );
}
