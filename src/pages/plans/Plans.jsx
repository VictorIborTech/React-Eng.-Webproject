import './plans.css'
import Header from '../../components/Header'
import PlanImage from '../../assets/images/gallery1.jpg'
import { plans } from '../../data'

const Plans = () => {
  return (
    <>
    <Header title="Memebership Plans" image={PlanImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque facilis nisi beatae sunt nesciunt voluptatibus pariatur odio nemo aut fugiat.
    </Header>    

    <section className="plans">
      <div className="container plans_container">
        {
          plans.map(({id, name, desc, price, features}) => {
            return <article key={id} className='plan'>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/month</h2>
                <h4>Features</h4>
                {
                  features.map(({feature, available}, index) => {
                    return <p key={index} className={ !available ? 'disable' : "" }>
                      {feature}
                    </p>
                  })
                }

                <button className='btn lg'> Choose Plan </button>
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans