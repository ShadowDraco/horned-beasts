import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import beasts from './beasts.json'

import Container from 'react-bootstrap/Container'

import './App.css'

function App() {
	return (
		<Container fluid className='App'>
			<Header />
			<Main beasts={beasts} />
			<Footer />
		</Container>
	)
}
export default App
