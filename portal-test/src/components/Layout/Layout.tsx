import React from "react";
import PageHeader from "./Header";
import PageFooter from "./Footer";

const PageLayout: React.FC = ({ children }) => {
  return (
    <div id="wrapper">
      <PageHeader />
        <div className="container mx-auto">{children}</div>
      <PageFooter />
    </div>
  );
}

export default PageLayout;