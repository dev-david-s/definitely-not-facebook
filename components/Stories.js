import StoryCard from "./StoryCard"

function Stories() {
    const stories = [
        {
            id: 1,
            name: "Bradley Payne",
            src: '/johnwick.jpg',
            profile: '/johnwick.jpg'
        },
        {
            id: 2,
            name: "Steph Curry",
            src: '/stephcurry.jpg',
            profile: '/stephcurry.jpg'
        },
        {
            id: 3,
            name: "Magnus Carlsen",
            src: '/magnuscarlsen.jpg',
            profile: '/magnuscarlsen.jpg'
        },
        {
            id: 4,
            name: "Steve Ballmer",
            src: '/steveballmer.jpg',
            profile: '/steveballmer.jpg'
        }
    ]
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard key={story.id} name={story.name} src={story.src} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories;