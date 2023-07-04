import Image from "../assets/images/istockphoto-1395324869-612x612.jpg"
import SectionHead from "./SectionHead"
import {GiCutDiamond} from 'react-icons/gi'
import { values } from "../data"

const Values = () => {
  return (
    <section className='values'>
        <div className="container values_container">
            <div className="values_left">
                <div className="value_image">
                    <img src={Image} alt="values Image" />
                </div>
            </div>

            <div className="values_right">
                <SectionHead icon={<GiCutDiamond />} title='Values'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe id accusamus dolor repudiandae voluptate provident blanditiis nostrum voluptatem assumenda.</p>
                <div className="values_wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return (
                                <article className=' value_card values_value' key={id}>
                                    <span>{ icon }</span>
                                    <h4>{ title }</h4>
                                    <small>{ desc }</small>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    </section>
  )
}

export default Values