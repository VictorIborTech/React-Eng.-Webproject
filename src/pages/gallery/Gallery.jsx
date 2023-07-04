import './gallery.css'
import Header from '../../components/Header'
import GalleryImage from '../../assets/images/istockphoto-981339754-612x612.jpg'


const Gallery = () => {

  const galleryLength = 9;
  const images = [];

  for (let i =1; i <= galleryLength; i++){
    images.push(require(`../../assets/images/gallery${i}.jpg`))
  }
  console.log(images)

  return (
    <>
      <Header title='Our Gallery' image={GalleryImage}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit distinctio nihil tempore mollitia aspernatur, rem beatae pariatur iste in quas?
      </Header>

    <section className="gallery">
      <div className="container gallery_container">
        {
          images.map((image, index) => {
            return <article key={index}>
                <img src={image} alt={ `Gallery image ${index + 1}`} />
              </article>
            
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery