import CardComp from "../global/CardComp";
import ProjectCard from "../global/ProjectCard";
import InvestIQ from "../../assets/InvestIQ.jpg";
import Solar from "../../assets/Solar.jpg";
import NcNews from "../../assets/nc-news.png";
import NcNewsBackend from "../../assets/nc-news-backend.png";
import RainCheckBackend from "../../assets/rain-check-be.png";
import TechBadge from "../global/TechBadge";

import { FaReact } from "react-icons/fa";
import {
  SiAxios,
  SiExpress,
  SiFastify,
  SiGithubactions,
  SiGithubpages,
  SiGnubash,
  SiJavascript,
  SiJest,
  SiPostgresql,
  SiRender,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";
import { SiMui } from "react-icons/si";

const Projects = () => {
  return (
    <>
      <CardComp
        header="Projects"
        title="Finished Projects"
        description="A showcase on the different projects that I have worked on."
      >
        <div className="flex flex-col gap-2">
        <ProjectCard
            image={RainCheckBackend}
            webLink="https://rain-check-be.onrender.com/api"
            gitLink="https://github.com/SohrabYavari/rain-check-be"
            title="Rain Check Backend"
            description="The backend built with RESTful API's for the Rain Check app, built in React Native."
            techStack={
              <>
                <TechBadge icon={<SiTypescript />} name="TypeScript" />
                <TechBadge icon={<SiFastify />} name="Fastify" />
                <TechBadge icon={<SiPostgresql />} name="Postgresql" />
                <TechBadge icon={<SiJest />} name="Jest" />
                <TechBadge icon={<SiRender />} name="Render" />
                <TechBadge icon={<SiSupabase />} name="Supabase" />
              </>
            }
          />
          
          <ProjectCard
            image={NcNewsBackend}
            webLink="https://nc-news-backend-769r.onrender.com/api"
            gitLink="https://github.com/SohrabYavari/nc-news-backend"
            title="NC News Backend"
            description="The backend built with RESTful API's for NC News with a simple bash script to populate the database and run the local server."
            techStack={
              <>
                <TechBadge icon={<SiJavascript />} name="JavaScript" />
                <TechBadge icon={<SiGnubash />} name="Bash Scripting" />
                <TechBadge icon={<SiExpress />} name="ExpressJs" />
                <TechBadge icon={<SiPostgresql />} name="Postgresql" />
                <TechBadge icon={<SiJest />} name="Jest" />
                <TechBadge icon={<SiRender />} name="Render" />
                <TechBadge icon={<SiSupabase />} name="Supabase" />
              </>
            }
          />

          <ProjectCard
            image={NcNews}
            webLink="https://SohrabYavari.github.io/nc-news/"
            gitLink="https://github.com/SohrabYavari/nc-news"
            title="NC News"
            description="A full-stack CRUD JS app which allows for people to view and comment on articles."
            techStack={
              <>
                <TechBadge icon={<FaReact />} name="React" />
                <TechBadge icon={<RiTailwindCssFill />} name="TailWindCSS" />
                <TechBadge icon={<SiDaisyui />} name="DasiyUi" />
                <TechBadge icon={<SiAxios />} name="Axios" />
                <TechBadge icon={<SiJest />} name="Jest" />
                <TechBadge icon={<SiGithubactions />} name="Github Actions" />
                <TechBadge icon={<SiGithubpages />} name="gh-pages" />
              </>
            }
          />

          <ProjectCard
            image={InvestIQ}
            webLink="https://SohrabYavari.github.io/InvestIQ/"
            gitLink="https://github.com/SohrabYavari/InvestIQ"
            title="InvestIQ"
            description="Data visulaisation through Financial Modeling Preps API with Axios."
            techStack={
              <>
                <TechBadge icon={<FaReact />} name="React" />
                <TechBadge icon={<SiTypescript />} name="TypeScript" />
                <TechBadge icon={<RiTailwindCssFill />} name="TailWindCSS" />
                <TechBadge icon={<SiAxios />} name="Axios" />
                <TechBadge icon={<SiDaisyui />} name="DaisyUI" />
              </>
            }
          />



          <ProjectCard
            image={Solar}
            webLink="https://SohrabYavari.github.io/Refreshed-Solar/"
            gitLink="https://github.com/SohrabYavari/Refreshed-Solar"
            title="Refreshed Solar"
            description="A website for a company that refurbishes and re-sells solar panels at an affordable rate for bussinesses and homeowners."
            techStack={
              <>
                <TechBadge icon={<FaReact />} name="React" />
                <TechBadge icon={<IoLogoJavascript />} name="JavaScript" />
                <TechBadge icon={<SiMui />} name="MaterialUI" />
              </>
            }
          />
        </div>
      </CardComp>
    </>
  );
};

export default Projects;
