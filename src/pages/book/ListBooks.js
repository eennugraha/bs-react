import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks, removeBook } from "../../axios/bookAxios";
import { RiHealthBookFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Loading from "../../helpers/Loading";
import rupiah from "../../helpers/RupiahFormatter";

const ListBooks = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        getBooks((result) => setBooks(result));
    }, []);

    const deleteHandler = (id) => {
        removeBook(id);
    };

    return (
        <>
            <div className="w-100">
                <div className="w-50 mx-auto mt-4">
                    <form className="d-flex" role="search">
                        <input
                            onChange={(e) => setQuery(e.target.value)}
                            className="form-control me-2 rounded-pill shadow p-3 mb-5 bg-body rounded"
                            type="search"
                            placeholder="Search title book ...."
                            aria-label="Search"
                        />
                    </form>
                </div>
                <div className="text-center">
                    <Link
                        to="/books/create"
                        className="btn btn-sm"
                        style={{
                            backgroundColor: "var(--green)",
                            color: "#fff",
                        }}
                    >
                        <span className="me-2">
                            <RiHealthBookFill />
                        </span>
                        Add Book
                    </Link>
                </div>
                <div className="row mx-auto">
                    {books.length > 0 ? (
                        books
                            .filter((book) => {
                                if (query === "") {
                                    return book;
                                } else if (
                                    book.title
                                        .toLowerCase()
                                        .includes(query.toLowerCase())
                                ) {
                                    return book;
                                }
                            })
                            .map((book) => {
                                const { id, title, image, price } = book;
                                return (
                                    <div className="col-3 card-book" key={id}>
                                        <div
                                            className="card mt-4 me-2 shadow p-3 mb-3 bg-body rounded"
                                            style={{ width: "18rem" }}
                                        >
                                            <Link
                                                to={`/books/detail/${id}`}
                                                className="text-decoration-none"
                                            >
                                                <img
                                                    src={image}
                                                    className="card-img-top"
                                                    alt="..."
                                                />
                                                <div className="card-body text-dark">
                                                    <h5 className="card-title text-shadow">
                                                        {title}
                                                    </h5>
                                                    <p className="card-text medium mt-3">
                                                        {book.author.name}
                                                    </p>
                                                    <p className="text-primary fw-bold font-large">
                                                        {rupiah(price)}
                                                    </p>
                                                </div>
                                            </Link>
                                            <div className="card-footer mx-auto nav-bg">
                                                <Link
                                                    to={`/books/edit/${id}`}
                                                    className="btn btn-sm me-2 btn-warning"
                                                >
                                                    <span>
                                                        <MdModeEdit />
                                                    </span>
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        deleteHandler(+id)
                                                    }
                                                    className="btn btn-sm me-2 btn-danger"
                                                >
                                                    <span>
                                                        <RiDeleteBin5Fill />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                    ) : (
                        <Loading />
                    )}
                </div>
            </div>
        </>
    );
};

export default ListBooks;
