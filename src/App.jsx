import drosoLogo from "./assets/droso.png";
import "./App.css";

export default function App() {

  return (
    <>
      <div>
        <a href="https://aws.amazon.com" target="_blank">
          <img src={drosoLogo} className="logo" alt="Droso Logo" />
        </a>
      </div>
      <h1>CV App</h1>
      <div className="card">

      </div>
    </>
  );
}
