import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuthors, removeAuthor } from "../../axios/authorAxios";
import { BsBook } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Loading from "../../helpers/Loading";

const ListAuthors = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAuthors((result) => setAuthors(result));
    }, []);

    const deleteHandler = (id) => {
        removeAuthor(id);
    };

    return (
        <>
            <div className="mt-4 text-center">
                <Link
                    to="/authors/create"
                    className="btn btn-sm"
                    style={{
                        backgroundColor: "var(--green)",
                        color: "#fff",
                    }}
                >
                    <span className="me-2">
                        <FaUserEdit />
                    </span>
                    Add Author
                </Link>
            </div>
            <div className="row mt-4">
                {authors.length > 0 ? (
                    authors.map((author) => {
                        const { id, name, dateOfBirth, city } = author;
                        let days = [
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                        ];
                        let thisYear = new Date().getFullYear();
                        let years = new Date(dateOfBirth).getFullYear();
                        let months = new Date(dateOfBirth).getMonth();
                        let dates = new Date(dateOfBirth).getDate();
                        let d = new Date(dateOfBirth);
                        let dayName = days[d.getDay()];

                        return (
                            <div className="col-6" key={id}>
                                <div
                                    className="card mb-3 shadow p-3 mb-5 bg-body rounded"
                                    style={{ maxWidth: "600px" }}
                                >
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
                                                className="img-fluid rounded-start"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title text-center text-shadow mb-3">
                                                    {name}
                                                </h5>
                                                <div className="card-text">
                                                    <p>City : {city}</p>
                                                    <p>
                                                        Date Of Birth :{" "}
                                                        {dayName}, {years}-
                                                        {months + 1}-{dates}
                                                    </p>
                                                    <p>
                                                        Age : {thisYear - years}{" "}
                                                        years old
                                                    </p>
                                                </div>
                                                <span>
                                                    <Link
                                                        to={`/authors/edit/${id}`}
                                                        className="btn btn-sm me-2 btn-warning"
                                                    >
                                                        <span className="me-2">
                                                            <MdModeEdit />
                                                        </span>
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            deleteHandler(+id)
                                                        }
                                                        className="btn btn-sm me-2 btn-danger"
                                                    >
                                                        <span className="me-2">
                                                            <RiDeleteBin5Fill />
                                                        </span>
                                                        Delete
                                                    </button>
                                                    <Link
                                                        to={`/authors/detail/${id}`}
                                                        className="btn btn-sm me-2 btn-dark"
                                                    >
                                                        <span className="me-2">
                                                            <BsBook />
                                                        </span>
                                                        Books
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <Loading />
                )}
            </div>
        </>
    );
};

export default ListAuthors;
