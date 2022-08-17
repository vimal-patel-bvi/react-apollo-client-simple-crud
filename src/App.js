import './App.css';
import { useState } from 'react';
import Create from './components/Create';
import EditPost from './components/EditPost';
import Posts from './components/Posts';

function App() {
  const [editForm, setEditForm] = useState({
    row: "",
    visible: false
  });

  return (
    <div className='container'>
      <Create />
      {
        editForm.visible &&
        <EditPost row={editForm.row} updated={() => setEditForm({
          row: "",
          visible: false
        })} />
      }
      <Posts onUpdate={(row) => { setEditForm({ row, visible: true }) }} />

    </div>
  );
}

export default App;
