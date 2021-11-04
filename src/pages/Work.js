import Projects from "../components/Projects";

export default function Works() {
    return (
        <div className="md:container md:mx-auto p-4 md:w-7/12">
            <h1 className="text-4xl tracking-tight font-extrabold text-red-400 sm:text-5xl md:text-6xl ">
                 Work
            </h1>

            <div className="divide-y divide-gray-200 ">
                <Projects />
            </div>
        </div>
    )
}