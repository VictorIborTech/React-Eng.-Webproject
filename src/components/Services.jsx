import React from 'react'
import {FaCrown} from 'react-icons/fa'
import {AiFillCaretRight} from 'react-icons/ai'
import SectionHead from '../components/SectionHead'
import Card from '../UI/Card'
import { programs } from '../data'
import { Link } from 'react-router-dom'


const Services = () => {
  return (
    <section className="services">
        <div className="container services_container">
            <SectionHead  icon={<FaCrown />} title="Services" className='service_head'/>
        </div>

        <div className="services_wrapper container">
          {
            programs.map(({id, images, title, info, path}) => {
              return (
                <article className=' service_card services_service' key={id}>
                  <img src={images} alt="" />
                  <div className='detail'>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className='btn sm'>Learn More <AiFillCaretRight className='arrow'/></Link>
                  </div>
                </article>
              )
            })
          }

        </div>
    </section>
  )
}

export default Services