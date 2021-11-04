import { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";

export default function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(() => {
            return [
                {
                    image: '/images/post1.png',
                    title: 'Making a design system from scratch',
                    type: 'Dashboard',
                    tag: 'React',
                    slug: 'making-a-design-system',
                    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                },
                {
                    image: '/images/post2.png',
                    title: 'Making Another',
                    type: 'Illustration',
                    tag: 'React',
                    slug: 'making-another',
                    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                },

                {
                    image: '/images/post3.png',
                    title: 'Making One More',
                    type: 'Reat Project',
                    tag: 'React',
                    slug: 'making-one-more',
                    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                }
            ]
        })
    }, []);

    return (
        <Switch>
            <Route path="/work/:slug" render={routeProps => {
                console.log(routeProps)
                return <span>{routeProps.match.params.slug}</span>
            }} />
            <Route path="">
                <div className="md:container md:mx-auto p-4 text-left">
                    <h2 className="text-2xl">Featured projects</h2>
                    <div className="divide-y divide-gray-200">

                        {projects.map((project) => {
                            return <Project key={project.type} {...project} />;
                        })}
                    </div>

                </div>
            </Route>
        </Switch>
        
        
    )
}

function Project({ image, title, tag, type, desc, slug }) {
    return (
        <>
            <div className="grid sm:flex py-4">
                <div className="flex-1 sm:flex-none">
                    <img className="object-contain" src={image} />
                </div>
                <div className="flex-grow sm:ml-4">
                    <h3 className="font-bold text-2xl">
                        <Link to={`/work/${slug}`}>{title}</Link>
                    </h3>
                    <p className="my-4">
                        <span className="rounded-full bg-gray-800 shadow px-2 py-0 text-blue-50 lowercase pb-1">{tag}</span> {type}
                    </p>
                    <p>
                        {desc}
                    </p>
                </div>

            </div>
        </>
    )
}
