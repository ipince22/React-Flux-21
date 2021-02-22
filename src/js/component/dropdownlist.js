import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Button } from "bootstrap";

export const DropdownList = () => {
	//conceptos de flux,
	const { store, actions } = useContext(Context);
	console.log("DropdownList", store.contacts);
	return (
		<div className="container">
			<h1 className="text-center text-primary">Reporte de Ventas</h1>
			<div className="card-body">
				<div className="form-group">
					<select className="form-control" name="myselect">
						{!store.contacts
							? "Loading..."
							: store.contacts.map((item, index) => {
									return (
										<option key={index} value={index}>
											{item.full_name}
										</option>
									);
							  })}
					</select>
					<button className="btn btn-primary">Generar Reporte</button>
				</div>
			</div>
		</div>
	);
};

/*

<div className="container">
    {!store.contacts
        ? "Loading..."
        : store.contacts.map((item, index) => {
                return <p key={index}>{item.full_name}</p>;
            })}
</div>

*/
