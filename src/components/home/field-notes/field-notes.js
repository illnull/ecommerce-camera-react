import React from 'react'
import { Link } from 'react-router-dom'
import './field-notes.scss'

class FieldNotes extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [{
                id: 1,
                imageURL: 'https://images.unsplash.com/photo-1547043884-975a4f9ea025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                title: 'THE CAMERA GEAR OF THE WORLD’S BEST PHOTOGRAPHERS',
                subtitle: 'Hey guys! Mark here from Shotkit. It’s great to be here writing a few words for...'
            },
            {
                id: 2,
                imageURL: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                title: 'WIN A FREE TRIP TO NYC!',
                subtitle: 'Enter here for a chance to win a free trip to NYC. Prizing includes deluxe accommodation for 4 nights, roundtrip flights, & travel gear to explore...'
            },
            {
                id: 3,
                imageURL: 'https://images.unsplash.com/photo-1472095636650-197e6d619afe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
                title: 'EVAN LANE: MEANDERING AROUND MORROCCO',
                subtitle: '8 days of trekking through Morocco through the lens of Evan Lane. Morocco is a gateway to Africa and a country of dizzying diversity. Here you will...'
            },
            {
                id: 4,
                imageURL: 'https://images.unsplash.com/photo-1506426305266-2b7e740fd828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                title: 'BEST DIGITAL AND FILM STREET PHOTOGRAPHY CAMERAS 2019',
                subtitle: 'What makes a camera specifically well suited for street photography? Good question. We have an up to date cheat sheet on what we think...'
            }]
        }
    }

    render() {

        return (
            <div className='field-note-container'>
                <div className='field-note-title'>
                    FIELD NOTES
                </div>
                <div className='field-note-outer'>
                    {
                        this.state.sections.map(({ title, subtitle, imageURL, id }) => (
                            <div className='field-note-inner-container'>
                                <Link to='/placeholder' className="inner-menu-link" style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className='field-note-img'>
                                        <img src={imageURL} id={id} alt={title} style={{ width: '100%', height: '300px' }} />
                                    </div>
                                    <div className='field-note-content'>
                                        <div><h1 style={{ fontSize: '1.5em' }}>{title}</h1></div>
                                        <div>{subtitle}</div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div >
        )
    }

}

export default FieldNotes