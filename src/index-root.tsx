import * as React from 'react';
import {
	View,
	Text,
} from 'react-native';

interface State {
	word: string,
	age: number,
}

class App extends React.Component<{}, State> {
	constructor(props) {
		super(props);
		this.state = {
			word: 'hello',
			age: 24,
		}
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>{ this.state.word }</Text>
				<Text>{ this.state.age }</Text>
			</View>
		)
	}
}

// Export file for use in other files
// Other files must import App from './build/index-root';
// Must export/import the build file because ios file is the file used to build the app
export default App;
