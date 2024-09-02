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
                    <p>Hello! I’m Nash Peterson, an aspiring software engineer with a passion for <p className="emph">efficiency</p> and <p className="emph">creative problem solving.</p>
                    </p>
                    <p>I recently completed a bootcamp at the <p className="emph">University of Minnesota</p>, where I honed my coding skills and developed a strong foundation in software development.</p>
                    <p>Before diving into the tech world, I received my <p className="emph">bachelors degree</p> in <p className="emph">supply chain management</p> and spent several years in <p className="emph">logistics.</p></p>
                    <p>Currently, I'm working as <p className="emph">Creative Director</p> of <p className="emph">Fulcrum Comiks LLC</p>, leveraging my <p className="emph">creativity</p> and <p className="emph">leadership abilities</p> to remotely coordinate artists to create my comic series: <a className="website" href="https://odysseyofthepsygonauts.com"><i>Odyssey of the Psygonauts</i></a>.</p>
                    <p>I pride myself on being a <p className="emph">self-motivated</p>, <p className="emph">independent</p> worker with a <p className="emph">strong work ethic</p>. I believe in the importance of collaboration and have a proven track record of working effectively across departments to achieve common goals. I’m excited to transition into the tech industry to work on exciting new projects and continue expanding my skill set as a developer.</p>
                </div>
            </div>
        </>
    );
}