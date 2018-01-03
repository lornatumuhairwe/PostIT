[![Build Status](https://travis-ci.org/lornatumuhairwe/PostIT.svg?branch=api-testing)](https://travis-ci.org/lornatumuhairwe/PostIT)
[![Coverage Status](https://coveralls.io/repos/github/lornatumuhairwe/PostIT/badge.svg?branch=master)](https://coveralls.io/github/lornatumuhairwe/PostIT?branch=master)
# PostIt

PostIt is a simple application that allows friends and colleagues create groups for notifications. This way one person can post notifications to everyone by sending a message once. The application allows people create accounts, create groups and add registered users to the groups, and then send messages out to these groups whenever they want.

This repo contains both the front-end and the back-end that are implemented in the `client` and `server` directories respectively. 

The front end is built using react and redux and it consumes the API from the backend that is built with Node.js (express framework). The table below shows the endpoints that are implemented in the backend.

| Endpoint                                | Functionality                   |
|:---------------------------------------:|:-------------------------------:|
| [POST /api/user/signup](#)              | User signup                     |
| [POST /api/user/signin](#)              | User signin                     |
| [POST /api/group](#)                    | Create broadcast groups         |
| [GET /api/groups](#)                    | Get users broadcast groups      |
| [POST /api/group/<group_id>/user](#)    | add other users to groups       |
| [POST /api/group/<group_id>/message](#) | post messages to created groups |
| [GET /api/group/<group_id>/messages](#) | Create broadcast groups         |

## Requirements

- [Node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Postgresql](https://www.postgresql.org/)

## Installation

1. Clone this repository using: 

```
$ git clone https://github.com/lornatumuhairwe/PostIT.git
```

2. Change directory to the project directory
```$xslt
$ cd PostIt
```

3. Install the project dependencies
```$xslt
$ npm install
```

4. Run application
```$xslt
$ npm start
```

### Tests
Run tests with:
```$xslt
$ npm test
```
