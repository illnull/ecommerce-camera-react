import React from 'react'
import './Homepage.scss'

import Banner from '../components/home/banner/banner'
import MenuItem from '../components/home/menu-item/menu-item'
import CommunityBanner from '../components/home/community-banner/community-banner'
import FieldNotes from '../components/home/field-notes/field-notes'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Banner />
                <div className='container-home'>
                    <MenuItem />
                    <CommunityBanner />
                    <FieldNotes />
                </div>
            </div>
        )
    }
}

export default HomePage