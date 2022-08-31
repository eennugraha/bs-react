import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    Book,
    ListBooks,
    CreateBook,
    EditBook,
    DetailBook,
    Category,
    ListCategories,
    CreateCategory,
    EditCategory,
    DetailCategory,
    Author,
    ListAuthors,
    CreateAuthor,
    EditAuthor,
    DetailAuthor,
    Publisher,
    ListPublishers,
    CreatePublisher,
    EditPublisher,
    DetailPublisher,
} from "../pages";

const MainContent = () => {
    return (
        <div className="container">
            <Routes>
                <Route
                    exact
                    activeClassName="active"
                    path=""
                    element={<Book />}
                >
                    <Route path="" element={<ListBooks />}></Route>
                </Route>
                <Route activeClassName="active" path="books" element={<Book />}>
                    <Route path="" element={<ListBooks />}></Route>
                    <Route path="create" element={<CreateBook />}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditBook />}></Route>
                    </Route>
                    <Route path="detail">
                        <Route path=":id" element={<DetailBook />}></Route>
                    </Route>
                </Route>
                <Route
                    activeClassName="active"
                    path="categories"
                    element={<Category />}
                >
                    <Route path="" element={<ListCategories />}></Route>
                    <Route path="create" element={<CreateCategory />}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditCategory />}></Route>
                    </Route>
                    <Route path="detail">
                        <Route path=":id" element={<DetailCategory />}></Route>
                    </Route>
                </Route>
                <Route
                    activeClassName="active"
                    path="authors"
                    element={<Author />}
                >
                    <Route path="" element={<ListAuthors />}></Route>
                    <Route path="create" element={<CreateAuthor />}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditAuthor />}></Route>
                    </Route>
                    <Route path="detail">
                        <Route path=":id" element={<DetailAuthor />}></Route>
                    </Route>
                </Route>
                <Route
                    activeClassName="active"
                    path="publishers"
                    element={<Publisher />}
                >
                    <Route path="" element={<ListPublishers />}></Route>
                    <Route path="create" element={<CreatePublisher />}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditPublisher />}></Route>
                    </Route>
                    <Route path="detail">
                        <Route path=":id" element={<DetailPublisher />}></Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default MainContent;
