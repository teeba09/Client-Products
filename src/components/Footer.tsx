import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="m-2 mt-20">
      <div className="container mx-auto  h-full w-full bg-gray-100 shadow-sm p-10">
        <div className=" object-right-top  flex justify-around">
          <div className="">
            {" "}
            <strong> Get to know us </strong>
            <h1>carrer</h1>
            <h1>blog </h1>
            <h1>about us </h1>
          </div>
          <div>
            <strong> Follow us </strong>
            <h1>instagram</h1>
            <h1>facebook</h1>
            <h1>twitter</h1>
          </div>
          <div>
            <strong> Get to know us </strong>
            <h1> ZainCash </h1>
            <h1> Points</h1>
            <h1> Asiahawala</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
