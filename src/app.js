console.log('App.js is running!');

// JSX - JavaScript XML
// logical and operator 

var app = {
    title: 'Javascript expressions',
    subtitle: 'This is my subtitle',
    options: ['One', 'Two'],
};

var template = (
  <div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
  </div>
);

var user = {
    name: 'Brian',
    age: 28,
    location: 'Hawaii'
};
var userName = 'Alex';
var userAge = 27;
var userLocation = 'Los Angeles';

function getLocation(location) { 
    if (location) {
        return <p>Location: {location}</p>;
    } 
}

var templateTwo = (
    <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);