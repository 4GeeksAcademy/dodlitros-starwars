//@ts-check
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets:[],
			favorites: [],
			urlBase:"https://www.swapi.tech/api"
		},
		actions: {
			

			getcharacters: async () => {
				let store = getStore();
				try {
				  let response = await fetch(`${store.urlBase}/people`);
				  let data = await response.json();
				  
				  for (let item of data.results) {
					
					  let innerResponse = await fetch(item.url);
					  let innerData = await innerResponse.json();
					 
					  setStore({
						characters: [...getStore().characters, innerData.result]
					  });
					  
				  }

				} catch (error) {
				  console.log(error);
				}
			},
			getPlanet: async () => {
				let store = getStore();
				try {
				  let response = await fetch(`${store.urlBase}/planets`);
				  let data = await response.json();
				  
				  for (let item of data.results) {
					
					let innerResponse = await fetch(item.url);
					let innerData = await innerResponse.json();
				   
					setStore({
					  planets: [...getStore().planets, innerData.result]
					});
					
				}
				} catch (error) {
				  console.log(error);
				}
			},
			addFavorites: (favorito) => {
				console.log("Adding to favorites:", favorito);
				const store = getStore();
				const actions = getActions();
				if (!store.favorites.includes(favorito)) {
					setStore({ favorites: [favorito, ...store.favorites] });
					console.log("Favorites after addition:", getStore().favorites);
				} else {
					actions.deleteFavorites(favorito);
					console.log("Favorites after deletion:", getStore().favorites);
				}
			},
			deleteFavorites: (name) => {
				const store = getStore();
				const newArray = store.favorites.filter((item) => item != name);
				setStore({ favorites: newArray });
			}
		}
	}
};

export default getState;
