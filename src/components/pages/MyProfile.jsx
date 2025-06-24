import React from "react";
import MyAccount from "./MyAccount";
import '../../assets/css/profile.scss';

const MyProfile = () => {
    return (
        <>
            {/* <MyAccount> */}
                <main className="profile-section">
                    <h2>My Profile</h2>
                    <form className="profile-form">
                        <div className="form-row d-flex gap-3 mb-3">
                            <input type="text" placeholder="First name" className="form-control" />
                            <input type="text" placeholder="Last name" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <input type="email" placeholder="Email" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <input type="tel" placeholder="Phone number" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <input type="password" placeholder="Password" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <input type="password" placeholder="Confirm Password" className="form-control" />
                        </div>

                        <div className="text-end mt-5">
                            <button type="button" className="btn btn-dark px-4 py-2">
                                ADD NEW ADDRESS
                            </button>
                        </div>
                    </form>
                </main>
            {/* </MyAccount> */}
        </>
    )
} 

export default MyProfile