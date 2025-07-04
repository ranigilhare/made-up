import React from 'react'
import Layout from "../common/Layout";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import '../../assets/css/sidebar.scss';


const MyAccount = () => {
  const location = useLocation();
  return (
    <>
        <Layout>
            <div className="container profile-details">
                <div className="row breadcrumb-section">
                    <div className="col-md-12">
                        <nav aria-label="breadcrumb" className="py-4">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item" aria-current="page"><Link to="/my-profile">My Profile</Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <Sidebar/>
            </div>            
        </Layout>
    </>
  )
}

export default MyAccount
