import React, { createFactory, useContext, useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import "./bookform.css";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import BlogForm from "../BlogForm/BlogForm";
import CartContext from "../../CartContext";
function BookForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [imageFiles, setImageFiles] = useState({}); // Update to an object for multiple files
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState(["Popular"]);
  const [activeTab, setActiveTab] = useState("book");
  const [selectedId, setSelectedId] = useState("");
  const [bookToUpdate, setBookToUpdate] = useState({
    name: "",
    description: "",
    price: "",
  });

  const { allBooksData } = useContext(CartContext);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const docRef = doc(db, "categories", "category");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setCategories(docSnap.data().categories);
    } else {
    }
  };

  function handleImageChange(e, key) {
    setImageFiles((prevState) => ({
      ...prevState,
      [key]: e.target.files[0],
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urls = await uploadImagesAndGetUrls();
    if (urls) {
      addData(urls);
    }
  };
  const uploadImagesAndGetUrls = async () => {
    const date = Date.now();
    const storage = getStorage();
    const promises = Object.entries(imageFiles).map(async ([key, file]) => {
      const mountainsRef = ref(storage, `images/${date}/${key}`);
      await uploadBytes(mountainsRef, file);
      return getDownloadURL(ref(storage, `images/${date}/${key}`));
    });

    try {
      const urls = await Promise.all(promises);
      return {
        url: urls[0],
        url1: urls[1],
        url2: urls[2],
        url3: urls[3],
      };
    } catch (error) {
      console.error("Error uploading images: ", error);
      return null;
    }
  };

  const addData = async (urls) => {
    try {
      await addDoc(collection(db, "books"), {
        name: name,
        price: price,
        description: description,
        ...urls,
        features,
        category: category,
      });
      window.alert("Book Added");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleNewCategory(e) {
    e.preventDefault();
    const newCategory = prompt("Enter a new category:");
    if (newCategory) {
      addCategoryToFirebase([...categories, newCategory]);
    }
  }

  const addCategoryToFirebase = async (data) => {
    try {
      await setDoc(doc(db, "categories", "category"), {
        categories: data,
      });
      getCategories();
      window.alert("Category Added");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleBookIdChange = (e) => {
    setSelectedId(e.target.value);
    const objectToFind = allBooksData.find(
      (object) => Object.keys(object)[0] === e.target.value
    );
    if (objectToFind) {
      setBookToUpdate(Object.values(objectToFind)[0]);
    }
  };

  const handleBookUpdate = async (e) => {
    e.preventDefault();
    const urls = await uploadImagesAndGetUrls();
    if (urls) {
      const definedUrls = Object.fromEntries(
        Object.entries(urls).filter(([key, value]) => value !== undefined)
      );
      const bookRef = doc(db, "books", selectedId);
      await updateDoc(bookRef, {
        ...bookToUpdate,
        ...definedUrls,
      });
      window.alert("Book Updated");
    }
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "book" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("book");
          }}
        >
          Add Book
        </button>
        <button
          className={`tab-button ${activeTab === "blog" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("blog");
          }}
        >
          Add Blog
        </button>
        <button
          className={`tab-button ${activeTab === "updateBook" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("updateBook");
          }}
        >
          Update Book
        </button>
      </div>

      <div>
        {activeTab === "book" && (
          <div className="form-container">
            <div>Add Book</div>
            <form onSubmit={handleSubmit}>
              <label className="formlabel">
                Category:
                <select
                  className="forminput"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
              <button
                className="forminput"
                type="button"
                onClick={handleNewCategory}
              >
                Add new category
              </button>

              <label className="formlabel">
                Name:
                <input
                  className="forminput"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="formlabel">
                Price:
                <input
                  className="forminput"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
              <label className="formlabel">
                Description:
                <textarea
                  className="forminput"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
              <label className="formlabel">
                Features: (seperate by ";")
                <textarea
                  className="forminput"
                  value={features}
                  onChange={(e) => setFeatures(e.target.value)}
                />
              </label>
              <label className="formlabel">
                Image 1:
                <input
                  className="forminput"
                  type="file"
                  onChange={(e) => handleImageChange(e, "image1")}
                />
              </label>
              <label className="formlabel">
                Image 2:
                <input
                  className="forminput"
                  type="file"
                  onChange={(e) => handleImageChange(e, "image2")}
                />
              </label>
              <label className="formlabel">
                Image 3:
                <input
                  className="forminput"
                  type="file"
                  onChange={(e) => handleImageChange(e, "image3")}
                />
              </label>
              <label className="formlabel">
                Image 4:
                <input
                  className="forminput"
                  type="file"
                  onChange={(e) => handleImageChange(e, "image4")}
                />
              </label>
              <button className="forminput" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}

        {activeTab === "blog" && <BlogForm />}

        {activeTab === "updateBook" && (
          <div className="form-container">
            <div>Update Book</div>
            <form onSubmit={handleBookUpdate}>
              <label className="formlabel">
                Book:
                <select
                  className="forminput"
                  // value={bookIdToUpdate}
                  onChange={(e) => handleBookIdChange(e)}
                >
                  <option value="">Select a book to update</option>
                  {allBooksData.length &&
                    allBooksData.map((book) => {
                      return (
                        <option
                          key={Object.keys(book)[0]}
                          value={Object.keys(book)[0]}
                        >
                          {Object.values(book)[0].name}
                        </option>
                      );
                    })}
                </select>
              </label>
              <label className="formlabel">
                Name:
                <input
                  className="forminput"
                  type="text"
                  value={bookToUpdate.name}
                  onChange={(e) =>
                    setBookToUpdate({
                      ...bookToUpdate,
                      name: e.target.value,
                    })
                  }
                />
              </label>
              <label className="formlabel">
                Price:
                <input
                  className="forminput"
                  type="number"
                  value={bookToUpdate.price}
                  onChange={(e) =>
                    setBookToUpdate({
                      ...bookToUpdate,
                      price: e.target.value,
                    })
                  }
                />
              </label>
              <label className="formlabel">
                Description:
                <textarea
                  className="forminput"
                  value={bookToUpdate.description}
                  onChange={(e) =>
                    setBookToUpdate({
                      ...bookToUpdate,
                      description: e.target.value,
                    })
                  }
                />
              </label>
              <label className="formlabel">
              Features: (seperate by ";")
                <textarea
                  className="forminput"
                  value={bookToUpdate.features}
                  onChange={(e) =>
                    setBookToUpdate({
                      ...bookToUpdate,
                      features: e.target.value,
                    })
                  }
                />
              </label>
              <label className="formlabel">
                Image 1:
                <input
                  className="forminput"
                  type="file"
                  onChange={(e) => handleImageChange(e, "image1")}
                />
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                    marginBottom: "1rem",
                  }}
                >
                  {bookToUpdate.url}
                </p>
              </label>
              <label className="formlabel">
                Image 2:
                <input
                  className="forminput"
                  type="file"
                  onChange={(e) => handleImageChange(e, "image2")}
                />
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                    marginBottom: "1rem",
                  }}
                >
                  {bookToUpdate.url1}
                </p>
              </label>
              <label className="formlabel">
                Image 3:
                <input
                  className="forminput"
                  type="file"
                  onChange={(e) => handleImageChange(e, "image3")}
                />
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                    marginBottom: "1rem",
                  }}
                >
                  {bookToUpdate.url1}
                </p>
              </label>
              <label className="formlabel">
                Image 4:
                <input
                  className="forminput"
                  type="file"
                  onChange={(e) => handleImageChange(e, "image4")}
                />
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                    marginBottom: "1rem",
                  }}
                >
                  {bookToUpdate.url1}
                </p>
              </label>
              <button className="forminput" type="submit">
                Update
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookForm;
