import React, { useState } from 'react'
import './sign_up.css';

export const Sign_up = () => {

    const[team, setTeam] = useState(false);
    const handleTeam = ()=>{
        setTeam(!team);
    }

  return (
    <body>
  <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
     <section className='slider-container'>
        <p>State level Tennis Ball Cricket Tournament, TCOER, Pune !!</p>
     </section>
     <section className='main'>
    <form className='form' onSubmit={handleTeam}>
        <div className='div'>
        <label htmlFor='name'>Team Name </label>
        <input id='name' name='name' type='text'></input>
        </div>
        <div className='div'>
        <label htmlFor='dept'> Department </label>
        <select id='dept' name='dept'>
        <option value='comp'>Computer</option>
        <option value= 'it'>Information Technology</option>
        <option value='entc'>ENTC</option>
        <option value='civil'>Civil</option>
        <option value='mech'>Mechanical</option>
        <option value='electrical'>Electrical</option>
        </select>
        </div>
        <div className='div'>
        <label htmlFor='clg'>College Name </label>
        <input id='clg' name='clg' type='text'></input>
        </div>
        <div className='div'>
        <button class="button-8" role="button" type='submit'>
  <span class="text" > Register </span>
</button>
        </div>    
    </form>
    </section>
    {team && (<h1>Congratulations !!! </h1>)}
  </div>

 
</body>
   
  )
}
