import './contact.css'
import Header from '../../components/Header'
import ContactImage from '../../assets/images/istockphoto-1396840742-612x612.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <>
      <Header title="Say Hi" image={ContactImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus architecto quaerat aperiam ipsum unde totam aliquid corporis quis necessitatibus. Rerum.
      </Header>

      <div className="contact">
      <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="mailto:victoribor50@gmail.com" target='_blank' rel='noreferrer noopener'> <MdEmail /> </a>
            <a href="https://facebook.com/Victor Ibor" target='_blank' rel='noreferrer noopener'> <BsMessenger /> </a>
            <a href="https://wa.me/+2348064679259" target='_blank' rel='noreferrer noopener'> <IoLogoWhatsapp /> </a>
            
          </div>

          <div className="appointments_container">

          <div className='text'>
                <h2>Tell Us Your Plans</h2>
                <p>This dummy Text was written by Victor Daniel Ibor, A web Developer dolor sit amet consectetur adipisicing elit. Deserunt quae nobis culpa, eligendi ab odio a dolores eum asperiores? Recusandae?</p>
                <article>
                    <div className="info_icon">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div className="">
                        <h4>Experience Engineers</h4>
                        <small>This dummy Text was written by Victor Daniel Ibor, A web Developer dolor sit amet consectetur adipisicing elit. Mollitia, magni illo, rem ducimus corporis earum, officia voluptates totam iusto voluptas enim nesciunt facere aspernatur maxime cupiditate eveniet. Minima, odio iure.</small>
                    </div>
                </article>
     
                <article>
                 <div className="info_icon">
                     <i className="fa fa-hospital" aria-hidden="true"></i>
                 </div>
                 <div className="">
                     <h4>Advanced Technologies</h4>
                     <small>This dummy Text was written by Victor Daniel Ibor, A web Developer dolor sit amet consectetur adipisicing elit. Mollitia, magni illo, rem ducimus corporis earum, officia voluptates totam iusto voluptas enim nesciunt facere aspernatur maxime cupiditate eveniet. Minima, odio iure.</small>
                 </div>
             </article>
     
             <article>
                 <div className="info_icon">
                     <i className="fa fa-medkit" aria-hidden="true"></i>
                 </div>
                 <div className="">
                     <h4>Time managements</h4>
                     <small>This dummy Text was written by Victor Daniel Ibor, A web Developer dolor sit amet consectetur adipisicing elit. Mollitia, magni illo, rem ducimus corporis earum, officia voluptates totam iusto voluptas enim nesciunt facere aspernatur maxime cupiditate eveniet. Minima, odio iure.</small>
                 </div>
             </article>
     
          </div>


          <form action="">
               <div className="form_group">
                <label for="name">Name</label>
                <input type="text" placeholder="Enter Your Name" name="patient's_name" id="name" required />
               </div>
               <div className="form_group">
                   <label for="phone">Phone Number</label>
                   <input type="text" placeholder="Enter Phone Number" name="phone" id="phone_number" required />
               </div>

               <div className="form_group">
                   <label for="date">Date</label>
                   <input type="date" placeholder="Choose a date" name="date" id="date" required />
               </div>

               <div className="form_group">
                   <label for="department">Select Department</label>
                    <select name="department" id="department" required>
                        <option value="department_one">Cardiology</option>
                        <option value="department_two">Surgery</option>
                        <option value="department_three">Dentist</option>
                        <option value="department_four">opthamology</option>
                        
                    </select>
               </div>

               <div classNameName="form_group">
                <label for="department">Select Doctor</label>
                 <select name="doctor" id="doctor" required>
                     <option value="doctor_one">Surgery Specialist</option>
                     <option value="doctor_two">Dentist Specialist</option>
                     <option value="doctor_three">Cardiology Specialist</option>
                     <option value="doctor_four">Optic/Eye Specialist</option>
                     <option value="doctor_four">X-ray Specialist</option>
                     
                 </select>
               </div>

               <div className="form_group">
                   <label for="message">Additional Message</label>
                   <textarea name="message" id="message" rows="7" placeholder="Message" required></textarea>
               </div>
               <input type="submit" value="Submit Request" className="form_btn" />
               </form>
          </div>
      </div>
      </div>
    </>
    
  )
}

export default Contact