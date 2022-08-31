import React, { useState, useEffect } from "react";
import { editAuthor, detailAuthor } from "../../axios/authorAxios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdAddTask, MdCancel } from "react-icons/md";

const EditAuthor = () => {
    const [form, setForm] = useState({
        name: "",
        dateOfBirth: new Date(),
        city: "",
    });

    const navigation = useNavigate();
    const params = useParams();

    const getAuthorDetail = () => {
        const { id } = params;

        detailAuthor(+id, (result) => {
            setForm({
                name: result.name,
                dateOfBirth: result.dateOfBirth,
                city: result.city,
            });
        });
    };

    useEffect(() => {
        getAuthorDetail();
    }, []);

    const submitHandler = () => {
        const { id } = params;

        editAuthor(+id, form);
        navigation("/authors");
    };

    return (
        <div className="row mt-4">
            <div className="w-100 text-center my-3">
                <h4 className="fw-bold" style={{ color: "var(--black)" }}>
                    Add author
                </h4>
                <p className="medium">Let's get started with us</p>
            </div>
            <div className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="authorName" className="form-label">
                        Author name
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <FaUserEdit />
                        </span>
                        <input
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                            id="authorName"
                            type="text"
                            className="form-control"
                            required
                            autoFocus
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="dateOfBirth" className="form-label">
                        Date Of Birth
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <BsCalendarDateFill />
                        </span>
                        <input
                            value={form.dateOfBirth}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    dateOfBirth: e.target.value,
                                })
                            }
                            id="dateOfBirth"
                            type="date"
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">
                        City
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <GiModernCity />
                        </span>
                        <input
                            value={form.city}
                            onChange={(e) =>
                                setForm({ ...form, city: e.target.value })
                            }
                            id="city"
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>
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
                        to="/authors"
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

export default EditAuthor;
