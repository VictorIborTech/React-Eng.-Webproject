import { useState } from "react"
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle}  from 'react-icons/io'
import { testimonials } from "../data"

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const {name, quote, job, avatar} = testimonials[index]

    const prevTestimonialHandler = () => {
        setIndex(index => index - 1);

        if(index <= 0 ){
            setIndex(testimonials.length - 1);
        }
    }
    const nextTestimonialHandler = () => {
        setIndex(index => index + 1);

        if(index >= testimonials.length - 1){
            setIndex(0);
        }
    }
    

  return (
    <section className="testimonials">
        <div className="container testimonial_container">
            <SectionHead  icon={<ImQuotesLeft />} title="Testimonials"/>

            <article className="testimonial">
                <div className="testimonial_avatar">
                    <img src={avatar} alt="" />

                </div>
                <p className="testimonial_quote">{ ` "${quote}" `}</p>
                <h5>{name}</h5>
                <small className="testimonial_job">{job}</small>

            </article>

            <div className="testimonial_btn_container">
                <button className="testimonial_btn" onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle /></button>

                <button className="testimonial_btn" onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle /></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials