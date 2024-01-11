<head>
    <title>Project README</title>
</head>
<body>

<h1>Project Title</h1>
<p>This is a user management application built with Angular. It utilizes Angular Material for the user interface and relies on a mock backend provided by json-server.</p>

<h2>Getting Started</h2>
<p>These instructions will guide you through setting up and running the application on your local machine for development and testing purposes.</p>

<h3>Prerequisites</h3>
<p>Before running this project, ensure you have the following installed:</p>
<ul>
    <li>Node.js</li>
    <li>npm (Node Package Manager)</li>
    <li>Angular CLI</li>
</ul>

<h3>Installation</h3>
<p>Follow these steps to set up the project environment:</p>

<h4>Step 1: Install Dependencies</h4>
<p>Run <code>npm install</code> in the project directory to install all the required dependencies.</p>
<pre><code>npm install</code></pre>

<h4>Step 2: Start the Angular Development Server</h4>
<p>Execute <code>ng serve</code> to start the Angular development server. This will compile the application and serve it usually at <a href="http://localhost:4200">http://localhost:4200</a>.</p>
<pre><code>ng serve</code></pre>
<p>Navigate to <a href="http://localhost:4200">http://localhost:4200</a> in your browser to view the application.</p>

<h4>Step 3: Run the Mock Backend Server</h4>
<p>To set up and run the mock backend server, execute the following command. This starts json-server on port 3001, watching changes to db.json.</p>
<pre><code>npx json-server --watch db.json --port 3001</code></pre>

<h3>Features</h3>
<ul>
    <li>CRUD operations for user data</li>
    <li>Reactive Forms for adding and editing user information</li>
    <li>Angular Material UI components</li>
    <li>Table display with sorting, filtering, and pagination</li>
    <li>Integration with json-server for a mock backend</li>
</ul>

<h3>Built With</h3>
<ul>
    <li><a href="https://angular.io/">Angular</a> - The web framework used</li>
    <li><a href="https://material.angular.io/">Angular Material</a> - Material Design components for Angular</li>
    <li><a href="https://github.com/typicode/json-server">json-server</a> - Full fake REST API for mock backend</li>
</ul>

<h3>Author</h3>
<p>Mārtiņš Muižnieks</p>

<h3>Acknowledgments</h3>
<ul>
    <li>Angular and Angular Material documentation</li>
    <li>json-server for providing an easy-to-use mock backend setup</li>
</ul>

</body>