import {
  Date,
  Default,
  CheckBox,
  Refresh,
  Tag,
  Chip,
} from "../../bodyCells";
import {
  Sort,
  Search,
  Tag as HeadTag,
  Refresh as HeadRefrsh,
  CheckBox as HeadCheckBox,
  Default as HeadDefault,
  SearchSort,
  Dropdown,
} from "../../headercells";

//------------------------------------------------------

export const renderBodyCell = (item, dataItem, styles) => {
  switch (item.fieldType) {
    case "date":
      return (
        <Date
          data={dataItem}
          field={item.field}
          format={item.dateFormat}
          styles={styles?.field}
          item={item}
        />
      );
    case "checkbox":
      return <CheckBox data={dataItem} styles={styles?.field} />;
    case "refresh":
      return (
        <Refresh
          data={dataItem}
          field={item.field}
          item={item}
          _id={item._id}
          styles={styles?.field}
        />
      );
    case "tag":
      return <Tag data={dataItem} field={item.field} item={item} />;
    case "chip":
      return <Chip data={dataItem} field={item.field} item={item} />;
    default:
      return (
        <Default data={dataItem} field={item.field} styles={styles?.field} />
      );
  }
};

//-------------------------------------------------

export const renderHeaderCell = (item) => {
  switch (item.headerType) {
    case "sort":
      return <Sort item={item} />;
    case "search":
      return <Search item={item} />;
    case "tag":
      return <HeadTag item={item} />;
    case "checkbox":
      return <HeadCheckBox item={item} />;
    case "refresh":
      return <HeadRefrsh item={item} />;
    case "search-sort":
      return <SearchSort item={item} />;
    case "dropdown":
      return <Dropdown item={item} />;
    default:
      return <HeadDefault item={item} />;
  }
};
