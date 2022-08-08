import n from "../styles/Neuromorphism.module.css";
const Neuromorphism = (props: any): JSX.Element => {
  if (props.isMember == 1) {
    return (
      <div
        className={`${n.NeuroMember} bg-third hover:bg-sec duration-500 transition-all`}
      >
        {props.children}
      </div>
    );
  } else if (props.isMember == 3) {
    return (
      <div
        className={`bg-third hover:bg-sec duration-500 transition-all ${n.NeuroDisc}`}
      >
        {props.children}
      </div>
    );
  } else {
    return (
      <div className="cursor-pointer">
        <div className={n.Neuro}>{props.children}</div>
      </div>
    );
  }
};

export default Neuromorphism;
