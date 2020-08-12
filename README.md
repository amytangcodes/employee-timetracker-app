# Introduction

This is a repository for an employee time tracker application using Ruby on Rails and ReactJS.

## Table of Contents

- [Description](#description)
- [Approach](#approach)
- [Installation](#installation)
- [Other Available Scripts](#other-available-scripts)

## Description

The app should be a clock-in/out screen that will:

- Allow a user to enter their name or log in
- Allow the user to clock either in or out
- Upon clock event, store this information
- Provide a list of all clock events with logged information

Additional considerations:

- A teacher may need to clock in/out multiple times a day (e.g., for lunch)
- A clock event may need to be edited or deleted
- Are there any validations or UI constraints.

## Approach

**How did you approach this challenge?**
**What schema design did you choose and why?**

Architected the layout for the project on paper.
Started up a Trello board to loosely write out steps/ tickets.
Figured out what information I required to log each work schedule

- start of the shift
- end of shift
- duration of breaks
- duration of whole shift minus time spent on breaks

**If you were given another day to work on this, how would you spend it? What if you were given a month?**

- Continue working on creating new log, hook up edit log data, and delete log
- Format clock and date
- Add user profile section - User profile controller
- Maybe go through [this](https://blog.heroku.com/a-rock-solid-modern-web-stack) to better understand deploying to heroku
- Define user page permissions - different access between Admin, teacher, parents
- Write tests

All proposed features, code tasks, and retro notes found here [Trello Notes](https://trello.com/c/5s8QGfAP)

## Installation

Clone the repository

```bash
git clone git@github.com:amytangcodes/employee-timetracker-app.git
```

Install Dependencies

```bash
npm install
bundle install
```

To build up the database:

```bash
rails db:create db:migrate db:seed
```

Can rerun `rails db:seed` to generate more dummy data to test out delete function

Run the server:

```bash
rails s
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Projects

All project stylings done with Semantic-UI.
