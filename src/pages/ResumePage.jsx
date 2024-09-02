

const resume = [
    { id: 1, label: "MERN"},
    { id: 2, label: "React"},
    { id: 3, label: "MongoDB"},
    { id: 4, label: "PostgreSQL"},
    { id: 5, label: "Javascript"},
    { id: 6, label: "GraphQL"},
    { id: 7, label: "REST"},
    { id: 8, label: "Object-Oriented Programming (OOP)"},
    { id: 9, label: "Object-Relational Mapping (ORM)"},
    { id: 10, label: "Server-side APIs"},
    { id: 11, label: "Handlebars"},
    { id: 12, label: "jQuery"},
    { id: 13, label: "Bootstrap"}
]


export default function ResumePage(){
    const handleDownload = () => {
        // You can replace 'resume.pdf' with the actual path to your resume file
        const resumeUrl = '/Nash Peterson - Resume - 12.4.23-3.pdf';
        const link = document.createElement('a');

        link.href = resumeUrl;
        link.setAttribute('download', 'Nash Peterson - Resume - 12.4.23-3.pdf');
        document.body.appendChild(link);
        
        link.click();
        document.body.removeChild(link);
    };

    return(
        <>
            <br />
            <h3>Dev Skills:</h3>
            <div className="col-8">
                    <ul className="resume-proficiencies">
                        { resume.map( item => (
                        <li key={item.id} className="skills-item">{item.label}
                            </li>  
                        ))}
                    </ul>
                </div>
            <button className="btn btn-warning" onClick={handleDownload}>Download Resume</button>
        </>
    )              
}