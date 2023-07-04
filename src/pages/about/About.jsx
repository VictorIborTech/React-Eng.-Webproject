import './about.css'
import Header from '../../components/Header'
import AboutImage from '../../assets/images/istockphoto-1396840742-612x612.jpg'
import StoryImage from '../../assets/images/istockphoto-1425541970-612x612.jpg'
import VisionImage from '../../assets/images/istockphoto-981339754-612x612.jpg'
import MissionImage from '../../assets/images/istockphoto-1365436662-612x612.jpg'


const About = () => {
  return (
    <>
      <Header  title="About Us" image={AboutImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quasi voluptas doloremque aut magni aliquam aspernatur eaque alias dicta culpa.
      </Header>

      <section className="about_story">
        <div className="container about_story_container">
          <div className="about_section_image">
            <img src={StoryImage} alt="Story image" />
          </div>

          <div className="about_section_content">
            <h1>Story</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum eveniet quasi nulla, incidunt harum vero veritatis mollitia obcaecati impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolores.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos aut vero placeat impedit architecto, ullam illum vel! Dolores, iusto!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem pariatur praesentium earum illum.</p>
          </div>
        </div>
      </section>


      <section className="about_vision">
        <div className="container about_vision_container">
          <div className="about_section_content">
            <h1>Our Vision</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum eveniet quasi nulla, incidunt harum vero veritatis mollitia obcaecati impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolores.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos aut vero placeat impedit architecto, ullam illum vel! Dolores, iusto!</p>
            
          </div>
          <div className="about_section_image">
            <img src={VisionImage} alt="Story image" />
          </div>

        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission_container">
          <div className="about_section_image">
            <img src={MissionImage} alt="Mission image" />
          </div>

          <div className="about_section_content">
            <h1>Our Mission</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum eveniet quasi nulla, incidunt harum vero veritatis mollitia obcaecati impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolores.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos aut vero placeat impedit architecto, ullam illum vel! Dolores, iusto!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem pariatur praesentium earum illum.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About