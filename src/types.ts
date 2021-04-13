type Todo =  {
	id: number,
	title: string,
	description: string,
	completed: boolean
}

export interface TodoProps {
	title: string,
	description: string,
	completed: boolean
}

// export default TodoProps;
export default Todo;