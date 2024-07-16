import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [message, setMessage] = useState()
  const [todolist, setTodoList] = useState([])

  const addTodohandler = () =>{
    if (message.length>0){
      setTodoList([...todolist, {id: uuidv4(), message, isCompleted: false}]);
    }
    else{
      document.getElementById('task_box').focus();
    }
    setMessage('');
  }

  const deleteTaks = (id)=>{
    let newTodos = todolist.filter(item=>{
      return item.id!==id
    }); 
    setTodoList(newTodos)
  }

  const markCompleted = (id )=>{

    let index = todolist.findIndex(item=>{
      return item.id === id;
    }) 
    let newTodos = [...todolist];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodoList(newTodos)
  }


  const editTodo = ( id)=>{ 
    let t = todolist.filter(i=>i.id === id) 
    console.log(t)
    setMessage(t[0].message)
    let newTodos = todolist.filter(item=>{
      return item.id!==id
    }); 
    setTodoList(newTodos) 
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
                        <input type="text" id="task_box" className="form-control" placeholder="" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                        <button className="btn btn-outline-secondary" type="button" onClick={addTodohandler}>ADD</button>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            {todolist && todolist.length>0 ? (
                todolist.map((msg)=>{
                  return(
                    <div className="card mt-2  h-5" id={msg.id} style={{borderRadius:'0px', boxShadow:'1px 0px 2px 0px'}}>
                      <div className="card-body">
                        <div className='row mb-2'>
                          <div className="col-md-9">
                              {msg.isCompleted?<del>{msg.message}</del>:msg.message}
                          </div>
                          <div className='col-md-3 float-end'>  
                            <div className="input-group mb-3 ">
                              <button className="btn btn-sm btn-warning float-end" type="button" onClick={()=>{markCompleted(msg.id)}}>
                                 {msg.isCompleted?<i className="bi bi-check-square"></i> : <i className="bi bi-app"></i> }
                                 </button>
                              <button className="btn btn-sm btn-primary float-end" type="button" onClick={()=>{editTodo(msg.id)}}><i className="bi bi-pencil-square"></i></button>
                              <button className="btn btn-sm btn-danger float-end" type="button" onClick={()=>{deleteTaks( msg.id)}}><i className="bi bi-trash"></i></button>  
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })  
            ):
            (<>No More Taks are available</>)}
          </div>
       </div>
    </div>
  )
}

export default App
