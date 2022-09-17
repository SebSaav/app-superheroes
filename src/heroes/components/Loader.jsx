import "../styles/Loader.css";
import marvel from "../../assets/meme.png";

export const Loader = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <span class="loader"></span>
        <img src={marvel} className="py-20 w-full h-full rounded-l-2xl" />
      </div>
    </>
  );
};
