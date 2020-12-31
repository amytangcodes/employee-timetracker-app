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
