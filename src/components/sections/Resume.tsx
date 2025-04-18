import MyResume from "../../assets/SohrabYavariResume.pdf";
import CardComp from "../global/CardComp";

const Resume = () => {
  return (
    <div className="mb-20">
      <CardComp
        title="My Experience"
        header="Resume"
        description="Have a look through my experience and contact me if you have any questions."
      >
        <div className="hidden md:block">
          <a
            href={MyResume}
            download="SohrabYavari_Resume.pdf"
            className="btn btn-md btn-outline"
          >
            Download CV
          </a>
          <embed
            src={`${MyResume}#toolbar=0&navpanes=0&scrollbar=0`}
            className="mx-auto w-full h-screen rounded-md"
            type="application/pdf"
          />
        </div>

        <div className="flex items-center gap-1 md:hidden mt-4">
          <a
            href={MyResume}
            download="SohrabYavari_Resume.pdf"
            className="btn btn-sm w-full"
          >
            Download CV
          </a>
        </div>
      </CardComp>
    </div>
  );
};

export default Resume;
