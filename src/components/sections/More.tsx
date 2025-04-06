import CardComp from "../global/CardComp";

const More = () => {
  return (
    <>
      <div>
        <CardComp title="Who Is Sohrab?" header="MORE ON ME" description="">
          <div className="px-2 flex flex-col gap-2">
            <h1 className="text-2xl py-1 font-semibold">What I like to do?</h1>
            <p className="md:px-4">I really like programming so in my spare time I work on an indie game with one of my friends using Godot and C#.</p>

            <h1 className="text-2xl py-1 font-semibold">Progression?</h1>
            <p className="md:px-4">
              I am expanding my skills by learning staticly typed compiled languages such as C# and Java. 
              <br />
              <br />
              I am creating a bakery app using Java for the backend and Flutter for the frontend. This is a personal project of mine that will take a lot of my time and patience to perfect.
              <br />
            </p>

            <p>

            </p>
          </div>
        </CardComp>
      </div>
    </>
  );
};

export default More;
