import { useState } from "react";
import Select from "./index";

export const BasicSingleSelect = () => {
  const [option, setOption] = useState("");
  const handleChange = (val) => {
    setOption(val);
  };
  return (
    <>
    <div style={{ width: "200px" }}>
      <code style={{display:'flex'}}> <span style={{color:'#9e0d00'}}>data</span> : {JSON.stringify(basicdata)}</code>
      <code style={{display:'flex'}}><span style={{color:"#9e0d00"}}>value : </span> {option}</code>
      <Select options={basicdata} value={option} onChange={handleChange} />
    </div>
    </>
  );
};

export const SingleSelectWithCustomPlaceholders = () => {
  const [option, setOption] = useState("");
  const handleChange = (val) => {
    setOption(val);
  };
  return (
    <div style={{ width: "200px" }}>
      <code style={{display:'flex'}}> <span style={{color:'#9e0d00'}}>data</span> : {JSON.stringify(basicdata)}</code>
      <code style={{display:'flex'}}><span style={{color:"#9e0d00"}}>value : </span> {option}</code>
      <Select
        options={basicdata}
        value={option}
        onChange={handleChange}
        placeholder="Plase Select"
        searchPlaceholder="Please Search"
      />
    </div>
  );
};

export const SingleSelectWithCustomLableAndValue = () => {
  const [option, setOption] = useState("");
  const handleChange = (val) => {
    setOption(val);
  };
  return (
    <div style={{ width: "200px" }}>
      <code style={{display:'flex'}}> <span style={{color:'#9e0d00'}}>data</span> : {JSON.stringify(simpledata)}</code>
      <code style={{display:'flex'}}><span style={{color:"#9e0d00"}}>value : </span> {option}</code>
      <Select
        options={simpledata}
        value={option}
        onChange={handleChange}
        label="first_name"
        keys="last_name"
      />
    </div>
  );
};

export const SingleSelectWithCustomProps = () => {
  const [option, setOption] = useState("");
  const handleChange = (val) => {
    setOption(val);
  };
  
  return (
    <div style={{ width: "200px" }}>
      <code style={{display:'flex'}}> <span style={{color:'#9e0d00'}}>data</span> : {JSON.stringify(simpledata)}</code>
      <code style={{display:'flex'}}><span style={{color:"#9e0d00"}}>value : </span> {option}</code>
      <Select
        options={simpledata}
        value={option}
        onChange={handleChange}
        label="first_name"
        keys="last_name"
        searchProps={{
          isCaseSensitive: true,
          isTrim: true,
          isMatchFromStart: true,
        }}
        headProps={{
          startIcon: <i className="fa-sharp fa-solid fa-check"></i>,
          downIcon: <i className="fa-sharp fa-solid fa-circle-down"></i>,
          upIcon: <i className="fa-sharp fa-solid fa-circle-up"></i>,
        }}
      />
    </div>
  );
};

export const SingleSelectWithCustomLabel = () => {
  const [option, setOption] = useState("");
  const handleChange = (val) => {
    setOption(val);
  };
  const customLabel = (item, callback, style) => {
    return (
      <div
        style={{
          ...style,
          height: "40px",
          backgroundColor: `${item.isHighlight ? "#c0d481" : "#e7fc9f"}`,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => callback(item)}
      >
        <i className="fa-solid fa-star" style={{ marginRight: "10px" }}></i>{" "}
        {item.first_name} {item.last_name}
      </div>
    );
  };
  return (
    <div style={{ width: "200px" }}>
      <code style={{display:'flex'}}> <span style={{color:'#9e0d00'}}>data</span> : {JSON.stringify(complexdata)}</code>
      <code style={{display:'flex'}}><span style={{color:"#9e0d00"}}>value : </span> {option}</code>
      <Select
        options={complexdata}
        value={option}
        onChange={handleChange}
        customLabel={customLabel}
      />
    </div>
  );
};

export const SingleSelectWithCustomStyles = () => {
  const [option, setOption] = useState("");
  const handleChange = (val) => {
    setOption(val);
  };
  return (
    <div style={{ width: "200px" }}>
      <code style={{display:'flex'}}> <span style={{color:'#9e0d00'}}>data</span> : {JSON.stringify(complexdata)}</code>
      <code style={{display:'flex'}}><span style={{color:"#9e0d00"}}>value : </span> {option}</code>
      <Select
        options={complexdata}
        value={option}
        onChange={handleChange}
        styles={{
          searchStyles: {
            height: "30px",
            fontWeight: "bold",
            backgroundColor: "#faddca",
          },
          headStyles: {
            border: "2px solid #fa9657",
            backgroundColor: "#faddca",
            height: "30px",
          },
          bodyStyles: {
            borderRadius: "10px",
            boxShadow: "3px 3px 3px #cecece",
          },
          labelStyles: {
            backgroundColor: ["#faddca", "#fa9657", "#faa875"],
            color: ["#000000", "#000000", "#000000"],
            height: "30px",
          },
        }}
      />
    </div>
  );
};

export const BasicMultiSelect = () => {
  const [opts, setOpts] = useState([]);
  const handleChange = (ops) => {
    setOpts(ops);
  };
  return (
    <div style={{ width: "200px" }}>
      <code style={{display:'flex'}}> <span style={{color:'#9e0d00'}}>data</span> : {JSON.stringify(basicdata)}</code>
      <code style={{display:'flex'}}><span style={{color:"#9e0d00"}}>value : </span> {JSON.stringify(opts)}</code>
      <Select
        isMulti
        options={basicdata}
        value={opts}
        onChange={handleChange}
      />
    </div>
  );
};

export const MultiSelectWithCustomPlaceholder = () => {
  const [opts, setOpts] = useState([]);
  const handleChange = (ops) => {
    setOpts(ops);
  };
  return (
    <div style={{ width: "200px" }}>
      <code style={{display:'flex'}}> <span style={{color:'#9e0d00'}}>data</span> : {JSON.stringify(basicdata)}</code>
      <code style={{display:'flex'}}><span style={{color:"#9e0d00"}}>value : </span> {JSON.stringify(opts)}</code>
      <Select
        options={basicdata}
        value={opts}
        onChange={handleChange}
        placeholder="Select First Name"
        searchPlaceholder="Search First Name"
      />
    </div>
  );
};

export const MultiSelectWithCustomLabelAndValue = () => {
  const [opts, setOpts] = useState([]);
  const handleChange = (ops) => {
    setOpts(ops);
  };
  return (
    <div style={{ width: "200px" }}>
      <code style={{display:'flex'}}> <span style={{color:'#9e0d00'}}>data</span> : {JSON.stringify(basicdata)}</code>
      <code style={{display:'flex'}}><span style={{color:"#9e0d00"}}>value : </span> {JSON.stringify(opts)}</code>
      <Select
        isMulti
        options={simpledata}
        value={opts}
        onChange={handleChange}
        label="first_name"
        keys="last_name"
      />
    </div>
  );
};

export const MultiSelectWithCustomProps = () => {
  const [opts, setOpts] = useState([]);
  const handleChange = (ops) => {
    setOpts(ops);
  };
  return (
    <div style={{ width: "200px" }}>
      <Select
        isMulti
        options={simpledata}
        value={opts}
        onChange={handleChange}
        label="first_name"
        keys="last_name"
        searchProps={{
          isCaseSensitive: true,
          isTrim: true,
          isMatchFromStart: true,
        }}
        headProps={{
          startIcon: <i className="fa-sharp fa-solid fa-check"></i>,
          downIcon: <i className="fa-sharp fa-solid fa-circle-down"></i>,
          upIcon: <i className="fa-sharp fa-solid fa-circle-up"></i>,
        }}
        checkBoxProps={{
          type: "circle", //square, circle, mark
        }}
      />
    </div>
  );
};

export const MultiSelectWithCustomLabel = () => {
  const [opts, setOpts] = useState([]);
  const handleChange = (ops) => {
    setOpts(ops);
  };
  const customLabel = (item, callback, style) => {
    return (
      <div
        style={{
          ...style,
          height: "40px",
          backgroundColor: item.isChecked ? "#afe5fa" : "#d7f0fa",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => callback(item)}
      >
        <input
          type="checkbox"
          checked={item.isChecked}
          onChange={() => callback(item)}
          style={{ marginRight: "6px" }}
        />
        <span>
          {item.value === "select_all"
            ? "Select All"
            : `hi ${item.first_name} ${item.last_name}`}
        </span>
      </div>
    );
  };
  return (
    <div style={{ width: "200px" }}>
      <Select
        isMulti
        options={simpledata}
        value={opts}
        onChange={handleChange}
        keys="last_name"
        customLabel={customLabel}
      />
    </div>
  );
};

export const MultiSelectWithCustomStyles = () => {
  const [opts, setOpts] = useState([]);
  const handleChange = (ops) => {
    setOpts(ops);
  };
  return (
    <div style={{ width: "200px" }}>
      <Select
        isMulti
        options={simpledata}
        value={opts}
        onChange={handleChange}
        label="first_name"
        keys="last_name"
        styles={{
          searchStyles: {
            height: "30px",
            fontWeight: "bold",
          },
          headStyles: {
            border: "2px solid green",
            backgroundColor: "#f9fcde",
            height: "30px",
          },
          bodyStyles: {
            boxShadow: "3px 3px 3px black",
          },
          labelStyles: {
            backgroundColor: ["#f9fcde", "#ecfa82", "#f3fabe"],
            color: ["#000000", "#000000", "#000000"],
            height: "40px",
          },
          checkBoxStyles: {
            border: ["2px solid green", "2px solid green"],
            width: "15px",
            height: "15px",
            backgroundColor: ["#f9fcde", "green"],
            color: "#ffffff",
          },
        }}
      />
    </div>
  );
};

const basicdata = [
  { id: 1, label: "Amby", value: "j1HPTu" },
  { id: 2, label: "Klara", value: "sS5As4" },
  { id: 3, label: "Lay", value: "RHuFGr" },
  { id: 4, label: "Lyell", value: "V6ITSH" },
  { id: 5, label: "Amerigo", value: "mpeuQO" },
  { id: 6, label: "Ofella", value: "VTa9SY" },
  { id: 7, label: "Gianna", value: "P17FmY" },
  { id: 8, label: "Nestor", value: "sfvx9t" },
  { id: 9, label: "Chalmers", value: "dJ0e9q" },
  { id: 10, label: "Fredi", value: "jazsBk" },
];

const simpledata = [
  { id: 1, first_name: "Sada", last_name: "Truran", code: "jJ7e4F" },
  { id: 2, first_name: "Norah", last_name: "Dayley", code: "AJYrgP" },
  { id: 3, first_name: "Jeri", last_name: "Vasyutkin", code: "3OnIeT" },
  { id: 4, first_name: "Barny", last_name: "Hartzog", code: "fdKkW9" },
  { id: 5, first_name: "Greggory", last_name: "Pideon", code: "jc0dDC" },
  { id: 6, first_name: "Cozmo", last_name: "Godfery", code: "gkciA4" },
  { id: 7, first_name: "Klemens", last_name: "Czapla", code: "7QFSgc" },
  { id: 8, first_name: "Micaela", last_name: "Bartles", code: "Z34y5u" },
  { id: 9, first_name: "Graehme", last_name: "Beebis", code: "htR9jA" },
  { id: 10, first_name: "Enrique", last_name: "Guiett", code: "7t3Xga" },
];

const complexdata = [
  {id: 1,first_name: "Nelli",last_name: "McConnell",key: "nxnNSH",count: 72,color: "#1680ec",is_available: true,label: "Ingmar",value: "rqbqjD",},
  {id: 2,first_name: "Willabella",last_name: "Jimmison",key: "EBek3X",count: 59,color: "#68254e",is_available: true,label: "Esme",value: "9fzxIW",},
  {id: 3,first_name: "Clarence",last_name: "Fieldsend",key: "GuYvXk",count: 40,color: "#9f7324",is_available: false,label: "Hadley",value: "H4i09E",},
  {id: 4,first_name: "Jyoti",last_name: "Frick",key: "596ZdB",count: 89,color: "#b4e1ee",is_available: false,label: "Petronella",value: "gU4ugr",},
  {id: 5,first_name: "Stacy",last_name: "Sadry",key: "KV8cem",count: 22,color: "#3a223e",is_available: true,label: "Teresa",value: "qNkRKZ",},
  {id: 6,first_name: "Dana",last_name: "Rive",key: "ArIJpH",count: 39,color: "#8d35bc",is_available: true,label: "Hermann",value: "lEOmb6",},
  {id: 7,first_name: "Ardath",last_name: "Slocket",key: "FPeEqd",count: 78,color: "#30fa67",is_available: true,label: "Stanly",value: "TIzdvo",},
  {id: 8,first_name: "Freddy",last_name: "Batisse",key: "1cqcID",count: 47,color: "#c66eb1",is_available: false,label: "Tomlin",value: "2tNkDT",},
  {id: 9,first_name: "Deanne",last_name: "Andrieu",key: "4Be8nX",count: 83,color: "#0a9215",is_available: true,label: "Andres",value: "gKBdfb",},
  {id: 10,first_name: "Caritta",last_name: "Caine",key: "Hb1gkk",count: 48,color: "#e313cc",is_available: false,label: "Lorene",value: "kQLDHW",  }
];
