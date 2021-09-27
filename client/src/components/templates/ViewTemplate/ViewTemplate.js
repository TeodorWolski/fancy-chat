import React from "react";
import PropTypes from "prop-types";
import Sidebar from "components/organisms/Sidebar/Sidebar";

const ViewTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

ViewTemplate.propTypes = {
  children: PropTypes.element,
};

export default ViewTemplate;
