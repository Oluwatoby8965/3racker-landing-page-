import { Logos } from "./Logos";

const Footer = () => {
  return (
    <div>
      <h1>Partners</h1>
      {Logos.map((logo) => {
        return (
          <div key={logo.id}>
            <img src={logo.logo} alt={logo.name} />
          </div>
        );
      })}
    </div>
  );
};

export { Footer };
