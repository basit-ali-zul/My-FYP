import SectionHeading from "./SectionHeading";
// import MsLight from "../resourses/img/MS_Startups_Light.png";
import MsDark from "../resourses/img/MS_Startups_Dark.png";

export default function Patner() {
  return (
    <div className="quote">
      <div className="container">
        <SectionHeading shortheading={"Our"} mainHeading={"Partner"} />
        <img src={MsDark} alt="Partner" className="partner-img" />
      </div>
    </div>
  );
}
