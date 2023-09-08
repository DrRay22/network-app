import "./leftBar.scss"
import Friends from "../../assets/friendss.png";
import Groups from "../../assets/groups.png";
import Skills from "../../assets/skills.png";
import Watch from "../../assets/watch.png";
import Memories from "../../assets/memories.png";
import Events from "../../assets/events.png";
import Ideas from "../../assets/ideas.png";
import Photos from "../../assets/photos.png";
import Videos from "../../assets/videos.png";
import Messages from "../../assets/messages.png";
import Tutorials from "../../assets/tutorials.png";
import Courses from "../../assets/courses.png";
import Business from "../../assets/business.png";


const LeftBar = () => {
    return(
        <div className="leftBar">
        <div className="container">
            <div className="menu">
                <div className="user">
                   <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="" />
                    <span>Ndidi Shola</span>
                </div>
                <div className="item">
                    <img src={Friends} alt="" />
                    <span>Friends</span>
                </div>

                <div className="item">
                    <img src={Groups} alt="" />
                    <span>Groups</span>
                </div>

                <div className="item">
                    <img src={Skills} alt="" />
                    <span>Skills</span>
                </div>

                <div className="item">
                    <img src={Watch} alt="" />
                    <span>Watch</span>
                </div>

                <div className="item">
                    <img src={Memories} alt="" />
                    <span>Memories</span>
                </div>

            </div>

            <hr />

            <div className="menu">
                <span>Your Shortcuts</span>

                <div className="item">
                    <img src={Events} alt="" />
                    <span>Events</span>
                </div>

                <div className="item">
                    <img src={Ideas} alt="" />
                    <span>Ideas</span>
                </div>

                <div className="item">
                    <img src={Photos} alt="" />
                    <span>Photos</span>
                </div>

                <div className="item">
                    <img src={Videos} alt="" />
                    <span>Videos</span>
                </div>

                <div className="item">
                    <img src={Messages} alt="" />
                    <span>Messages</span>
                </div>
            </div>

            <hr />

            <div className="menu">
                <span>Others</span>

                <div className="item">
                    <img src={Business} alt="" />
                    <span>Business</span>
                </div>

                <div className="item">
                    <img src={Tutorials} alt="" />
                    <span>Tutorials</span>
                </div>

                <div className="item">
                    <img src={Courses} alt="" />
                    <span>Courses</span>
                </div>
            </div>

        </div>
        </div>
    )
}

export default LeftBar