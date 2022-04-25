import './Input.css';

import { React } from 'react'


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    // const [value, setValue] = useState('');

    function setValueInput(e) {
        // setValue(e.target.value);
        props.enviarDados(e.target.value);
    }
    return (
        <>
            <p className="txt-input">{props.txt}</p>
            <input className="input" placeholder={props.placeholder} onChange={setValueInput} value={props.value}/>
        </>
    )
}

