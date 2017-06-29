import React from 'react';

const LogoutModal = ({ auth, userLogout, toggleModal }) => {
  return (
    <section className="modal-wrapper">
      <h2 className="modal-header">Turing Overflow</h2>
      <h4 className="modal-question">Are you sure you want to log out?</h4>
      <div>
        <button onClick={ () => { auth.logout(); userLogout({}); toggleModal(); }}>Log Out</button>
        <button onClick={ () => toggleModal() }>Stay logged in</button>
      </div>
    </section>
  );
};

export default LogoutModal;
