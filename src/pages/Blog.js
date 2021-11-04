export default function Blog() {

    const blogs = [
        {
            title: 'UI Interactions of the week',
            date: '2 Feb 2019',
            tags: [
                'Express', 'Vue'
            ],
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            title: 'UI Interactions of the week',
            date: '2 Feb 2019',
            tags: [
                'Express', 'Vue'
            ],
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            title: 'UI Interactions of the week',
            date: '2 Feb 2019',
            tags: [
                'Express', 'Vue'
            ],
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            title: 'UI Interactions of the week',
            date: '2 Feb 2019',
            tags: [
                'Express', 'Vue'
            ],
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        }
    ]

    return (
        <div className="md:container md:mx-auto p-4 md:w-7/12">
            <h1 className="text-4xl tracking-tight font-extrabold text-red-400 sm:text-5xl md:text-6xl ">
                Blog
            </h1>

            <div className="divide-y divide-gray-200 ">
                {
                    blogs.map((blog) => {
                        return <BlogEntry key={blog.date} {...blog}></BlogEntry>;
                    })
                }
            </div>


        </div>
    )
}

function BlogEntry({ title, date, tags, desc }) {
    return (
        <article className="grid sm:flex py-4">
            <div className="">
                <h3 className="font-bold text-2xl">
                    <a href="#">{title}</a>
                </h3>
                <p className="my-4">
                    {tags.map((tag) => <span className="rounded-full bg-gray-800 shadow px-2 py-0 text-blue-50 lowercase pb-1 mr-2">{tag}</span>) } {date}
                </p>
                <p>
                    {desc}
                </p>
            </div>
        </article>
    )
}