import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const ContactList = () => {
	const { store, actions } = useContext(Context);

	console.log("page contacts.js", store.contacts);

	return (
		<>
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-md-10">
						<h1 className="display-3">React - flux</h1>
						<table className="table table-hover">
							<thead>
								<tr className="text-center text-primary">
									<th>Lista Contactos</th>
								</tr>
							</thead>
							<tbody>
								{store.contacts.map((item, index) => {
									return (
										<tr key={index}>
											<td>{item.full_name}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};
