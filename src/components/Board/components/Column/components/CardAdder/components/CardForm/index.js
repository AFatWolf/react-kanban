import { useRef, useState } from 'react'
import { when } from '@services/utils'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function CardForm({ onConfirm, onCancel }) {
  const inputCardTitle = useRef()
  const inputCardDescription = useRef()
  // const inputCardDeadline = useRef()
  const [inputCardDeadline, setInputCardDeadline] = useState(new Date());

  function addCard(event) {
    event.preventDefault()
    when(inputCardTitle.current.value)((value) => {
      onConfirm({ name: value, description: inputCardDescription.current.value, deadline: inputCardDeadline})
    })
  }

  return (
    <div className='react-kanban-card-adder-form'>
      <p>Change 1</p>
      <form onSubmit={addCard}>
        <input
          className='react-kanban-card-adder-form__title'
          name='title'
          autoFocus
          defaultValue='Title'
          ref={inputCardTitle}
        />
        <input
          className='react-kanban-card-adder-form__description'
          name='description'
          defaultValue='Description'
          ref={inputCardDescription}
        />
        {/* <input
          className='react-kanban-card-adder-form__deadline'
          name='deadline'
          defaultValue={new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/')}
          ref={inputCardDeadline}
        /> */}
        <label htmlFor="deadline" className='react-kanban-card-adder-form__deadline__header'>Deadline</label>
        <DatePicker
          className='react-kanban-card-adder-form__deadline'
          name='deadline'
          selected={inputCardDeadline}
          onChange={(date) => setInputCardDeadline(date)}
        />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
          <button className='react-kanban-card-adder-form__button' type='submit'>
            Add
          </button>
          <button className='react-kanban-card-adder-form__button' type='button' onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default CardForm
