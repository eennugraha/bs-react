import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/books";

const getBooks = async (cb) => {
    try {
        let books = await axios({
            method: "GET",
            url: URL,
        });
        cb(books.data);
    } catch (error) {
        console.log(error);
    }
};

const addBook = async (book) => {
    try {
        let newBook = await axios({
            method: "POST",
            url: URL + "/create",
            data: book,
        });
        Swal.fire("Add Book!", "Book has been added.", "success");
    } catch (error) {
        console.log(error);
    }
};

const editBook = async (id, book) => {
    try {
        let updateBook = await axios({
            method: "PUT",
            url: URL + "/edit/" + id,
            data: book,
        });

        Swal.fire(
            `Edit Book!`,
            `Book with id "${id}" has been updated.`,
            "success"
        );
    } catch (error) {
        console.log(error);
    }
};

const removeBook = async (id) => {
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
                let deleteBook = await axios({
                    method: "DELETE",
                    url: URL + "/delete/" + id,
                });
                Swal.fire(
                    "Deleted!",
                    `Book with id "${id}" has been deleted.`,
                    "success"
                );
            }
        });
    } catch (error) {
        console.log(error);
    }
};

const detailBook = async (id, cb) => {
    try {
        let findBook = await axios({
            method: "GET",
            url: URL + "/detail/" + id,
        });

        cb(findBook.data);
    } catch (error) {
        console.log(error);
    }
};

export { getBooks, addBook, editBook, removeBook, detailBook };
