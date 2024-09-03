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
                    <p>Hello! I’m Nash Peterson, an aspiring software engineer with a passion for <span className="emph">efficiency</span> and <span className="emph">creative problem solving.</span>
                    </p>
                    <p>I recently completed a bootcamp at the <span className="emph">University of Minnesota</span>, where I honed my coding skills and developed a strong foundation in software development.</p>
                    <p>Before diving into the tech world, I received my <span className="emph">bachelors degree</span> in <span className="emph">supply chain management</span> and spent several years in <span className="emph">logistics.</span></p>
                    <p>Currently, I'm working as <span className="emph">Creative Director</span> of <span className="emph">Fulcrum Comiks LLC</span>, leveraging my <span className="emph">creativity</span> and <span className="emph">leadership abilities</span> to remotely coordinate artists to create my comic series: <a className="website" href="https://odysseyofthepsygonauts.com"><i>Odyssey of the Psygonauts</i></a>.</p>
                    <p>I pride myself on being a <span className="emph">self-motivated</span>, <span className="emph">independent</span> worker with a <span className="emph">strong work ethic</span>. I believe in the importance of collaboration and have a proven track record of working effectively across departments to achieve common goals. I’m excited to transition into the tech industry to work on exciting new projects and continue expanding my skill set as a developer.</p>
                </div>
            </div>
        </>
    );
}