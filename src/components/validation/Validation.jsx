import React, { useState } from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import './validation.css';
import Dashboard from '../dashboard/Dashboard';
function Validation({ openSidebarToggle, OpenSidebar }) {
    const [activeContent, setActiveContent] = useState('');
    const handleItemClick = (content) => {
        setActiveContent(content);
    };
    return (
        <>
         <div className='sidebar-title'>
                    <div className='sidebar-brand'>
                        <BsCart3 className='icon_header' /> Rally
                    </div>
                    <span className='icon close_icon' onClick={OpenSidebar}>e</span>
                </div>
        <div className="container">
            <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>             
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item' onClick={() => handleItemClick('Dashboard')}>
                        <a href="#">
                            <BsGrid1X2Fill className='icon' /> Dashboard
                        </a>
                    </li>
                    <li className='sidebar-list-item' onClick={() => handleItemClick('Validation')}>
                        <a href="#">
                            <BsFillArchiveFill className='icon' /> Validation
                        </a>
                    </li>
                    <li className='sidebar-list-item' onClick={() => handleItemClick('Categories')}>
                        <a href="#">
                            <BsFillGrid3X3GapFill className='icon' /> Categories
                        </a>
                    </li>
                    <li className='sidebar-list-item' onClick={() => handleItemClick('Filmware')}>
                        <a href="#">
                            <BsPeopleFill className='icon' /> Filmware
                        </a>
                    </li>
                    <li className='sidebar-list-item' onClick={() => handleItemClick('Conval')}>
                        <a href="#">
                            <BsListCheck className='icon' /> Conval
                        </a>
                    </li>
                    <li className='sidebar-list-item' onClick={() => handleItemClick('Labops')}>
                        <a href="#">
                            <BsMenuButtonWideFill className='icon' /> Labops
                        </a>
                    </li>
                    <li className='sidebar-list-item' onClick={() => handleItemClick('Analytics')}>
                        <a href="#">
                            <BsFillGearFill className='icon' /> Analytics
                        </a>
                    </li>
                </ul>
            </aside>
            <main className="content">
            {activeContent === 'Dashboard' && <Dashboard />}
                {activeContent === 'Validation' && <div>validation content </div>}
                {activeContent === 'Categories' && <div>Categories Content</div>}
                {activeContent === 'Filmware' && <div>Filmware Content</div>}
                {activeContent === 'Conval' && <div>Conval Content</div>}
                {activeContent === 'Labops' && <div>Labops Content</div>}
                {activeContent === 'Analytics' && <div>Analytics Content</div>}
            </main>
        </div>
        </>
    );
}
export default Validation;
