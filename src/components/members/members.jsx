import "./members.css";

const Members = () => {
    return (
        <div className="container members-container" id="members">
            <h1 className="member-txt">Members</h1>
            <div className="member member-1">
                <div className="member-img"></div>
                <div className="member-info">
                    <h1 className="name">Chrys</h1>
                    <h3 className="position">Leader</h3>
                    <h4 className="about">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ad, a facere eius corporis, rerum dolor ullam ipsa
                        tempore cumque minus laboriosam, dolores nulla
                        molestiae. Quis totam quasi deleniti explicabo animi!
                    </h4>
                    <a href="#contact" className="contact-member">
                        <span>contact</span>
                    </a>
                </div>
            </div>

            <div className="member member-2">
                <div className="member-img"></div>
                <div className="member-info">
                    <h1 className="name">James</h1>
                    <h3 className="position">Leader</h3>
                    <h4 className="about">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ad, a facere eius corporis, rerum dolor ullam ipsa
                        tempore cumque minus laboriosam, dolores nulla
                        molestiae. Quis totam quasi deleniti explicabo animi!
                    </h4>
                    <a href="#contact" className="contact-member">
                        <span>contact</span>
                    </a>
                </div>
            </div>

            <div className="member member-3">
                <div className="member-img"></div>
                <div className="member-info">
                    <h1 className="name">bruh</h1>
                    <h3 className="position">Leader</h3>
                    <h4 className="about">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ad, a facere eius corporis, rerum dolor ullam ipsa
                        tempore cumque minus laboriosam, dolores nulla
                        molestiae. Quis totam quasi deleniti explicabo animi!
                    </h4>
                    <a href="#contact" className="contact-member">
                        <span>contact</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Members;
