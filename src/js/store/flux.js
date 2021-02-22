const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "Reportes por Cliente",
					background: "white",
					initial: "white"
				},
				{
					title: "Resportes por Producto",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/ipince")
					.then(response => response.json())
					.then(data => {
						setStore({ contacts: data });
					});

				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			//------------------------------------------------------------------------------------------------
			deleteContact: IdContact => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + IdContact, {
					method: "DELETE"
				})
					.then(response => response.json())
					.then(data => {
						console.log("delete", data);
						getActions().loadContacts();
						alert("Contact Delete, OK!");

						// props.history.push("/Contacts")
					})
					.catch(error => console.error("Error:", error));
			},
			EditContact: (contactObj, IdContact) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + IdContact, {
					method: "PUT",
					body: JSON.stringify(contactObj),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						alert("Success:", JSON.stringify(data));
						//1.-para acceder a los metodos primera forma
						//const actions = getActions();
						//actions.loadContacts();
						//2.- segunda forma
						getActions().loadContacts();
					})
					.catch(error => console.log("Error:", error));
			},
			NewContact: Objcontact => {
				console.log("input", Objcontact);
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(Objcontact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log("output", data);
						alert("New Contact Add, OK!");
						getActions().loadContacts();
						// props.history.push("/Contacts")
					})
					.catch(error => console.error("Error:", error));
			},
			//------------------------------------------------------------------------------------------------
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
