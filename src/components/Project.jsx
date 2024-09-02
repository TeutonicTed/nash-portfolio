import { Link } from 'react-router-dom'


const projects = [
    { id: 1, label: "Exposition Inn", src: "/image-1.jpg", gitHubHref: "https://github.com/TeutonicTed/Exposition_Inn", appHref: "https://exposition-inn.onrender.com/"},
    { id: 2, label: "Free Game Search Engine", src: "/image-2.jpg", gitHubHref: "https://github.com/TeutonicTed/group-project1", appHref: "https://kou32.github.io/group-project1/"},
    { id: 3, label: "Social Network Api", src: "/image-3.jpg", gitHubHref: "https://github.com/TeutonicTed/social-network-api", appHref: "https://drive.google.com/file/d/1CwJ4McfuwupLP1BgmPC6tvl95fWP5HV4/view"},
    { id: 4, label: "Weather App", src: "/image-4.jpg", gitHubHref: "https://github.com/TeutonicTed/weather-app", appHref: "https://teutonicted.github.io/weather-app/"},
    { id: 5, label: "SVG Logo Maker", src: "/image-5.jpg", gitHubHref: "https://github.com/TeutonicTed/svg-logo-maker", appHref: "https://drive.google.com/file/d/1ZnNjk6-DfLF6ptQ7P7XIdMu6qe2GDfC0/view"},
    { id: 6, label: "Readme File Generator", src: "/image-6.jpg", gitHubHref: "https://github.com/TeutonicTed/readme-file-generator", appHref: "https://drive.google.com/file/d/148_WES1qpzCQaI1Hy2sfdF-yJIS5brjl/view"}
];


export default function Project(){

    return (
        <>
        <div className="row">
            {projects.map(item => (
                <div key={item.id} className="col-6">
                    <div className="card">
                        <img src={item.src} className="card-img-top" alt={item.label} />
                        <div className="card-body">
                            <h5 className="card-title">{item.label}</h5>
                            <Link className="btn btn-warning" to={item.gitHubHref}>GitHub</Link>
                            <Link className="btn btn-warning" to={item.appHref}>App</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}