 import PropTypes from 'prop-types';
 import css from './Filter.module.css'
 import { nanoid } from 'nanoid';


export default function Filter ({ value, onChange}) {
    let inputFilter = nanoid();
    return (
      <div className={css.container}>
         <p>
         Find contacts by name
        </p>
         <input
             id={inputFilter}
        type="text"
        value={value}
        onChange={onChange}
      />
        </div>
    )
  }
  Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  };