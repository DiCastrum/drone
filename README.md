# Documentation

## Stack

- Next.js 13 - I decided to use Next because is a good framework to create web apps that use react, I have used Next on the past, version 13 introduce some main alterations that I used to create this app.
- Tailwind - For CSS i used Tailwind, that is a fast easy way to do styles. For this app, because is small, I do not use custom Tailwind that can enhance even more the experience. For example using custom tailwind to give primary/secondary colors will make easier to get the color and keep the app uniform.
- Typescript - Using Typescript reduce typing errors, give you visual about the options and what to use, for example, what types is used on params on a specific function.
- Zod - Zod works very well with Typescript and expand it, very useful to type check information from fetch or client input.
- PapaParse - Toll to parse the CSV file.
- Jest - Good library for uni tests
- Headless UI - Easy way to build Dropdown list, Comboboxes, Transitions.

## Features

- On the first page the worker can choose if he want to get Density/Restriction, this will take him to a List Menu with all Drones.
- On the List Page, there are a pagination to be more visual attractive and easier to navigate to all drones. There are a search bar with all drones that can be search by Drone Name. This will return only Drones with that name.
- Choosing a drone will take to a page where is all data for the chosen Location. There is a button to bring back to the Search List.
- On the Navbar there are a Home link that brings to the initial page to start a new search.
- The App is responsive.

## Thoughts

- On the Navbar is possible to add more links, and maybe add hamburger menu to mobile.
- Add Sign in/Sign out option.
- Add more Search Options to the Menu.

## Bugs

- There are an bug on the Next.js 13, when click on button, like the submit on search button, the page is scroll to the top. There are a bug ticket open on Next.js github for this.
