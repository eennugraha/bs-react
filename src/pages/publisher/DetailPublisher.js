import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { detailPublisher } from "../../axios/publisherAxios";
import { BsBackspaceFill } from "react-icons/bs";
import rupiah from "../../helpers/RupiahFormatter";

const DetailPublisher = () => {
    const [publisher, setPublisher] = useState([]);

    const params = useParams();

    useEffect(() => {
        const { id } = params;
        detailPublisher(+id, (result) => setPublisher(result));
    }, []);

    return (
        <>
            <div className="w-100 mt-4">
                <div className="my-4 text-center">
                    <Link to="/publishers" className="btn btn-sm btn-danger">
                        <span className="me-2">
                            <BsBackspaceFill />
                        </span>
                        Back to Publishers
                    </Link>
                </div>
                <div className="row">
                    <p className="col-6 mx-auto text-center lead fw-bold">
                        List of books that have been released by :{" "}
                        <span style={{ color: "var(--blue)" }}>
                            {publisher.name}
                        </span>
                    </p>
                </div>
                <div className="row">
                    {publisher.books?.map((book) => {
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

export default DetailPublisher;
