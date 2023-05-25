# To-Do App

This is a simple to-do application built using React, HTML, CSS, and JavaScript. The app allows users to manage their tasks by adding, editing, and deleting them. Users can mark tasks as completed and filter tasks based on their completion status. The app utilizes local storage to persist user tasks and makes use of the Fetch API for retrieving data from the Todo API.

## Features

- Add new tasks: Users can add new tasks by filling out the form provided on the main page. The task will be displayed in the task list.
- Edit tasks: Users can edit existing tasks by clicking on the "Edit" button next to the task. This will take them to a separate page where they can modify the task details.
- Delete tasks: Users can delete tasks by clicking on the "Delete" button next to the task. A confirmation dialog will be displayed to ensure the user intends to delete the task.
- Mark tasks as completed: Users can mark tasks as completed by clicking on the checkbox next to the task. Completed tasks will be visually differentiated from incomplete tasks.
- Filter tasks: Users can filter tasks based on their completion status. Three filter options are available: "All Tasks" to display all tasks, "Incomplete Tasks" to display only tasks that are not completed, and "Completed Tasks" to display only completed tasks.
- Search functionality: Users can search for specific tasks using the search bar. The app will filter the tasks based on the search query in real-time.

## Technologies Used

- React: JavaScript library for building user interfaces.
- HTML: Markup language for creating the structure of the web pages.
- CSS: Stylesheet language for designing the visual presentation of the app.
- JavaScript: Programming language for implementing dynamic functionality.
- Fetch API: Browser API used to make HTTP requests to retrieve data from the Todo API.
- Local storage: Web storage mechanism used to persist user tasks on the client-side.
- GitHub: Version control system for tracking changes and collaborating with other developers.

## Setup and Usage

1. Clone the repository or download the source code.
2. Open the project in your preferred code editor.
3. Install the necessary dependencies by running the command `npm install` in the project directory.
4. Start the development server by running the command `npm start`.
5. Open your web browser and navigate to `http://localhost:3000` to access the to-do app.
6. Interact with the app by adding, editing, and deleting tasks. Use the provided filters and search bar to manage and find specific tasks.

## Deployment

The application can be deployed using Netlify or any other hosting platform of your choice. Here are the general steps for deploying on Netlify:

1. Create a new account on Netlify if you haven't already.
2. Connect your GitHub account to Netlify.
3. Create a new site from the Netlify dashboard.
4. Configure the deployment settings, including the repository and build commands.
5. Once configured, Netlify will automatically build and deploy your app whenever changes are pushed to the repository.

## Contribution

Contributions to this project are welcome. If you find any bugs or have suggestions for improvement, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. You can find more details in the [LICENSE](LICENSE) file.

## Acknowledgements

- Todo API for providing the data used in this application.
- React for the JavaScript library used in building the UI.
- Netlify for offering free hosting and deployment services.
