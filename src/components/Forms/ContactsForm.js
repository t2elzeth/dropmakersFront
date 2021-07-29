import React,{useState} from 'react';

const ContactsForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [massage, setMassage] = useState('')
  const [error, setError] = useState(false)

  const handleForm = (e) => {
    e.preventDefault()
    if(name !== '' && email !== '' && massage !== '') {
      console.log(name, email, massage)
    }
    else setError(true)
  }

  return (
    <div className='contactsForm' id="contactsForm">
      <h2 className='title'>Contact Us</h2>
      <form className='form' onSubmit={handleForm}>
        <div className='form-data'>
          <div className='data-left'>
            <div className='data-left-label data-left-label--1'>
              <label htmlFor='name'>Name</label>
              <input 
                id='name' 
                className='name' 
                onFocus={() => setError(false)}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='data-left-label data-left-label--2'>
              <label htmlFor='email'>Email</label>
              <input 
                id='email' 
                type='email'
                className='email' 
                onFocus={() => setError(false)}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
          </div>
          <div className='data-right'>
            <label htmlFor='massage'>Message</label>
            <textarea 
              className='massage' 
              id='massage' 
              onFocus={() => setError(false)}
              onChange={(e) => setMassage(e.target.value)}/>
          </div>
        </div>
        {error && <p className='data-error'>Fill all data</p>}
        <button className='btn' type="submit">Send</button>
      </form>
    </div>
  )
}

export default ContactsForm
