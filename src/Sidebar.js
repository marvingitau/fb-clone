import { LocalHospital } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://avatars.githubusercontent.com/u/51716819?v=4"title="Simply web"/>
            <SidebarRow Icon={ LocalHospitalIcon}title="Covid-19 information center"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreIcon } title="Marketplace"/>
        </div>
    )
}

export default Sidebar
