Udemy course: React & TypeScript - The Practical Guide
https://github.com/academind/react-typescript-course-resources

My GitHub: git@github.com:nirgluzman/React-TypeScript-Basic.git


React crash course
https://www.youtube.com/watch?v=4baq00tHfmA


React with Vite, https://vitejs.dev/guide/
npm create vite@latest react-ts-basic


TypeScript - tsconfig.json
(*) Strict Mode, https://dev.to/jsdev/strict-mode-typescript-j8p


------------------------
TypeScript syntax
------------------------

Discriminated Unions:
enables the creation of a type that can represent several different possibilities or variants.
https://dev.to/darkmavis1980/what-are-typescript-discriminated-unions-5hbb



FormData - to construct a set of key/value pairs representing form fields and their values.
https://dev.to/deciduously/formdata-in-typescript-24cl

function handleSubmit(event: FormEvent<HTMLFormElement>) {
	event.preventDefault();

	const formData = new FormData(event.currentTarget); // key/value pairs representing form fields and their values.
	console.log(formData.get('goal'), formData.get('summary'));
}


e.preventDefault() 
-> to cancel the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

The default behavior depends on the event type. Some examples:
* When used in a form submit event handler, it prevents the form from being submitted to the server.
* When used in a click event handler for an anchor (<a>) element, it prevents the default navigation to the linked URL.
* When used in a keypress event handler for a text input, it prevents the default character input.
* When used in a contextmenu event handler, it prevents the browser's default context menu from appearing.
* When used in a dragover or drop event handler, it prevents the default behavior for drag-and-drop operations (depending on the used browser).

These are just a few examples, and the specific default actions depend on the event type. 
When event.preventDefault() is called, it stops the browser from performing its default action for that event, 
giving you the opportunity to handle the event in a custom way.

All this is not specific to Reat or TypeScript.
