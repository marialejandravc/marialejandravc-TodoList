import React from "react";
import TodoList from "./Todolist";


//include images into your bundle
import backgroundImage from "../../img/pexels-george-milton-7034449.jpg"; 

//create your first component
const Home = () => {
	return (
	  <div className="container-fluid text-center">
		{ }
		<div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
  
		<div className="content">
		  <p className="mt-4">
		  ¡Descubre una nueva forma de gestionar tus actividades diarias! Explora nuestra herramienta para mantener el control de tu día a día de manera eficiente.
		  </p>
		  <p className="mt-4">
			Hecho por{""}
			<a href="https://github.com/marialejandravc"> marialejandravc </a>, con
			💚!
		  </p>
  
		</div>
		{ }
		<TodoList />
	  </div>
  
	);
  };
  
  export default Home;
