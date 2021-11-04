export default function Footer() {
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