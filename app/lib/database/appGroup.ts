import { NativeModules } from 'react-native';

import { isIOS } from '../methods/helpers/deviceInfo';

const { AppGroup } = NativeModules;

const appGroup: { path: string } = {
	path: isIOS ? AppGroup.path : ''
};

export default appGroup;