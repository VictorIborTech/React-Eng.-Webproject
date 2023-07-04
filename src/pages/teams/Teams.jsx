import './teams.css'
import Header from '../../components/Header'
import TeamImage from '../../assets/images/istockphoto-1431086504-612x612.jpg'
import { teams } from '../../data'

const Teams = () => {

  return (
    <>
    <Header title="Our Team" image={TeamImage}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nesciunt porro! Fugiat ipsum modi officiis iure temporibus magni exercitationem alias?
    </Header>

    <section className="teams">
      <div className="container team_container">
        {
          teams.map(({id, image, name, job, socials}) => {
            return <article className="team" key={id}>
              <div className="team_img">
                <img src={image} alt={name} />
              </div>
              <h3>{name}</h3>
              <p>{job}</p>
              <div className="team_socials">
                {
                  socials.map(({icon, link}, index) =>{
                  
                    return <a href={link} key={index} target='_blank' rel='noreferrer noopener'>{icon}</a>
                  })               
                }
              </div>
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Teams