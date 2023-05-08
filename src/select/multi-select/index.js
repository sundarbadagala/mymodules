/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Select from "./select";
import { SelectContext } from "../contextApi";

const Index = (props) => {
  const { handleDetails } = useContext(SelectContext);
  useEffect(() => {
    handleDetails({...props});
  }, [props]);
  return <Select />;
};

export default Index;
