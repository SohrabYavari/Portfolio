import CardComp from "../global/CardComp";
import profileImage from "../../assets/Me.jpg";
import TechBadge from "../global/TechBadge";
import { FaJava, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFastify,
  SiGnubash,
  SiHeroku,
  SiJest,
  SiPostgresql,
  SiRender,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiCsharp } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiMui } from "react-icons/si";

const About = () => {
  return (
    <>
      <CardComp
        image={profileImage}
        title="Full Stack Developer"
        description="Self taught programmer, forever a student"
        header="About Me"
      >
        <div className="px-2">
          <h1>Languages:</h1>
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          <TechBadge icon={<SiCsharp />} name="C#" />
          <TechBadge icon={<SiTypescript />} name="TypeScript" />
          <TechBadge icon={<IoLogoJavascript />} name="JavaScript" />
          <TechBadge icon={<SiPostgresql />} name="PSQL" />
          <TechBadge icon={<FaJava />} name="Java" />
          <TechBadge icon={<SiGnubash />} name="Bash Scripting" />
        </div>
        <div className="px-2 pt-4">
          <h1>Frameworks:</h1>
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          <TechBadge icon={<FaReact />} name="React" />
          <TechBadge icon={<RiTailwindCssFill />} name="TailWindCSS" />
          <TechBadge icon={<SiExpress />} name="ExpressJs" />
          <TechBadge icon={<SiFastify />} name="Fastify" />
          <TechBadge icon={<SiJest />} name="Jest" />
        </div>

        <div className="px-2 pt-4">
          <h1>Hosting:</h1>
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          <TechBadge icon={<SiRender />} name="Render" />
          <TechBadge icon={<SiHeroku />} name="Heroku" />
          <TechBadge icon={<SiSupabase />} name="SupaBase" />
        </div>



        <div className="px-2 pt-4">
          <h1>UI Libraries:</h1>
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          <TechBadge icon={<SiDaisyui />} name="DaisyUI" />
          <TechBadge icon={<SiShadcnui />} name="ShadcnUI" />
          <TechBadge icon={<SiMui />} name="MaterialUI" />
        </div>
      </CardComp>
    </>
  );
};

export default About;
