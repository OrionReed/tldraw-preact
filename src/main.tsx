import { render } from 'preact';
import './style.css';
import "@tldraw/tldraw/tldraw.css";
import { Tldraw } from '@tldraw/tldraw';

export function App() {
	return (
		<div className="tldraw__editor">
			<Tldraw />
		</div>
	);
}

render(<App />, document.getElementById('app'));