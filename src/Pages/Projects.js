import ProductCard from "../Componets/ProductCard"
import projectData from "../Componets/ProjectContent"

const Projects = () => {
    return (
        <div>
            <h2>
                ~
            </h2><h1 className="Projects">My Projects</h1>

            <div className="Pro" style={{display: 'flex', justifyContent: 'center'}}>
                <ProductCard
                    key = {1}
                    image = '/Images/Meme.png'
                    name = 'Memey'
                    description = 'React-Based Random Meme Generator that allows you to add text on a meme that is from a Random meme sourced from ImgFlips meme Api, and download it. CLick for more info'
                    />
                <ProductCard
                    key = {2}
                    image = '/Images/Trading.png'
                    name = 'Trading Bot'
                    description = 'A Trading Algorithm I created. Click for more info'
                />
            </div>
        </div>
    )
}

export default Projects