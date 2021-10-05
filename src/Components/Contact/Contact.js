import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <br />
            <br />
            <br />
         <form className='m-5'>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                 <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Text Massage</label>
                 <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Type Your Message Here....."/>
            </div>
             <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
             </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
            <Footer></Footer>
        </div>
    );
};

export default Contact;