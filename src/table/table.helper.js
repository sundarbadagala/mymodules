export const renderFields = [
  { header: "First Name", field: "first_name" },
  {
    header: "Last Name",
    field: "last_name",
    render: (data, field) => {
      return (
        <div
          style={{
            color: "#000000",
            textDecoration: "underline",
            fontWeight: "600",
          }}
        >
          {data.last_name}
        </div>
      );
    },
  },
  { header: "Mail", field: "email" },
  {
    header: "Date of Birth",
    field: "date_of_birth",
    render: (data) => {
      return (
        <button
          style={{
            border: "none",
            outline: "none",
            background: "none",
            padding: "4px 8px",
            cursor: "pointer",
          }}
          onClick={() => getDOB(data)}
        >
          {data.date_of_birth}
        </button>
      );
    },
  },
  {
    header: "age",
    field: "age",
    render: (data, field, callback) => {
      return (
        <button
          style={{
            background: "#fceceb",
            outline: "none",
            borderRadius: "4px",
            border: "1px solid #eb4034",
            cursor: "pointer",
            color: "#eb4034",
          }}
          onClick={() => callback("handleAge", () => data)}
        >
          {data?.[field.header] > 18 ? "Major" : "Minor"}
        </button>
      );
    },
  },
  {
    header: "Available",
    field: "is_available",
    render: (data, field, callback) => getButton(data, field, callback),
  },
];

const getDOB = (data) => {
  const age = new Date().getFullYear() - new Date(data.date_of_birth).getFullYear()
  console.log(`user ${data.first_name} dob ${data.date_of_birth} age ${age}`);
};

const getButton = (data, field, callback) => {
  return (
    <button
      style={{
        cursor: "pointer",
        padding: "4px 8px",
        borderRadius: "4px",
        backgroundColor: `${data.is_available ? "#ffffff" : "#000000"}`,
        border: `1px solid #000000`,
        color: `${data.is_available ? "#000000" : "#ffffff"}`,
      }}
      onClick={() =>
        callback("handleAvailable", () => {
          return data.is_available ? "user available" : "user not avable";
        })
      }
    >
      {data.is_available ? "Available" : "Not Available"}
    </button>
  );
};
