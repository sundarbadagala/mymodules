import React from "react";
import { TableProvider } from "./contextApi";
import { Basic, Action, Side, Nested } from "./tables";

export const BasicTable = (props) => {
  return (
    <TableProvider>
      <Basic {...props} />
    </TableProvider>
  );
};

export const ActionTable = (props) => {
  return (
    <TableProvider>
      <Action {...props} />
    </TableProvider>
  );
};

export const SideTable = (props) => {
  return (
    <TableProvider>
      <Side {...props} />
    </TableProvider>
  );
};

export const NestedTable = (props) => {
  return (
    <TableProvider>
      <Nested {...props} />
    </TableProvider>
  );
};
