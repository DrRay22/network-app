import "./rightBar.scss"
import Adamu from "../../assets/adamu.jpg";
import Mark from "../../assets/mark.jpg";

const RightBar = () => {
    return(
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Adamu} alt="" />
                            <span>Akin Ana</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={Mark} alt="" />
                            <span>Mark Eze</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>

                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Mark} alt="" />
                            <p>
                            <span>Mark Eze</span> liked a post
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Mark} alt="" />
                            <p>
                            <span>Mark Eze</span>  liked a video
                            </p>
                        </div>
                        <span>3 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Mark} alt="" />
                            <p>
                            <span>Mark Eze</span> logged out
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Mark} alt="" />
                            <p>
                            <span>Mark Eze</span> liked a photo
                            </p>
                        </div>
                        <span>2 min ago</span>
                    </div>

                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Mark} alt="" />
                            <div className="online" />
                                <span>Mark Eze</span>
                        </div>
                        
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={Mark} alt="" />
                            <div className="online" />
                                <span>Mark Eze</span>
                        </div>
                        
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={Mark} alt="" />
                            <div className="online" />
                                <span>Mark Eze</span>
                        </div>
                        
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={Mark} alt="" />
                            <div className="online" />
                                <span>Mark Eze</span>
                        </div>
                        
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={Mark} alt="" />
                            <div className="online" />
                                <span>Mark Eze</span>
                        </div>
                        
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={Mark} alt="" />
                            <div className="online" />
                                <span>Mark Eze</span>
                        </div>
                        
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={Mark} alt="" />
                            <div className="online" />
                                <span>Mark Eze</span>
                        </div>
                        
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={Mark} alt="" />
                            <div className="online" />
                                <span>Mark Eze</span>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default RightBar
