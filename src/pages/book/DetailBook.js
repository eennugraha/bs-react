import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { detailBook } from "../../axios/bookAxios";
import { BsBackspaceFill } from "react-icons/bs";
import rupiah from "../../helpers/RupiahFormatter";

const DetailBook = () => {
    const [book, setBook] = useState([]);

    const params = useParams();

    useEffect(() => {
        const { id } = params;
        detailBook(+id, (result) => setBook(result));
    }, []);

    return (
        <>
            <div className="w-100 mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <img
                            className="img-thumbnail shadow p-3 mb-3 bg-body rounded"
                            src={book.image}
                            alt="imageBook"
                        />
                    </div>
                    <div className="col-md-8">
                        <div>
                            <h2 className="text-shadow">{book.title}</h2>
                            <p>
                                Author :{" "}
                                <Link
                                    to={`/authors/detail/${book.author?.id}`}
                                    className="text-decoration-none"
                                >
                                    <span
                                        className="fw-semibold"
                                        style={{ color: "var(--red)" }}
                                    >
                                        {book.author?.name}
                                    </span>
                                </Link>
                            </p>
                        </div>
                        <div>
                            <h1 className="my-5 text-primary fw-bold">
                                {rupiah(book.price)}
                            </h1>
                        </div>
                        <div>
                            <h6 className="fw-bold">Synopsis</h6>
                            <p className="medium">{book.synopsis}</p>
                        </div>
                        <div>
                            <h6 className="fw-bold mt-5 mb-4">Details Book</h6>
                            <div className="row">
                                <div className="col-6">
                                    <p className="medium text-secondary">
                                        Title
                                    </p>
                                    <p className="margin-negative">
                                        {book.title}
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="medium text-secondary">
                                        Category
                                    </p>
                                    <p className="margin-negative">
                                        <Link
                                            to={`/categories/detail/${book.category?.id}`}
                                            className="text-decoration-none"
                                        >
                                            <span className="text-dark">
                                                {book.category?.name}
                                            </span>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p className="medium text-secondary">
                                        Publisher
                                    </p>
                                    <p className="margin-negative">
                                        <Link
                                            to={`/publishers/detail/${book.publisher?.id}`}
                                            className="text-decoration-none"
                                        >
                                            <span className="text-dark">
                                                {book.publisher?.name}
                                            </span>
                                        </Link>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="medium text-secondary">
                                        Publication Year
                                    </p>
                                    <p className="margin-negative">
                                        {book.publicationYear}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Link
                                        to="/books"
                                        className="btn btn-sm btn-danger my-3"
                                    >
                                        <span className="me-2">
                                            <BsBackspaceFill />
                                        </span>
                                        Back to Books
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailBook;
