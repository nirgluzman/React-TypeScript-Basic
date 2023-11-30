Udemy course: React & TypeScript - The Practical Guide
https://github.com/academind/react-typescript-course-resources

My GitHub: git@github.com:nirgluzman/React-TypeScript-Basic.git


React crash course
https://www.youtube.com/watch?v=4baq00tHfmA


React with Vite, https://vitejs.dev/guide/
npm create vite@latest react-ts-basic


TypeScript:
(*) Strict Mode, https://dev.to/jsdev/strict-mode-typescript-j8p


FormData - to construct a set of key/value pairs representing form fields and their values.
https://dev.to/deciduously/formdata-in-typescript-24cl

function handleSubmit(event: FormEvent<HTMLFormElement>) {
	event.preventDefault();

	const formData = new FormData(event.currentTarget); // key/value pairs representing form fields and their values.
	console.log(formData.get('goal'), formData.get('summary'));
}
