'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var app = {
    title: 'Javascript expressions',
    subtitle: 'This is my subtitle'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Thomas',
    age: 30,
    location: 'Chicago'
};
var userName = 'Alex';
var userAge = 27;
var userLocation = 'Los Angeles';

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
