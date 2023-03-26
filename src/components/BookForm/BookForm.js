import React, { createFactory, useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import "./bookform.css";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import BlogForm from "../BlogForm/BlogForm";
function BookForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFiles, setImageFiles] = useState({}); // Update to an object for multiple files
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState(["Popular"]);
  const [activeTab, setActiveTab] = useState("book");

  useEffect(() => {
    getCategories();
  });

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
      </div>

      <div>
        {activeTab === "book" ? (
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
        ) : (
          <BlogForm />
        )}
      </div>
    </div>
  );
}

export default BookForm;
