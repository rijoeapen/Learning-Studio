import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./ImageGallery.css";
import { Modal } from "../Modal/Modal";
const ImageGallery = () => {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [upload, setUpload] = useState(false);
  const [showModal, setShowModal] = useState("");
  const progressRef = useRef(null);
  const labelRef = useRef(null);

  console.log(showModal);

  useEffect(() => {
    if (files.length !== 0) {
      labelRef.current.textContent = "0%";
      progressRef.current.setAttribute("value", 0);
      HandleUpload();
    }
  }, [files]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/")
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    setFiles(event.target.files);
    setUpload(true);
  };

  const config = {
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded / progressEvent.total) * 100
      );
      progressRef.current.setAttribute("value", percentCompleted);
      labelRef.current.textContent = `${percentCompleted}%`;
      if (percentCompleted === 100) {
        labelRef.current.textContent = `Upload complete!`;
        setUpload(false);
      }
    },
  };

  const HandleUpload = () => {
    const formData = new FormData();
    formData.append("myFile", files[0]);
    formData.append("firstName", "Rijo");

    axios
      .post("http://localhost:4001/upload", formData, config, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <header>
        <div>
          <h1>Photo Gallery</h1>
          <p>A picture is worth thousand words.</p>
        </div>
        <label htmlFor="file">
          <ion-icon name="add-circle-outline" type="file"></ion-icon>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
          {upload && <p>{files[0]?.name}</p>}
        </label>
      </header>
      <main className="gallery-container">
        {upload && (
          <section className="progress-bar-container">
            <label ref={labelRef} htmlFor="progress-bar">
              0%
            </label>
            <progress
              id="progress-bar"
              ref={progressRef}
              value="0"
              max="100"
            ></progress>
          </section>
        )}
        <section className="image-galley">
          {images.map((img, index) => {
            return (
              <img
                key={index}
                src={`http://localhost:4001/${img}`}
                alt={img}
                height={300}
                width={300}
                onClick={() => setShowModal(index.toString())}
              />
            );
          })}
        </section>
      </main>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <img
            src={`http://localhost:4001/${images[showModal]}`}
            alt={`${images[showModal]}`}
          />
        </Modal>
      )}
    </>
  );
};

export default ImageGallery;
