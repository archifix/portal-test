import React from "react";
import PageLayout from "../../Layout/Layout";
import "../../styles/content.scss";

export const CorruptPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="page">
        <br />
        <h1 className="flex uppercase justify-center">
          Противодействие коррупции
        </h1>
        <hr className="border-1.5 border-slate-300"/>
        <div className="col">2</div>
        <div className="col">3</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum
          vero, repudiandae expedita beatae iure? Mollitia tempore quae qui
          voluptatum.
        </p>
      </div>
    </PageLayout>
  );
};
export default CorruptPage;
