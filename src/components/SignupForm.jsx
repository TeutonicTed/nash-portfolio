import { useState } from 'react'

const defaultData = { name: "", email:"", message:""}

export default function SignupForm(){

    const [ formData, setFormData ] = useState({name: "", email:"", message:""})

    function handleInputChange(event){
        // event.target.name = property that needs to be updated
        // event.target.value = property is the new value

        setFormData({...formData, [event.target.name]: event.target.value})
    }

    async function submitForm(){
        const result = await fetch ("....", {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        setFormData(defaultData)
    }

    return (
        <>
        <form onSubmit={handleSubmitForm}>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="name" value={formData.name} onChange={handleInputChange} aria-describedby="name" />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="text" name="email" className="form-control" id="description" value={formData.email} onChange={handleInputChange} aria-describedby="email" />
            </div>
            <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <input type="text" name="message" className="form-control" id="message" value={formData.message} onChange={handleInputChange} aria-describedby="email" />
            </div>
            <button onClick={submitForm}>Submit Data</button>
            </form>
        </>
    )
}

{/* <form>
<input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
<input type="text" name="email" value={formData.email} onChange={handleInputChange}/>
<input type="text" name="message" value={formData.message} onChange={handleInputChange}/>
</form>

<button onClick={submitForm}>Submit Data</button> */}