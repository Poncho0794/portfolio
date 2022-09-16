import './styles.css'
import personalPhoto from '../../assets/personal-photo.jpg'
const Home = () => {
    return (
        <div className="home-container">
            <img src={personalPhoto}/>
            <p>
                <h1>Hi, I'm Alfonso Banda</h1>
                <div>
                Welcome, I'm a Software Engineer, passionated about growing up every day, learning new things, and make things happen. 
                I'm a huge fan of videogames, watching animes and series.
                </div>
            </p>
        </div>
    )
}

export default Home