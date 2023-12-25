import React from 'react'

const passLen = (props) => {
   const passwordLength=(e)=>{
     console.log(e.target.value);
     props.setLength(e.target.value);
   }
  return (
    <div>
    <div className='pass-length'>
    <label>
         Put Password length(**8-50 characters**)
    </label>
    <input
        type="number"
        value={passwordLength}
        onChange={(e)=>passwordLength(e) }
      />
  </div>
    </div>
  )
}

export default passLen;
