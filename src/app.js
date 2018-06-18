console.log('App.js is running!');

// JSX - JavaScript XML
var app = {
    title: 'Javascript expressions',
    subtitle: 'This is my subtitle'
};

var template = (
  <div>
    <h1>{app.title}</h1> 
    <p>{app.subtitle}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
  </div>
);

var user = {
    name: 'Thomas',
    age: 30,
    location: 'Chicago'
};
var userName = 'Alex';
var userAge = 27;
var userLocation = 'Los Angeles';

var templateTwo = (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);