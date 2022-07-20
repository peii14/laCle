import g from "../styles/Glassmorphism.module.css";

const Glassmorphism: React.FC = (props: any) => {
  return (
    <div className={g.Glass}>
      {props.children}
    </div>
  );
};

export default Glassmorphism;
