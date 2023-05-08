import React from "react";
import {
  helperSearch,
  helperDebounce,
  helperSearchKeys,
  helperSort,
  helperMemoization,
} from "./helpers";

const TableContext = React.createContext();

class TableProvider extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      backupData: [],
      fields: [],
      styles: {},
      onSelect: () => {},
      checkedData: [],
      isSearchEnable: false,
      fData: [],
      refreshProps:{},
      collapsibleFields:[],
      renderCell:()=>{},
      callbacks:{},
      iconProps:{},
      rest:{},
      tooltip:{}
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.checkedData !== this.state.checkedData) {
      this.state.onSelect && this.state.onSelect(this.state.checkedData);
    }
  };

  handleStore = (data, fields, styles, onSelect, refreshProps, collapsibleFields, renderCell,iconProps, rest) => {
    const tableData = data.map((item, index) => ({
      ...item,
      _id: index,
      isChecked: false,
    }));
    this.setState({
      data: tableData,
      backupData: tableData,
      fields: fields,
      styles: styles,
      onSelect: onSelect,
      refreshProps:refreshProps,
      collapsibleFields:collapsibleFields,
      renderCell:renderCell,
      iconProps:iconProps,
      rest:rest
    });
  };

  onSort = (field, orderBy) => {
    console.log("on sort");
    const { backupData, fData } = this.state;
    const sortedData = helperSort(
      fData.length ? fData : backupData,
      field,
      orderBy
    );
    return sortedData;
  };

  handleSort = (() => {
    const cache = {};
    let sdata = [];
    return (field, orderBy) => {
      console.log("handle sort");
      const key = `${field}.${orderBy}`;
      if (this.state.isSearchEnable) {
        sdata = this.onSort(field, orderBy);
      } else if (!cache[key]) {
        cache[key] = this.onSort(field, orderBy);
      }
      this.setState({
        data: this.state.isSearchEnable ? sdata : cache[key],
      });
    };
  })();

  onSearch = (value, field) => {
    console.log("on search");
    const { backupData, fData } = this.state;
    const sKeys = helperSearchKeys(value, field);
    const searchedData = helperSearch(backupData, sKeys);
    this.setState({
      data: searchedData,
      fData: searchedData,
      isSearchEnable: true,
    });
  };

  handleSearch = helperDebounce(this.onSearch, 500);
  handleClearSearch = () => {
    console.log("handle clear search");
    this.setState({
      data: this.state.backupData,
      isSearchEnable: false,
    });
  };

  handleRefreshAll = () => {
    const {api} = this.state.refreshProps
    fetch(`${api}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data:res
        })
      });
  };

  handleCheckAll = (isChecked) => {
    if (isChecked) {
      this.setState({
        data: this.state.data.map((item) => ({ ...item, isChecked: true })),
        checkedData: this.state.backupData,
      });
    } else {
      this.setState({
        data: this.state.data.map((item) => ({ ...item, isChecked: false })),
        checkedData: [],
      });
    }
  };
  handleCheck = (isChecked, item, idx) => {
    const newData = [...this.state.data];
    if (isChecked) {
      newData[idx] = { ...item, isChecked: true };
      this.setState({
        data: newData,
        checkedData: [...this.state.checkedData, item],
      });
    } else {
      newData[idx] = { ...item, isChecked: false };
      this.setState({
        data: newData,
        checkedData: this.state.checkedData.filter((item) => item._id !== idx),
      });
    }
  };
  handleSelect = (value, field) => {
    const { backupData, fData } = this.state;
    const sData = fData?.length ? fData : backupData;
    const val = sData?.filter((item) => String(item[field]) === String(value));
    this.setState({
      data: value === "all" ? sData : val,
    });
  };
  handleCallbacks=(name, fn)=>{
    if(this.state.rest[name]){
      return this.state.rest[name](fn())
    }
  }
  handleTooltip=(e)=>{
    if(e){
    this.setState({
      tooltip : {
        text:e.target.textContent,
        positions:{
          x:e.clientX,
          y:e.clientY
        }
      }
    })
    }else{
      this.setState({
        tooltip:null
      })
    }
  }
  render() {
    return (
      <TableContext.Provider
        value={{
          ...this.state,
          handleStore: this.handleStore,
          handleSort: this.handleSort,
          handleSearch: this.handleSearch,
          handleClearSearch: this.handleClearSearch,
          handleRefreshAll: this.handleRefreshAll,
          handleCheckAll: this.handleCheckAll,
          handleCheck: this.handleCheck,
          handleSelect: this.handleSelect,
          handleCallbacks:this.handleCallbacks,
          handleTooltip:this.handleTooltip
        }}
      >
        {this.props.children}
      </TableContext.Provider>
    );
  }
}

const TableConsumer = TableContext.Consumer;

export { TableProvider, TableConsumer, TableContext };
