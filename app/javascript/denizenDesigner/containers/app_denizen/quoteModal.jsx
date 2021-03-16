// import React, { useEffect, useState, Component } from 'react';
// import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { connect, useSelector } from 'react-redux';
// import { Row, Col, Card, Container, Modal, Button } from 'react-bootstrap';

// const quoteModal = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div>
//       <div>
//         <Button variant='primary' onClick={handleShow}>
//           Launch demo modal
//         </Button>

//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant='secondary' onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant='primary' onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default quoteModal;
