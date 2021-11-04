import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function Home() {
    return (
        <div className="home">
            <Hero />
            <Posts />
            <Projects />
        </div>

    )
}


function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => setPosts(() => {
        return [
            {
                title: 'Making a design system from scratch',
                date: '31st Oct 2021',
                tag: 'React',
                desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            },
            {
                title: 'Making a design system from scratch',
                date: '31st Oct 2021',
                tag: 'React',
                desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            },
        ]
    }), [])


    return (
        <div className="bg-blue-50 full-w h-400 py-6">
            <div className="md:container md:mx-auto p-4">
                <div className="flex">
                    <div className="flex-1">
                        <h2 className="text-2xl">Recent Posts</h2>
                    </div>
                    <div className="flex-1">
                        <a className="float-right text-blue-400 py-2">View All</a>
                    </div>
                </div>

                <div className="grid sm:flex">
                    {posts.map((post) => {
                        return <Post key={post.title} {...post} />
                    })}
                </div>
            </div>
        </div>
    )
}

function Post({ title, date, tag, desc }) {
    return (
        <div className="flex-1 sm:mr-2 my-2">
            <div className="card rounded-md shadow-md bg-white p-6">
                <h3 className="font-bold text-2xl">
                    <a href="#">{title}</a>
                </h3>
                <p className="my-4">
                    {date}  <span className="rounded-full bg-red-200 shadow px-3 py-1 text-red-400 uppercase">{tag}</span>
                </p>
                <p>
                    {desc}
                </p>
            </div>
        </div>
    )
}




