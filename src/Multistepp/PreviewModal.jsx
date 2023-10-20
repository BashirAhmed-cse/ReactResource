import React from 'react';
import { Button, Modal } from 'flowbite-react';
function PreviewModal({ formData, onClose }) {
    return (
        <>
        
        <Modal.Header>Small modal</Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => props.setOpenModal(undefined)}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
        
        </>
    );
}

export default PreviewModal;
