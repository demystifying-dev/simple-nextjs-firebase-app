import React from "react";
import Head from "next/head";
import Nav from "../../components/nav";

// Firebase
import loadFirebase from "../../firebase.config";

const Photos = ({ photos }) => {
  console.log("photos", photos);
  return (
    <div>
      <Head>
        <title>Photos</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <Nav />

      <div className="hero">
        <h1 className="title">Welcome to Next.js with Firebase!</h1>

        <div className="row">
          {photos.map(photo => (
            <div className="card" id="data" key={photo.id}>
              <img src={photo.url} alt="Photo" className="photo" />
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
        .photo {
          vertical-align: middle;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

Photos.getInitialProps = async () => {
  const firebase = await loadFirebase();
  const db = firebase.firestore();
  let result = await new Promise((resolve, reject) => {
    db.collection("photos")
      .get()
      .then(snapshot => {
        let data = [];
        snapshot.forEach(doc => {
          data.push(
            Object.assign(
              {
                id: doc.id
              },
              doc.data()
            )
          );
        });
        resolve(data);
      })
      .catch(error => {
        reject([]);
      });
  });
  return { photos: result };
};

export default Photos;
