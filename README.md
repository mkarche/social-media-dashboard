# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- Cleaning Default React App files
- Structuring the document
- Setting up the gh pages deployment
- Defining CSS variables (in root index CSS file)
- Creating utilities functions (responsive)
- Sketching and Organizing the design
- Creating and Styling components (for mobile: mobile first approach)
- Structuring and Styling the page (for mobile: mobile first approach)
- Populating Themes dark mode and light mode using React Context and Styled components theming Context Provider
- Creating Grids layout (for mobile: mobile first approach)
- Creating Responsive Layout (for Tablet and Desktop)
- Creating JSON Data to populate contents
- Deploying the Project on Github pages

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

#### Usage of Grids

I Learned how to use grid for layout and responsiveness

#### Usage of SVG image

I learned how to import and resize SVG images.

```js
import { ReactComponent as TwitterIcon } from "../../images/icon-twitter.svg";
<TwitterIcon width={20} height={20} fill="orange" />;
```

#### Creating card borders with linear-gradient color.

I learned how to create a box borders with linear-gradient color.
By overlapping two div:

- one outter div with the linear-gradient background and a relative position with a padding
- one inner div

Example of Code as below:

```html
<div class="border-wrap">
	<div class="wrapper">Content</div>
</div>
```

```css
.border-wrap {
	position: relative;
	padding-top: 0.3rem;
	border-radius: 5px;
	background: linear-gradient(
		to right,
		hsl(37, 97%, 70%) 0%,
		hsl(329, 70%, 58%) 100%
	);
}

.wrapper {
	background: gray;
}
```

#### Creating a Toggle Switch Button

I learned how to create a customized Toggle Switch Button.

NB: It was very challenging to create the Toggle Switch button, I tried with AntDesign and Material UI components, but found limitations for customizing components; So I end up creating my own Toggle Switch button based on some google research.

```jsx
<CheckBoxWrapper>
	<CheckBox
		id="checkbox"
		type="checkbox"
		checked={darkMode}
		onChange={() => {
			setDarkMode(!darkMode);
		}}
	/>
	<CheckBoxLabel htmlFor="checkbox" />
</CheckBoxWrapper>
```

```js styled component
export const CheckBoxWrapper = styled.div`
	position: relative;
`;

export const CheckBoxLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 42px;
	height: 26px;
	border-radius: 15px;
	background: var(--light-theme);
	cursor: pointer;
	&::after {
		content: "";
		display: block;
		border-radius: 50%;
		width: 18px;
		height: 18px;
		margin: 3px;
		background: var(--light-theme-bg-white);
		box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
		transition: 0.2s;
	}
`;

export const CheckBox = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	width: 42px;
	height: 26px;
	&:checked + ${CheckBoxLabel} {
		background: var(--dark-theme);
		&::after {
			content: "";
			display: block;
			border-radius: 50%;
			width: 18px;
			height: 18px;
			margin-left: 21px;
			background: var(--dark-theme-bg-dark-blue);
			transition: 0.2s;
		}
	}
`;
```

#### Using Theming with Styled Components

I learned How to use Theme with Styled Components to ease the population of theming styles through all the styled components

```jsx
const theme = {
	darkMode: darkMode,
	setDarkMode: setDarkMode,
};

return (
	<ThemeProvider theme={theme}>
		<Container>
			<Heading>
				<Title>Social Media Dashboard</Title>
				<Subtitle>Total Followers: 23,004</Subtitle>
			</Heading>
			..... ....
		</Container>
	</ThemeProvider>
);
```

```js styled component
export const Title = styled.h1`
	margin: 0;
	color: ${({ theme }) =>
		theme.darkMode
			? "var(--dark-theme-color-text-white)"
			: "var(--light-theme-color-text-dark-blue)"};
`;
```

### Continued development

For future projects I plan to focus on TypeScript and using CSS variables in JS styled components ($variable) instead of defining variables in css file (then using var(--css-variable))

### Useful resources

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Author

- Website - [Med Karche]
- Frontend Mentor - [@mkarche](https://www.frontendmentor.io/profile/mkarche)
- Twitter - [@mohamedkarche](https://www.twitter.com/mohamedkarche)

## Acknowledgments

Thanks to FrontEnd Mentor for this Challenge
