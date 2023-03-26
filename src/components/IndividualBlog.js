import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

export default function IndividualBlog() {
  const params = useParams();
  const [blogPost, setBlogPost] = useState();

  useEffect(() => {
    if (params?.id && params?.id?.length > 0) {
      getBlogData(params?.id);
    }
  }, []);

  const getBlogData = async (id) => {
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
      setBlogPost(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    blogPost && (
      <div>
        <div
          style={{
            width: "100%",
            height: "400px",
            backgroundImage: `url(${
              blogPost.imageUrl.length > 0
                ? blogPost.imageUrl.length
                : "https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_960_720.jpg"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div style={{ width: "80%", margin: "auto", padding: "1rem" }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginTop: "40px",
              marginBottom: "16px",
            }}
          >
            {blogPost.title}
          </h1>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "16px",
              marginBottom: "24px",
            }}
          >
            {blogPost.subtitle}
          </h2>
          <p
            style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "24px" }}
          >
            {blogPost.content}
          </p>
          <p
            style={{ fontSize: "16px", fontStyle: "italic", color: "#666666" }}
          >
            Posted on {blogPost.date}
          </p>
        </div>
      </div>
    )
  );
}
