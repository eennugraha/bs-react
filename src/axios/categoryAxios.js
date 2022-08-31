import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/categories";

const getCategories = async (cb) => {
    try {
        let categories = await axios({
            method: "GET",
            url: URL,
        });

        cb(categories.data);
    } catch (error) {
        console.log(error);
    }
};

const addCategory = async (category) => {
    try {
        let newCategory = await axios({
            method: "POST",
            url: URL + "/create",
            data: category,
        });

        Swal.fire("Add Category!", "Category has been added.", "success");
    } catch (error) {
        console.log(error);
    }
};

const editCategory = async (id, category) => {
    try {
        let updateCategory = await axios({
            method: "PUT",
            url: URL + "/edit/" + id,
            data: category,
        });

        Swal.fire(
            `Edit Category!`,
            `Category with id "${id}" has been updated.`,
            "success"
        );
    } catch (error) {
        console.log(error);
    }
};

const removeCategory = async (id) => {
    try {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                let deleteCategory = await axios({
                    method: "DELETE",
                    url: URL + "/delete/" + id,
                });
                Swal.fire(
                    "Deleted!",
                    `Category with id "${id}" has been deleted.`,
                    "success"
                );
            }
        });
    } catch (error) {
        console.log(error);
    }
};

const detailCategory = async (id, cb) => {
    try {
        let findCategory = await axios({
            method: "GET",
            url: URL + "/detail/" + id,
        });

        cb(findCategory.data);
    } catch (error) {
        console.log(error);
    }
};

export {
    getCategories,
    addCategory,
    editCategory,
    removeCategory,
    detailCategory,
};
