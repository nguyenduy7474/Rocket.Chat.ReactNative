// import { Linking } from 'react-native';
// import parse from 'url-parse';

// import { themes } from '../lib/constants';
// import { TSupportedThemes } from '../theme';
import Navigation from '../lib/navigation/appNavigation';
// import UserPreferences from '../lib/methods/userPreferences';

export const DEFAULT_BROWSER_KEY = 'DEFAULT_BROWSER_KEY';

/* const scheme = {
	chrome: 'googlechrome:',
	chromeSecure: 'googlechromes:',
	firefox: 'firefox:',
	brave: 'brave:'
}; */

/* const appSchemeURL = (url: string, browser: string): string => {
	let schemeUrl = url;
	const parsedUrl = parse(url, true);
	const { protocol } = parsedUrl;
	const isSecure = ['https:'].includes(protocol);

	if (browser === 'googlechrome') {
		if (!isSecure) {
			schemeUrl = url.replace(protocol, scheme.chrome);
		} else {
			schemeUrl = url.replace(protocol, scheme.chromeSecure);
		}
	} else if (browser === 'firefox') {
		schemeUrl = `${scheme.firefox}//open-url?url=${url}`;
	} else if (browser === 'brave') {
		schemeUrl = `${scheme.brave}//open-url?url=${url}`;
	}

	return schemeUrl;
}; */
// const openLink = async (url: string, theme: TSupportedThemes = 'light'): Promise<void> => {
const openLink = (url: string) => {
	try {
		Navigation.navigate('OutsideStack', { screen: 'AuthenticationWebView', params: { url, authType: 'Oshima WebView' } }); // mobile
		Navigation.navigate('ModalStackNavigator', { screen: 'AuthenticationWebView', params: { url, authType: 'My task' } }); // table
		/* const browser = UserPreferences.getString(DEFAULT_BROWSER_KEY);
		await WebBrowser.openBrowserAsync(url, {
			toolbarColor: themes[theme].headerBackground,
			controlsColor: themes[theme].headerTintColor,
			// https://github.com/expo/expo/pull/4923
			enableBarCollapsing: true,
			showTitle: true
		});
		if (browser === 'inApp') {
			await WebBrowser.openBrowserAsync(url, {
				toolbarColor: themes[theme].headerBackground,
				controlsColor: themes[theme].headerTintColor,
				// https://github.com/expo/expo/pull/4923
				enableBarCollapsing: true,
				showTitle: true
			});
		} else {
			const schemeUrl = appSchemeURL(url, browser!.replace(':', ''));
			await Linking.openURL(schemeUrl);
		} */
	} catch (err) {
		try {
			// await Linking.openURL(url);
		} catch {
			// do nothing
		}
	}
};

export default openLink;
