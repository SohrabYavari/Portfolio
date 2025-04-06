export default function Footer() {
  return (
    <>
      <footer id="footer" className="bg-primary w-full">
        <div className="w-full p-5">
          <p className="text-center text-secondary">
            Contact me:
            <a
              href="https://www.linkedin.com/in/sam-yavari-a3aa65198/"
              target="_blank"
              className="text-black hover:text-info  transition-all duration-150"
            >
              {" "}
              LinkedIn{"  "}
            </a>
            &{" "}
            <a
              href="https://github.com/SohrabYavari"
              target="_blank"
              className="text-black hover:text-info transition-all duration-150"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
