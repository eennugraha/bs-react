import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { detailAuthor } from "../../axios/authorAxios";
import { BsBackspaceFill } from "react-icons/bs";
import rupiah from "../../helpers/RupiahFormatter";

const DetailAuthor = () => {
    const [author, setAuthor] = useState([]);

    const params = useParams();

    useEffect(() => {
        const { id } = params;
        detailAuthor(+id, (result) => setAuthor(result));
    }, []);

    return (
        <>
            <div className="w-100 mt-4">
                <div className="my-4 text-center">
                    <Link to="/authors" className="btn btn-sm btn-danger">
                        <span className="me-2">
                            <BsBackspaceFill />
                        </span>
                        Back to Authors
                    </Link>
                </div>
                <div className="row">
                    <div className="col-6 mx-auto">
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
                                            {author.name}
                                        </h5>
                                        <div className="card-text">
                                            <p>City : {author.city}</p>
                                            <p>
                                                Date Of Birth :{" "}
                                                {new Date(
                                                    author.dateOfBirth
                                                ).getFullYear()}{" "}
                                                -{" "}
                                                {new Date(
                                                    author.dateOfBirth
                                                ).getMonth() + 1}{" "}
                                                -{" "}
                                                {new Date(
                                                    author.dateOfBirth
                                                ).getDate()}
                                            </p>
                                            <p>
                                                Age :{" "}
                                                {new Date().getFullYear() -
                                                    new Date(
                                                        author.dateOfBirth
                                                    ).getFullYear()}{" "}
                                                years old
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {author.books?.map((book) => {
                        return (
                            <div className="col-3 card-book" key={book.id}>
                                <Link
                                    to={`/books/detail/${book.id}`}
                                    className="text-decoration-none"
                                >
                                    <div
                                        className="card mt-3 me-2 shadow p-3 mb-3 bg-body rounded"
                                        style={{ width: "18rem" }}
                                    >
                                        <img
                                            src={book.image}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title text-shadow text-dark">
                                                {book.title}
                                            </h5>
                                            <p className="text-primary fw-bold">
                                                {rupiah(book.price)}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default DetailAuthor;
