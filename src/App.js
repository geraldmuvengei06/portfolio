import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <Hero />
      <Into />
      <Projects />
      <Footer />
    </div>
  );
}



function Into() {

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

function Projects() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(() => {
      return [
        {
          image: '/images/post1.png',
          title: 'Making a design system from scratch',
          type: 'Dashboard',
          tag: 'React',
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
          image: '/images/post2.png',
          title: 'Making a design system from scratch',
          type: 'Illustration',
          tag: 'React',
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },

        {
          image: '/images/post3.png',
          title: 'Making a design system from scratch',
          type: 'Reat Project',
          tag: 'React',
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        }
      ]
    })
  }, []);

  return (
    <div className="md:container md:mx-auto p-4">
      <h2 className="text-2xl">Featured projects</h2>
      <div className="divide-y divide-gray-200">

        {projects.map((project) => {
          return <Project key={project.type} {...project} />;
        })}
      </div>

    </div>
  )
}

function Project({ image, title, tag, type, desc }) {
  return (
    <div className="grid sm:flex py-4">
      <div className="flex-1 sm:flex-none">
        <img className="object-contain" src={image} />
      </div>
      <div className="flex-grow sm:ml-4">
        <h3 className="font-bold text-2xl">
          <a href="#">{title}</a>
        </h3>
        <p className="my-4">
          <span className="rounded-full bg-gray-800 shadow px-2 py-0 text-blue-50 lowercase pb-1">{tag}</span> {type}
        </p>
        <p>
          {desc}
        </p>
      </div>

    </div>
  )
}

function Footer() {
  const icons = [
    {
      link: 'Facebook',
      icon: '/icons/fb.png',
    },
    {
      link: 'Instagram',
      icon: '/icons/insta.png',
    },
    {
      link: 'Twitter',
      icon: '/icons/twitter.png',
    },
    {
      link: 'Linkedin',
      icon: '/icons/linkedin.png',
    },
  ]

  return (
    <div className="md:container md:mx-auto py-20">
      <div className="justify-center flex">
        {
          icons.map((icon) => {
            return <img className="object-contain p-4" src={icon.icon} alt={icon.link} />
          })
        }
      </div>
      <div className="justify-center flex">
        <p>Copyright {Date.now()} All Rights Reserved</p>
      </div>
    </div>
  )
}

export default App;
