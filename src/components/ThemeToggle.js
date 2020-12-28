import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as MoonIcon } from '../assets/icons/moon.svg'
import { ReactComponent as SunIcon } from '../assets/icons/sun.svg'

const ToggleContainer = styled.button`
	position: absolute;
	top: 1.8rem;
	right: 24rem;
	display: flex;
	justify-content: space-between;
	background: ${({ theme }) => theme.gradient};
	width: 5rem;
	height: 2.5rem;
	border-radius: 30px;
	border: 2px solid #fff;
	font-size: 0.5rem;
	padding: 0.2rem;
	overflow: hidden;
	outline: none;
	cursor: pointer;
	svg {
		width: 2.5rem;
		height: auto;
		transition: all 0.3s linear;
		&:first-child {
			transform: ${({ lightTheme }) =>
				lightTheme ? 'translateY(0)' : 'translateY(100px)'};
		}
		&:nth-child(2) {
			transform: ${({ lightTheme }) =>
				lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
		}
	}
	@media screen and (max-width: 768px) {
		position: inherit;
	}
`

const ThemeToggle = ({ theme, toggleTheme, libraryStatus }) => {
	const isLight = theme === 'light'

	return libraryStatus ? (
		''
	) : (
		<ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
			<SunIcon />
			<MoonIcon />
		</ToggleContainer>
	)
}

ThemeToggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
}

export default ThemeToggle
