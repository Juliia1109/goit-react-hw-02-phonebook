import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export default function ContactList({ contacts, deleteContacts }) {
  return (
    <ul className={css.list}>
    {contacts.map(contact=>
    (<li  key = {contact.id}>
    <span>
            {contact.name}: <span className={css.span}>{contact.number}</span>
    </span>
     <button
     type="button"
     onClick={()=> deleteContacts(contact.id) }
     className={css.button}
     >
      Delete
     </button>
        </li>
        ))}
</ul>
  )
}

ContactList.propTypes={
contacts: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
}).isRequired,
).isRequired,
deleteContacts: PropTypes.func.isRequired,
};


