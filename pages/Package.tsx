import Bread from "../components/Bread";
import Hero from "../components/Hero";
import paris from "../images/package/paris.png";
const Package = () => {
  return (
    <div className="layout">
      <div className="h-screen mt-2">
        <Hero content="" title="Packages" image={paris} />
      </div>
      <div>
        <Bread />
      </div>
    </div>
  );
};
export default Package;
