import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile px-12">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-3xl text-purple-500'>Welcome to your Dashboard</h1>
                <Outlet/>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Appointments</Link></li>
                    <li><Link to="review">My Reviews</Link></li>
                    <li><Link to="history">My History</Link></li>
                    {admin && <>
                        <li><Link to="users">All Users</Link></li>
                        <li><Link to="addDoctor">Add a Doctor</Link></li>
                        <li><Link to="manageDoctor">Manage Doctor</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;