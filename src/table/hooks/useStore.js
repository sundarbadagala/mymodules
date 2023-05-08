import { useEffect, useContext } from "react";
import {TableContext} from '../contextApi'

export function useStore(props) {
  const { data, fields, styles, onSelect, refreshProps, collapsibleFields, renderCell,iconProps, ...rest } =
    props;
  const { handleStore } = useContext(TableContext);
  useEffect(() => {
    handleStore(
      data,
      fields,
      styles,
      onSelect,
      refreshProps,
      collapsibleFields,
      renderCell,
      iconProps,
      rest
    );
  }, []);
}
