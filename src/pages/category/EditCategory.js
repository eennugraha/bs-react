import React, { useState, useEffect } from "react";
import { editCategory, detailCategory } from "../../axios/categoryAxios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdAddTask, MdCancel, MdCategory } from "react-icons/md";

const EditCategory = () => {
    const [form, setForm] = useState({
        name: "",
    });

    const navigation = useNavigate();
    const params = useParams();

    const getCategoryDetail = () => {
        const { id } = params;

        detailCategory(+id, (result) => {
            setForm({
                name: result.name,
            });
        });
    };

    useEffect(() => {
        getCategoryDetail();
    }, []);

    const submitHandler = () => {
        const { id } = params;

        editCategory(+id, form);
        navigation("/categories");
    };

    return (
        <div className="row mt-4">
            <div className="w-100 text-center my-3">
                <h4 className="fw-bold" style={{ color: "var(--black)" }}>
                    Edit a category for books
                </h4>
                <p className="medium">Something wrong? let's edited!</p>
            </div>
            <div className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">
                        Category name
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <MdCategory />
                        </span>
                        <input
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                            id="categoryName"
                            type="text"
                            className="form-control"
                            required
                            autoFocus
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
                        to="/categories"
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

export default EditCategory;
