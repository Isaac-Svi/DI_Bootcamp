import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Exercise1 from './Exercise1/Exercise1'
import BootstrapCard from './Exercise2/BootstrapCard'
import BootstrapCardV2 from './Exercise3/BootstrapCardV2'
import Jumbotron from './Exercise4/Jumbotron'

const celebrities = [
    {
        title: 'Bob Dylan',
        imageUrl: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
        buttonLabel: 'Go to Wikipedia',
        buttonUrl: 'https://en.wikipedia.org/wiki/Bob_Dylan',
        description:
            'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
    },
    {
        title: 'McCartney',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg',
        buttonLabel: 'Go to Wikipedia',
        buttonUrl: 'https://en.wikipedia.org/wiki/Paul_McCartney',
        description:
            'Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.',
    },
]

const XP = () => {
    return (
        <>
            <Exercise1 />
            <BootstrapCard />
            {celebrities.map((celeb, i) => (
                <BootstrapCardV2
                    key={i}
                    title={celeb.title}
                    imageUrl={celeb.imageUrl}
                    buttonLabel={celeb.buttonLabel}
                    buttonUrl={celeb.buttonUrl}
                    description={celeb.description}
                />
            ))}
            <Jumbotron
                title='Welcome to react'
                description='React is the most popular rendering library in the world'
                buttonLabel='Go to the official website'
                buttonURL='https://reactjs.org/'
            />
        </>
    )
}

export default XP
