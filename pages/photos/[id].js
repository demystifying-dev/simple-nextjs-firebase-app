import React from "react";
import Head from "next/head";
import Nav from "../../components/nav";
import { useRouter } from "next/router";

// Firebase
import loadFirebase from "../../firebase.config";

const Photo = ({ photo }) => {
	const router = useRouter();
	const { id } = router.query;
	console.log("photo", photo);
	return (
		<div>
			<Head>
				<title>Photo | {photo.title}</title>
				{/* <link rel='icon' href='/favicon.ico' /> */}
			</Head>

			<Nav />
			<div className="row">
				<h3>{photo.title}</h3>
			</div>

			<div className="row">
				<div className="card" id="data" key={photo.id}>
					<img src={photo.url} alt="Photo" className="photo" />
					<h3>{photo.title}</h3>
					<p>{photo.description}</p>
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
					width: 80%;
					text-align: center;
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
					margin: 0 0 12px 0;
					padding: 12px 0 0;
					text-align: left;
					font-size: 13px;
					color: #333;
				}
				.card a {
					text-decoration: none;
					font-size: 12px;
					color: purple;
				}
				.photo {
					vertical-align: middle;
					width: 50%;
					height: 50%;
				}
			`}</style>
		</div>
	);
};

Photo.getInitialProps = async context => {
	const { id } = context.query;
	const firebase = await loadFirebase();
	const db = firebase.firestore();
	const photo = await db
		.collection("photos")
		.doc(id)
		.get()
		.then(doc => ({
			data: doc.data()
		}));

	return {
		photo: photo.data
	};
};

export default Photo;
