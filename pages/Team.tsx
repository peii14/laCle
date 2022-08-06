import Hero from "../components/Hero";
import team from "../images/team/team.png";
const Team = () => {
  return (
    <div className="layout">
      <div className="h-screen mt-2">
        <Hero content="" title="Team" image={team} />
      </div>
    </div>
  );
};
export default Team;
