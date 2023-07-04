import React from 'react'
import SectionHead from './SectionHead'
import { FaQuestion } from "react-icons/fa"
import { faqs } from "../data"
import FAQ from './FAQ' 

const FAQS = () => {
    
    return (
      <section className="faqs">
          <div className="container faqs_container">
              <SectionHead  icon={<FaQuestion />} title='FAQ' className='faq_header'/>
              <div className="faqs_wrapper">
                  {
                      faqs.map(({id, question, answer}) => {
                          return (
                              <FAQ key={id} question={question} answer={answer} />
                          )
                      })
                  }
              </div>
          </div>
      </section>
    )
}


export default FAQS