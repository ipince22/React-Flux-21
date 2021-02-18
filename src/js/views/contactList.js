import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const ContactList = () => {
	const { store, actions } = useContext(Context);

	console.log("page contacts.js", store.contacts);

	return (
		<>
			{store.contacts.map((item, index) => {
				return <p key={index}>{item.full_name}</p>;
			})}
		</>
	);
};
