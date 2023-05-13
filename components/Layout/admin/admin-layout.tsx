// components/Layout.js

import React from 'react'
import AdminSideBar from '../components/adminSideBar'
const AdminLayout = ({ children }) => (
    <div className="bg-gray-50 dark:bg-gray-900">
        <aside>
            <AdminSideBar children={children}></AdminSideBar>
        </aside>
        {/* Place your common elements here */}
        <header>
            <h1>My Website</h1>
        </header>

        {/* Render the children components */}

        {/* Add a footer */}
        <footer>&copy; 2023 My Website</footer>
    </div>
)

export default AdminLayout
