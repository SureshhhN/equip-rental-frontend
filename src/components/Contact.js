import React from 'react'

const Contact = () => {
    return(
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='https://ukfashion.nl/wp-content/uploads/2018/12/Lyle-and-Scott-Logo-e1520419093277.jpg' height="auto" width="100%"/>   

                    <h3 className='contactus'>Contact no: +91 9988776655</h3>
                    <h3 className='contactus'>Mail Us @ scottbrand@gmail.com</h3>
                    </div>
                    
                    <div className='col-md-6 my-5 py-5'>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email"/>
                            </div>

                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows= "3"></textarea>
                            <div className='buttons d-flex justify-content-center my-2 py-3'>

                                <buttton className='btn btn-primary' onClick={() => alert ('Your Message is sent')}>Submit</buttton>
                            </div>
  
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Contact