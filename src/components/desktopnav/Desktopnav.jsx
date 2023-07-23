import React from 'react'

const Desktopnav = () => {
    return (
        <div className="desktopnav">
            <nav className="desktop-navigation-menu">
                <div className="container">
                    <ul className="desktop-menu-category-list">
                        <li className="menu-category">
                            <a href="homepage.html" class="menu-title">Home</a>
                        </li>

                        <li className="menu-category">
                            <a href="listings.html" class="menu-title">Service Listings</a>
                        </li>

                        <li className="menu-category">
                            <a href="create_listing.html" class="menu-title"
                            >Create a Listing</a
                            >
                        </li>

                        <li className="menu-category">
                            <a href="delete-listings.html" class="menu-title"
                            >View My Listings</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Desktopnav