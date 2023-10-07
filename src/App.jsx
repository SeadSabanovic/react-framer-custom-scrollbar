import reactLogo from "./logo.svg";
import framerLogo from "./framer.svg";
import Scroll from "./Scroll";

const App = () => {
  return (
    <div className="App">
      <Scroll />
      <h1>React + Framer Motion Custom Scrollbar</h1>
      <div className="App__images">
        <img src={reactLogo} />
        <img src={framerLogo} />
      </div>
      <h2>
        Playfair Display & <br />
        Source Sans Pro
      </h2>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => {
        return (
          <p key={p}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
            quas totam repellendus nihil praesentium accusamus modi temporibus,
            amet consequuntur, suscipit quis pariatur odit voluptate. Maxime,
            provident nihil, impedit fugit beatae officia quis amet omnis
            aliquid dolorum perferendis quia et quibusdam ullam non, reiciendis
            enim inventore! Magnam asperiores praesentium eos eum beatae
            laudantium numquam, reiciendis aspernatur? Fugit praesentium beatae
            hic doloremque perferendis deserunt ipsum velit at dolorum,
            explicabo asperiores numquam ullam similique maxime corporis ad
            temporibus! A, eius beatae molestias asperiores voluptates provident
            fugiat commodi enim non ducimus, quaerat harum nostrum consectetur
            ratione eveniet, culpa deserunt soluta. Ea officiis aperiam itaque.
          </p>
        );
      })}
    </div>
  );
};

export default App;
