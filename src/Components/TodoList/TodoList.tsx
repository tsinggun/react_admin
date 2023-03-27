import React, { useEffect , useRef} from 'react'
import { Card, Checkbox, Input, Space,Button } from 'antd';
import type { InputRef } from 'antd';
import {EditFilled, DeleteFilled } from '@ant-design/icons'
import { TodoListContainer } from './styled';

// const list =
interface TodoList {
    id: number,
    content: string,
    isDone: boolean,
    isDelete: boolean,
    tagColor?: string,
    alowEdit: boolean,
}



export default function _TodoList() {

  const [todoList, setTodoList] = React.useState<TodoList[]>([]) // 任务列表
//   const [todo, setTodo] = React.useState<TodoList>() // 任务
  const inputRef = useRef<InputRef>(null)

  useEffect(
    () => { 
        initTodoList()
    }
    ,[]
  )

  //初始化一个todoList
  const initTodoList = () => {  
    // 从localStorage中获取todoList
    // const todoList = localStorage.getItem('todoList')
    // if (todoList) {
    //   setTodoList(JSON.parse(todoList))
    // }
  }   


  const checkboxChange = (checked: any, id: any) => {
    let list = [...todoList]
    list.forEach((item) => {
        if(item.id === id) {
            item.isDone = checked
        }
    })
    setTodoList(list)
  }


  /**
   * @description 允许编辑
   * @param alowEdited 
   * @param id 
   */
  const allowEdit = (alowEdited: boolean,id: any) => {
    // let value = ''
    let list = [...todoList]
    list.forEach((item) => {
        if(item.id === id) {
            // setTodo(item)
            item.alowEdit = !alowEdited
            // value = item.content
        }
    }) 
    setTodoList(list)
    queueMicrotask(
        () => {
            inputRef.current!.focus({
                cursor: 'end',
            });
        }
    )
  }

  /**
   * @description 提交编辑的内容
   * @param text 
   * @param id 
   */
  const submitText = (text: any, id?:any) => {
    let list = [...todoList]
    list.forEach((item) => {
        if(item.id === id) {
            item.content = text
            item.alowEdit = true
        }
    })
    setTodoList(list)
  }

  /**
   * @description 设置input的值
   * @param e  
   * @param id 
   */
  const setValue = (e : any, id :any) => {
    let list = [...todoList]
    list.forEach((item) => {
        if(item.id === id) {
            item.content = e
        }
    })
    setTodoList(list)
  }

  const addItem = () => {
    let list = [...todoList]
    let id = list.length + 1
    let item = {
        id: id,
        content: '任务' + id,
        isDone: false,
        isDelete: false,
        alowEdit: true,
    }
    list.push(item)
    setTodoList(list)
  }


  const deleteItem = (id: any) => {
    let list = [...todoList]
    list.forEach((item, index) => {
        if(item.id == id) {
            list.splice(index, 1)
        }
    })
    setTodoList(list)
  }

  return (
    <TodoListContainer>
        <Card title="TodoList" style={{ width: 500}} bodyStyle={{padding:16}}>
            {
                todoList.map((item) => {
                    return (
                        <div className='list-item flex-between flex-align-center' key={item.id}>
                            <Space direction="horizontal" size="middle">
                                <Checkbox onChange={ e => {checkboxChange(e.target.checked, item.id)} } checked={item.isDone}>
                                    { 
                                        item.alowEdit ? 
                                        <span className={`${item.isDone && 'text-line-through disable-color'}`}>{item.content}</span>
                                         : 
                                        <Input 
                                            value={item.content}
                                            ref={inputRef} 
                                            size='small' 
                                            onChange={e => setValue(e.target.value, item.id)}
                                            onBlur={e => submitText(e.target.value, item.id)}
                                        /> 
                                    }
                                </Checkbox>

                            </Space>

                            <div>
                                { 
                                    item.alowEdit && 
                                    <EditFilled onClick={e=> {allowEdit(item.alowEdit, item.id)}} className='cursor-pointer hand mr-2'/> 
                                }
                                <DeleteFilled onClick={e=> {deleteItem(item.id)}} className='cursor-pointer hand'/>

                            </div>
                            
                        </div>
                    )
                })
            }
            <div className='flex-end mt-2'>
                <Button 
                    type='primary'
                    onClick={e => {addItem()}}>
                        增加一条
                </Button>
            </div>
        </Card>
    </TodoListContainer>
  )
}
