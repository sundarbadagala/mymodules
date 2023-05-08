import {BasicSingleSelect, BasicMultiSelect} from './select/select.composition'
import {Basictable, Collapsibletable} from './table/table.composition'

function App() {
  return (
    <>
      <BasicSingleSelect/>
      <BasicMultiSelect/>
      <Basictable/>
      <Collapsibletable/>
    </>
  );
}

export default App;
