import MyResume from "../../assets/SohrabYavari.pdf";
import CardComp from "../global/CardComp";

const Resume = () => {
  return (
    <div className="mb-20">
      <CardComp
        title="My Experience"
        header="Resume"
        description="Have a look through my experience and contact me if you have any questions."
      >
        {/* Large screen: show embedded PDF */}
        <div className="hidden md:block">
          <embed
            src={MyResume}
            className="mx-auto w-full h-screen rounded-md"
            type="application/pdf"
          />
        </div>

        {/* Small screen: show buttons instead */}
        <div className="flex items-center gap-1 md:hidden mt-4">
          <a
            href={MyResume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm basis-1/2"
          >
            View CV
          </a>
          <a
            href={MyResume}
            download="SohrabYavari_Resume.pdf"
            className="btn btn-sm basis-1/2"
          >
            Download CV
          </a>
        </div>
      </CardComp>
    </div>
  );
};

export default Resume;
