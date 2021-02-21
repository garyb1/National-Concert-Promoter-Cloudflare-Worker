export default `
    *, *:before, *:after {
	box-sizing: border-box;
}

body {
	background-colour: #FFFCFA;
	font-family: tahoma, sans-serif;
	border-left: 30px solid #F38020;
	margin: 0;
	min-height: 100vh;
	font-size: 16px;
}

.flow > * + * {
	margin-top: 2rem;
}

h1 {
	font-weight: bold;
	font-size: 2.25rem;
}

h2 {
	font-size: 1.3rem;
}

h1, span {
	text-transform: capitalize;
}

span {
	font-weight: bold;
}

main, footer {
	max-width: 800px;
	margin: 0 auto;
    padding: 2rem 3rem;
}

main {
    min-height: 75vh;
}

[role="list"] {
    padding-left: 0;
}

.locations {
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
}

.locations li {
	text-transform: uppercase;
	letter-spacing: 2px;
	padding: 1rem;
	background: #111827;
	color: #fff;
	border-left: 15px solid #FAAE40;
}

p {
	font-weight: 400;
	line-height: 1.5;
	max-width: 65ch;
}

.footer ul {
	display: flex;
}

.footer li + li {
	margin-left: 1rem;
	margin-top: -1.55rem;
}
`