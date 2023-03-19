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
function BookForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState(["Popular"]);

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

  function handleImageChange(e) {
    setImageFile(e.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageFile) {
      const date = Date.now();
      const storage = getStorage();
      const mountainsRef = ref(storage, `images/${date}`);
      uploadBytes(mountainsRef, imageFile).then((snapshot) => {
        console.log(snapshot);
        console.log("Uploaded a blob or file!");
        getDownloadURL(ref(storage, `images/${date}`)).then((url) => {
          addData(url);
        });
      });
    }
  };

  const addData = async (url) => {
    try {
      await addDoc(collection(db, "books"), {
        name: name,
        price: price,
        description: description,
        url: url,
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
        <button className="forminput" type="button" onClick={handleNewCategory}>
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
          Image:
          <input
            className="forminput"
            type="file"
            onChange={handleImageChange}
          />
        </label>
        <button className="forminput" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookForm;
