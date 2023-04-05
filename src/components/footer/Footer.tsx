import { Logos } from "./Logos";

const Footer = () => {
  return (
    <div>
      <h1>Partners</h1>
      {Logos.map((logo) => {
        return <div key={logo.id}>{logo.logo}</div>;
      })}
    </div>
  );
};

export { Footer };
