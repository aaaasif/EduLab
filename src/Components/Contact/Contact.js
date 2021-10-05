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
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Text Massage</label>
                 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Type Your Message Here....."/>
            </div>
             <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
             </div>
                <button type="submit" class="btn btn-primary">Submit</button>
        </form>
            <Footer></Footer>
        </div>
    );
};

export default Contact;