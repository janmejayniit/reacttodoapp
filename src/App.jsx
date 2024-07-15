import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [message, setMessage] = useState()
  const [todolist, setTodoList] = useState([{id:'',}])

  const addTodohandler = () =>{

    setTodoList([...todolist, {id: uuidv4(), message, isCompleted: false}]);

    console.log(todolist);
    setMessage('');
  }

  return (
    <div className='container mt-2'>
       <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'><p>Todo List</p></div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-md-12'>
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                        <button className="btn btn-outline-secondary" type="button" onClick={addTodohandler}>ADD</button>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            {todolist && todolist.length>0 ? (
              
                todolist.map((msg)=>{
                  return(
                    <div className="card mt-2  h-5" id={msg.id} style={{borderRadius:'0px'}}>
                      <div className="card-body">
                        <div className='row mb-2'>
                          <div className="col-md-9">
                              {msg.message}
                          </div>
                          <div className='col-md-3 float-end'>  
                            <div className="input-group mb-3 ">
                              <button className="btn btn-sm btn-warning float-end" type="button"><i class="bi bi-check-square"></i></button>
                              <button className="btn btn-sm btn-primary float-end" type="button"><i class="bi bi-pencil-square"></i></button>
                              <button className="btn btn-sm btn-danger float-end" type="button"><i class="bi bi-trash"></i></button>  
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  )
                }) 
              
            ):
            (<></>)}

             

            



          </div>
       </div>
    </div>
  )
}

export default App
