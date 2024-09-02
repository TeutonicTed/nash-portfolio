import thumbnailImg from '../assets/headshot.png'




export default function AboutPage() {
    return (
        <>
            <br />
            <h3>About Me</h3>
            <div className="content">
                <div className="thumbnailImg">
                    <img src={thumbnailImg} className="thumbnailImg" alt="thumbnail" />
                </div>

                <div className="bio">
                    <p>Hello! I’m Nash Peterson, an aspiring software engineer with a passion for technology and creative problem solving.</p>
                    <p>I recently completed a bootcamp at the University of Minnesota, where I honed my coding skills and developed a strong foundation in software development.</p>
                    <p>Before diving into the tech world, I spent several years in logistics, where I cultivated excellent written communication and organizational skills. I am currently the Creative Director of Fulcrum Comiks LLC, where I leverage my creativity and leadership abilities to remotely coordinate artists to create my comic series: <i>Odyssey of the Psygonauts</i>.</p>
                    <p>I pride myself on being a self-motivated and independent worker with a strong work ethic. I believe in the importance of collaboration and have a proven track record of working effectively across departments to achieve common goals.</p> 
                        
                   <p> My strong practical and analytical problem-solving skills drive me to persistently seek continuous improvement in everything I do. I’m excited about the opportunity to transition into the tech industry and apply my diverse skill set to create innovative solutions.</p>
                </div>
            </div>
        </>
    );
}