import "./stories.scss"
import Flower1 from "../../assets/flower1.avif";
import flower2Image from "../../assets/flower2.avif";
import Flower3 from "../../assets/flower3.avif";
import Flower4 from "../../assets/flower4.avif";

const Stories = () => {

    //TEMPORARY
    const stories = [
        {
            id: 1,
            name: "Ndidi Shola",
            img: Flower1,
        },
        
        {
            id: 2,
            name: "Ndidi Shola",
            img: flower2Image,
        },

        {
            id: 3,
            name: "Ndidi Shola",
            img: Flower3,
        },

        {
            id: 4,
            name: "Ndidi Shola",
            img: Flower4,
        }, 

    ];

  return (
    <div className="stories">
        {stories.map(story=>(
            <div className="story">
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))} 
    </div>
  )
}

export default Stories