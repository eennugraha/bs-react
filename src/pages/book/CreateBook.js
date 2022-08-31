import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addBook } from "../../axios/bookAxios";
import { getCategories } from "../../axios/categoryAxios";
import { getAuthors } from "../../axios/authorAxios";
import { getPublishers } from "../../axios/publisherAxios";
import { MdAddTask, MdCancel, MdOutlinePriceChange } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { FiLink } from "react-icons/fi";
import { BsCalendarDateFill } from "react-icons/bs";

const CreateBook = () => {
    const [form, setForm] = useState({
        title: "",
        image: "",
        synopsis: "",
        price: 0,
        publicationYear: "",
        categoryId: "",
        authorId: "",
        publisherId: "",
    });

    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [publishers, setPublishers] = useState([]);

    useEffect(() => {
        getCategories((result) => setCategories(result));
    }, []);

    useEffect(() => {
        getAuthors((result) => setAuthors(result));
    }, []);

    useEffect(() => {
        getPublishers((result) => setPublishers(result));
    }, []);

    const navigation = useNavigate();

    const submitHandler = () => {
        addBook(form);
        navigation("/books");
    };

    return (
        <div className="row mt-4">
            <div className="w-100 text-center my-3">
                <h4 className="fw-bold" style={{ color: "var(--black)" }}>
                    Create a book
                </h4>
                <p className="medium">Let's create a book</p>
            </div>
            <div className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Book title
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <SiBookstack />
                        </span>
                        <input
                            onChange={(e) =>
                                setForm({ ...form, title: e.target.value })
                            }
                            id="title"
                            type="text"
                            className="form-control"
                            required
                            autoFocus
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                        Image Link
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <FiLink />
                        </span>
                        <input
                            onChange={(e) =>
                                setForm({ ...form, image: e.target.value })
                            }
                            id="image"
                            type="text"
                            className="form-control"
                            placeholder="https://via.placeholder.com/150"
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="sysnopsis" className="form-label">
                        Synopsis
                    </label>
                    <textarea
                        onChange={(e) =>
                            setForm({ ...form, synopsis: e.target.value })
                        }
                        className="form-control"
                        id="sysnopsis"
                        rows="3"
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                        Price
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <MdOutlinePriceChange />
                        </span>
                        <input
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    price: e.target.value,
                                })
                            }
                            id="price"
                            type="number"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="publicationYear" className="form-label">
                        Publication Year
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <BsCalendarDateFill />
                        </span>
                        <input
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    publicationYear: e.target.value,
                                })
                            }
                            id="publicationYear"
                            type="number"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="categoryId" className="form-label">
                        Category
                    </label>
                    <select
                        onChange={(e) =>
                            setForm({ ...form, categoryId: e.target.value })
                        }
                        id="categoryId"
                        className="form-select"
                    >
                        <option defaultValue="">--- Category Book ---</option>
                        {categories.map((category, i) => {
                            const { id, name } = category;
                            return (
                                <option value={id} key={id}>
                                    {name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="authorId" className="form-label">
                        Author
                    </label>
                    <select
                        onChange={(e) =>
                            setForm({ ...form, authorId: e.target.value })
                        }
                        id="authorId"
                        className="form-select"
                    >
                        <option defaultValue="">--- Author ---</option>
                        {authors.map((author, i) => {
                            const { id, name } = author;
                            return (
                                <option value={id} key={id}>
                                    {name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="publisherId" className="form-label">
                        Publisher
                    </label>
                    <select
                        onChange={(e) =>
                            setForm({ ...form, publisherId: e.target.value })
                        }
                        id="publisherId"
                        className="form-select"
                    >
                        <option defaultValue="">--- Publisher ---</option>
                        {publishers.map((publisher, i) => {
                            const { id, name } = publisher;
                            return (
                                <option value={id} key={id}>
                                    {name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <button
                        onClick={() => submitHandler()}
                        className="btn btn-sm"
                        style={{
                            backgroundColor: "var(--blue)",
                            color: "#fff",
                        }}
                    >
                        <span className="me-2">
                            <MdAddTask />
                        </span>
                        Submit
                    </button>
                    <Link
                        to="/books"
                        className="btn btn-sm ms-2"
                        style={{
                            backgroundColor: "var(--red)",
                            color: "#fff",
                        }}
                    >
                        <span className="me-2">
                            <MdCancel />
                        </span>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CreateBook;
