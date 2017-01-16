import React from 'react';

// Component Structure
// --------------------
// TodoApp
// --> Title
// --> Form
// --> List
// ----> Todo
// --> Footer

// stateless component
const Title = () => {
	return (
		<div>
			<h2>To-do List</h2>
		</div>
	);
};

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleNewTodoAddition() {
		if(this.input.value !== '') {
			this.props.addTodo(this.input.value);
			this.setState({
				value: ''
			});
			this.input.placeholder = "Add todo here...";
		}
	}

	render() {
		return (
			// ref should be passed a callback with underlying dom element as its argument to get its reference
			<div>
				<input
					ref={node => {
						this.input = node;
					}}
					value={this.state.value}
					placeholder="Add todos here..."
					autoComplete="off"
					onChange={(event) => this.handleChange(event)}
				/>

				<button
					onClick={() => this.handleNewTodoAddition()}
				>
					+
				</button>
			</div>
		);
	}
}

const Todo = ({todo, remove}) => {
	return (
		<p>
			{todo.value}
      <button onClick={() => remove(todo.id)}>
        -
      </button>
		</p>
	);
};

const List = ({todos, remove}) => {
	let allTodos = [];

	if(todos.length > 0) {
		allTodos = todos.map(todo => {
			// passing todo and remove method reference
			return (<Todo todo={todo} key={todo.id} remove={remove} />);
			//return (<p>{todo.value}</p>);
		});
	} else {
		allTodos.push(<h3>All caught up !</h3>);
	}

	return (
		<div>
			<p> Your Todos: </p>
			{allTodos}
		</div>
	);
};

const Footer = () => {
	return (
		<p>Footer!</p>
	);
};

export class TodoApp extends React.Component {
	constructor(props) {
		super(props);

		const introData = [
			{
				id: -3,
				value: "Hi! This is a simple todo list app made by REACT <3"
			},
			{
				id: -2,
				value: "Hover over todos and click on `X` to delete them!"
			},
			{
				id: -1,
				value: "Add new todos and come back any time later, I will save them for you!"
			}
		];

		const localData = localStorage.todos && JSON.parse(localStorage.todos);

		this.state = {
			data: localData || introData
		};
	}
	// Handler to update localStorage
	updateLocalStorage() {
		if (typeof(Storage) !== "undefined")
			localStorage.todos = JSON.stringify(this.state.data);
	}
	// Handler to add todo
	addTodo(val) {
		let id;
		// if localStorage is available then increase localStorage count
		// else use global window object's id variable
		if (typeof(Storage) !== "undefined") {
			id = Number(localStorage.count);
			localStorage.count = Number(localStorage.count) + 1;
		} else {
			id = window.id++;
		}

		const todo = {
			value: val,
			id: id
		};

		this.state.data.push(todo);
		// update state
		this.setState({
			data: this.state.data
		}, () => {
			// update localStorage
			this.updateLocalStorage();
		});
	}
	// Handler to remove todo
	removeTodo(id) {
		// filter out the todo that has to be removed
		const list = this.state.data.filter(todo => {
			if (todo.id !== id)
				return todo;
		});
		// update state
		this.setState({
			data: list
		}, () => {
			// update localStorage
			this.updateLocalStorage();
		});
	}

	componentDidMount() {
		localStorage.clear();
		if (typeof(Storage) !== "undefined") {
			if(!localStorage.todos) {
				localStorage.todos = JSON.stringify(this.state.data);
			}
			if(!localStorage.count) {
				localStorage.count = 0;
			}

		} else {
			 console.log("%cApp will not remember todos created as LocalStorage Is Not Available",
							 "color: hotpink; background: #333; font-size: x-large;font-family: Courier;");
			window.id = 0;
		}
	}

	render() {
		return (
			<div>
				<Title />
				<Form addTodo={(val) => this.addTodo(val)} />
				<List todos={this.state.data} remove={(id) => this.removeTodo(id)} />
				<Footer />
			</div>
		);
	}
}
