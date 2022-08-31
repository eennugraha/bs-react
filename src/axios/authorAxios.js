import axios from "axios";
import Swal from "sweetalert2";

const URL = "https://bk-store-ku.herokuapp.com/api/authors";

const getAuthors = async (cb) => {
  try {
    let authors = await axios({
      method: "GET",
      url: URL,
    });
    cb(authors.data);
  } catch (error) {
    console.log(error);
  }
};

const addAuthor = async (author) => {
  try {
    let newAuthor = await axios({
      method: "POST",
      url: URL + "/create",
      data: author,
    });

    Swal.fire("Add Author!", "Author has been added.", "success");
  } catch (error) {
    console.log(error);
  }
};

const editAuthor = async (id, author) => {
  try {
    let updateAuthor = await axios({
      method: "PUT",
      url: URL + "/edit/" + id,
      data: author,
    });

    Swal.fire(
      `Edit Author!`,
      `Author with id "${id}" has been updated.`,
      "success"
    );
  } catch (error) {
    console.log(error);
  }
};

const removeAuthor = async (id) => {
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
        let deleteAuthor = await axios({
          method: "DELETE",
          url: URL + "/delete/" + id,
        });
        Swal.fire(
          "Deleted!",
          `Author with id "${id}" has been deleted.`,
          "success"
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const detailAuthor = async (id, cb) => {
  try {
    let findAuthor = await axios({
      method: "GET",
      url: URL + "/detail/" + id,
    });

    cb(findAuthor.data);
  } catch (error) {
    console.log(error);
  }
};

export { getAuthors, addAuthor, editAuthor, removeAuthor, detailAuthor };
