import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [validationErrors, setValidationErrors] = useState({
        name: false,
        email: false,
        message: false
    });

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        
        if (name === 'email' && !emailPattern.test(value)) {
            setValidationErrors({
                ...validationErrors,
                email: true
            });
        } else if (value.trim() === '') {
            setValidationErrors({
                ...validationErrors,
                [name]: true
            });
        } else {
            setValidationErrors({
                ...validationErrors,
                [name]: false
            });
        }
    };

    const submitForm = (e) => {
        e.preventDefault();
        
        // Check if all fields are filled
        if (formData.name && formData.email && formData.message) {
            // Save form data to local storage
            localStorage.setItem('formData', JSON.stringify(formData));

            console.log(formData);

            setFormData({
                name: '',
                email: '',
                message: ''
            });
    
            // Clear validation errors
            setValidationErrors({
                name: false,
                email: false,
                message: false
            });
            
            // Redirect or perform any other action here after saving to local storage
        } else {
            // Display error message if form is incomplete
            alert('Please complete the form.');
        }
    };

    return (
        <div>
            <br />
            <h3>Contact Me!</h3>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-10">
                    <form onSubmit={submitForm}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name="name" className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`} id="name" value={formData.name} onChange={handleInputChange} onBlur={handleBlur} aria-describedby="name" />
                                {validationErrors.name && <div className="invalid-feedback">Name is required</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" name="email" className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`} id="email" value={formData.email} onChange={handleInputChange} onBlur={handleBlur} aria-describedby="email" />
                                {validationErrors.email && <div className="invalid-feedback">Email is required</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea 
                                    name="message" 
                                    className={`form-control ${validationErrors.message ? 'is-invalid' : ''}`} 
                                    id="message" 
                                    value={formData.message} 
                                    onChange={handleInputChange} 
                                    onBlur={handleBlur} 
                                    aria-describedby="message"
                                />
                                {validationErrors.message && <div className="invalid-feedback">Message is required</div>}
                            </div>
                            <button className="btn btn-warning" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;