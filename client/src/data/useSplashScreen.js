import { useEffect, useState } from 'react'
import Splash from '../components/Splash';

export const useSplashScreen = () => {
	const SPLASH_ANIMATION_DURATION = 16 * 1000
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		// Check if the splash screen ever initiated before this

		// If the splash screen had initiated before, local storage should save the splash state as true.
		// Therefore, no more splash screen initiated through this session.
		if (window.sessionStorage.getItem('splash') !== null) {
			setVisible(JSON.parse(window.sessionStorage.getItem('splash')));
		} else {
			setVisible(false)
			window.sessionStorage.setItem('splash', false);
		}

		// initiate splash screen
		if (visible === false) {
			setTimeout(() => {
				setVisible(true);
				window.sessionStorage.setItem('splash', true);
			}, SPLASH_ANIMATION_DURATION)
		}

	}, []);
  return {visible, Splash}
}
