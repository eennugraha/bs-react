import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/publishers";

const getPublishers = async (cb) => {
    try {
        let publishers = await axios({
            method: "GET",
            url: URL,
        });

        cb(publishers.data);
    } catch (error) {
        console.log(error);
    }
};

const addPublisher = async (publisher) => {
    try {
        let newPublisher = await axios({
            method: "POST",
            url: URL + "/create",
            data: publisher,
        });

        Swal.fire("Add Publisher!", "Publisher has been added.", "success");
    } catch (error) {
        console.log(error);
    }
};

const editPublisher = async (id, publisher) => {
    try {
        let updatePublisher = await axios({
            method: "PUT",
            url: URL + "/edit/" + id,
            data: publisher,
        });

        Swal.fire(
            `Edit Publisher!`,
            `Publisher with id "${id}" has been updated.`,
            "success"
        );
    } catch (error) {
        console.log(error);
    }
};

const removePublisher = async (id) => {
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
                let deletePublisher = await axios({
                    method: "DELETE",
                    url: URL + "/delete/" + id,
                });
                Swal.fire(
                    "Deleted!",
                    `Publisher with id "${id}" has been deleted.`,
                    "success"
                );
            }
        });
    } catch (error) {
        console.log(error);
    }
};

const detailPublisher = async (id, cb) => {
    try {
        let findPublisher = await axios({
            method: "GET",
            url: URL + "/detail/" + id,
        });

        cb(findPublisher.data);
    } catch (error) {
        console.log(error);
    }
};

export {
    getPublishers,
    addPublisher,
    editPublisher,
    removePublisher,
    detailPublisher,
};
