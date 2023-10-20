import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import PreviewModal from './PreviewModal';
import { Stepper, Step } from "@material-tailwind/react";
import { HiOutlineExclamationCircle } from 'react-icons/hi';

function MultiStepForm() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: 'Account Setup',
            fields: [
                { name: 'email', type: 'email', required: true },
                { name: 'password', type: 'password', required: true },
                { name: 'confirmPassword', type: 'password', required: true },
            ],
        },
        {
            title: 'Social Profiles',
            fields: [
                { name: 'linkedin', type: 'text', required: false },
                { name: 'twitter', type: 'text', required: false },
                { name: 'facebook', type: 'text', required: false },
            ],
        },
        {
            title: 'Personal Details',
            fields: [
                { name: 'fullname', type: 'text', required: true },
                { name: 'mobile', type: 'text', required: true },
                { name: 'address', type: 'text', required: true },
            ],
        },
    ];

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        linkedin: '',
        twitter: '',
        facebook: '',
        fullname: '',
        mobile: '',
        address: '',
    });
    const [fieldErrors, setFieldErrors] = useState({
        email: '',
        password: '',
        linkedin: '',
        twitter: '',
        facebook: '',
        fullname: '',
        mobile: '',
        address: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    
        if (steps[activeStep].fields.find((field) => field.name === name).required) {
            setFieldErrors((prevErrors) => ({
                ...prevErrors,
                [name]: value.trim() === '' ? `${name} is required` : '',
            }));
        }
    };

      const handleNext = () => {
        const currentStepFields = steps[activeStep].fields;
        const hasErrors = currentStepFields.some((field) => {
            if (field.required && !formData[field.name]) {
                setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    [field.name]: `${field.name} is required`,
                }));
                return true;
            }
            return false;
        });
    
        // If there are errors, do not proceed to the next step
        if (hasErrors) {
            return;
        }
    
        // If there are no errors and it's not the last step, proceed to the next step
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
        }
    };
    

    const handlePrev = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    const submitForm = () => {
       
        console.log('Form submitted:', formData);
    };
    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };

    // const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

    // const previewForm = () => {
    //     setIsPreviewModalOpen(true);
    // };
    // const previewForm = () => {
    //     setOpenModal(true);
    // };

    // const closePreviewModal = () => {
    //     setOpenModal(false);
    // };
    // const closePreviewModal = () => {
    //     setIsPreviewModalOpen(false);
    // };


    return (
        <div>
            <h1 className="text-lg font-bold text-gray-700 leading-tight text-center mt-12 mb-5">
                Form Wizard - Multi Step Form
            </h1>
            <form className="max-w-2xl mx-auto p-12 bg-white rounded-lg border-2 border-gray-100 shadow-md mb-8">
                <div className="flex gap-3 mb-4 text-center text-xs form-header">
                    <Stepper activeStep={activeStep}>
                        {steps.map((step, index) => (
                            <Step key={index} onClick={() => setActiveStep(index)}>
                                {index + 1}
                            </Step>
                        ))}
                    </Stepper>
                </div>

                <div className="step">
                    <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">
                        {steps[activeStep].title}
                    </p>
                    {steps[activeStep].fields.map((field, index) => (
                        <div className="mb-6" key={index}>
                            <input
                                type={field.type}
                                placeholder={field.name.replace(/([A-Z])/g, ' $1')}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-2 border-gray-200"
                            />
                            {fieldErrors[field.name] && (
            <div className="text-red-500 text-xs mt-1">{fieldErrors[field.name]}</div>
        )}
                        </div>
                    ))}
                </div>

                <div className="flex gap-3 form-footer">
                    {activeStep > 0 && (
                        <button
                            type="button"
                            onClick={handlePrev}
                            className="flex-1 focus:outline-none border border-gray-300 py-2 px-5 rounded-lg shadow-sm text-center text-gray-700 bg-white hover:bg-gray-100 text-lg"
                        >
                            Previous
                        </button>
                    )}
                    {activeStep < steps.length - 1 ? (
                        <button
                            type="button"
                            onClick={handleNext}
                            className="flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-blue-600 hover:bg-blue-700 text-lg"
                        >
                            Next
                        </button>
                    ) : (
                        <div className='flex gap-4'>
                            <button
                type="button"
                onClick={() => props.setOpenModal('pop-up')}
                className="flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-blue-600 hover:bg-blue-700 text-lg"
            >
                Preview
            </button>
                        <button
                            type="button"
                            onClick={submitForm}
                            className="flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-blue-600 hover:bg-blue-700 text-lg"
                        >
                            Submit
                        </button>
                        </div>
                    )}
                   {openModal && (
                    
                <Modal show={props.openModal === 'pop-up'} size="md" popup onClose={() => props.setOpenModal(undefined)}
                >
                  <PreviewModal formData={formData} />
                </Modal>
                
            )}
                </div>
            </form>
        </div>
    );
}

export default MultiStepForm;
