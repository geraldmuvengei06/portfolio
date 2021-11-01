import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Hero />
      <Into />
      <Projects />
    </div>
  );
}


function Hero() {
  return (
    <div className="md:container md:mx-auto py-40">
      <div className=" sm:flex space-4 items-center">
        <div className="flex-auto p-4 justify-items-center">
          <h1 className="xl:inline">
            <span className="block font-black text-6xl capitalize mb-4 ">Hola,</span>
            <span className="block font-black text-red-400 text-6xl capitalize mb-4">
              Am Gerald
            </span>
          </h1>
          <p className="font-bold text-4xl mb-6">
            I Build Solutions to Real Life Problems
          </p>


          <div className="py-4">
            <a className="bg-red-400 text-white px-8 py-4 rounded-md shadow-lg uppercase xl:inline">Halla Me</a>
          </div>


        </div>
        <div className="flex-auto p-4 justify-items-center align-items-center ">
          <img className="rounded-full h-72 w-72 flex align-self-center shadow-lg inline-block" src="/user.svg" />
        </div>
      </div>
    </div>
  )
}

function Into() {

  const [posts, setPosts] = useState([
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
  ])


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

        
              <div className="flex-1 sm:mr-2 my-2">
                <div className="card rounded-md shadow-md bg-white p-6">
                  <h3 className="font-bold text-2xl">Making a design system from scratch</h3>
                  <p className="my-4">
                    31st Oct 2021  <span className="rounded-full bg-red-200 shadow-lg px-3 py-1 text-red-500 uppercase">React</span>
                  </p>
                  <p>

                  </p>
                </div>
              </div>
              
        
        </div>
      </div> 
    </div>
  )
}

function Projects() {
  return (
    <div className="md:container md:mx-auto p-4">
      <h2 className="text-2xl">Featured projects</h2>


    </div>
  )
}

export default App;
