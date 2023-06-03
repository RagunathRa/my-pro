
// // import React, { useState, useEffect } from 'react';
// // import { DataTable } from 'primereact/datatable';
// // import { Column } from 'primereact/column';
// // import { Button } from 'primereact/button';
// // // import { InputText } from 'primereact/inputtext';
// // import { Calendar } from 'primereact/calendar';
// // import { Formik, Field, Form, ErrorMessage } from 'formik';
// // import Modal from 'react-modal';
// // import EditNoteIcon from '@mui/icons-material/EditNote';
// // import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// // // import {  Checkbox, Form, Input } from 'antd';
// // // theme
// // import 'primereact/resources/themes/lara-light-indigo/theme.css';

// // // core
// // import 'primereact/resources/primereact.min.css';
  
// // import { useFormik } from 'formik';
// // import * as Yup from 'yup';

// // const validationSchema = Yup.object({
// //   name: Yup.string().required('Name is required'),
// //   mobile: Yup.string().required('Mobile is required'),
// //   expiry: Yup.date().required('Expiry date is required'),
// //   domain: Yup.string().required('Domain is required'),
// //   amount: Yup.number().required('Amount is required'),
// //   nextCall: Yup.date().required('Next call date is required'),
// //   action: Yup.string().required('Action is required'),
// // });



// // export default function Payments() {


// //     const ProductService = [
// //         {
// //             id: '1',
// //             name: 'sujith',
// //             mobile: '9056095182',
// //             expiry: '2023-06-02',
// //             domain: 'sujithr@god.com',
// //             amount: 7,
// //             nextCall: '2023-05-30',
// //             action: '',
// //         },
// //         {
// //             id: '2',
// //             name: 'amirtha',
// //             mobile: '7056095182',
// //             expiry: '2023-05-31',
// //             domain: 'amirthas@logo.com',
// //             amount: 766,
// //             nextCall: '2023-09-18',
// //             action: '',
// //         },
// //         {
// //             id: '3',
// //             name: 'Kannan',
// //             mobile: '0056095182',
// //             expiry: '2023-05-29',
// //             domain: 'chennai@host.in',
// //             amount: 3,
// //             nextCall: '2023-05-29',
// //             action: '',
// //         }];

// //     const initialValues = {
// //         name: '',
// //         mobile: '',
// //         expiry: '',
// //         domain: '',
// //         amount: '',
// //         nextCall: '',
// //         action: '',
// //     };

// //     const [products, setProducts] = useState([]);
// //     const [isModalOpen, setIsModalOpen] = useState(false);
// //     const [formData, setFormData] = useState(initialValues);
// //     const [selectedRow, setSelectedRow] = useState(null);

// //     useEffect(() => {
// //         setProducts(ProductService);
// //     }, []);

// //     // const handleAdd = () => {
// //     //   const newProduct = { ...formData, id: (products.length + 1).toString() };
// //     //   setProducts([...products, newProduct]);
// //     //   setFormData(initialFormState);
// //     //   setIsModalOpen(false);
// //     //   console.log(formData);
// //     // };

// //     const overlayStyle = {
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         // backgroundColor: 'rgba(0, 0, 0, 0.3)',
// //         position: 'fixed',
// //         top: 70,
// //         bottom: 20,
// //         left: 330,
// //         right: 150,
// //         borderRadius: '6px',
// //         boxShadow: '3px 2px 2px 2px rgba(0, 0, 0, 0.3)',
// //         width: '500px'
// //     };

// //     const contentStyle = {
// //         backgroundColor: 'white',
// //         // padding: '10px',
// //         borderRadius: '6px',
// //     };

// //     const handleDelete = (rowData) => {
// //         const updatedProducts = products.filter((product) => product.id !== rowData.id);
// //         setProducts(updatedProducts);
// //     };

// //     const handleEdit = (rowData) => {
// //         setSelectedRow(rowData);
// //         setFormData(rowData); // Populate the form data with the selected row data
// //         setIsModalOpen(true);
// //     };


// //     const handledIcons = (rowData) => {
// //         return (
// //             <div>
// //                 <EditNoteIcon onClick={() => handleEdit(rowData)} />
// //                 <DeleteOutlineIcon onClick={() => handleDelete(rowData)} />
// //             </div>
// //         );
// //     };
// //     const handleSubmit = (values, { resetForm }) => {
// //       setFormData((prevData) => [...prevData, values]);
// //       resetForm();
// //     };

// //     const handleAdd = () => {


// //         // const formik = useFormik({
// //         //     initialValues: initialValues,
// //         //     validationSchema,
// //         //     onSubmit: (values) => {
// //         //         // Handle form submission

// //         const handleAdd = () => {

// //                 if (selectedRow) {
// //                     // Update existing row
// //                     const updatedProducts = products.map((product) =>
// //                         product.id === selectedRow.id ? formData : product
// //                     );
// //                     setProducts(updatedProducts);
// //                 } else {
// //                     // Add new row
// //                     // const newProduct = {
// //                     //   id: generateId(), // generate a unique ID
// //                     //   ...formData,}
// //                     const newProduct = { ...formData, id: (products.length + 1).toString() };
     
// //                     setProducts([...products, newProduct]);
// //                 }
  
// //                 closeModal();
// //                 setFormData({
// //                     // Reset the form data
// //                     name: '',
// //                     mobile: '',
// //                     expiry: '',
// //                     domain: '',
// //                     amount: '',
// //                     nextCall: '',
// //                     action: '',
// //                 });
// //                 setSelectedRow(null);

// //                 console.log(values);
// //                 closeModal();
// //             },
// //         });

// //         const handleInputChange = (e) => {
// //             const { name, value } = e.target;
// //             setFormData({ ...formData, [name]: value });
// //         };

// //         const handleDateChange = (name, value) => {
// //             setFormData((prevFormData) => ({
// //                 ...prevFormData,
// //                 [name]: value ? value.toISOString().split('T')[0] : '',
// //             }));
// //         };

// //         const openModal = () => {
// //             setIsModalOpen(true);
// //         };

// //         const closeModal = () => {
// //             setIsModalOpen(false);
// //             setFormData(initialFormState);
// //             formik.resetForm();
// //         };

// //         return (
// //             < div className='card'>
// //                 <Button onClick={openModal}>Open Modal</Button >
                
// //                 <DataTable value={products} stripedRows rows={4} tableStyle={{ minWidth: '50rem' }}>
// //                     <Column field="id" header="S.No" style={{ width: '10%' }}></Column>
// //                     <Column field="name" header="Name" style={{ width: '15%' }}></Column>
// //                     <Column field="mobile" header="Mobile" style={{ width: '15%' }}></Column>
// //                     <Column field="domain" header="Domain" style={{ width: '15%' }}></Column>
// //                     <Column field="expiry" header="Expiry" body={(rowData) => {
// //                         const dateParts = rowData.nextCall.split('-');
// //                         const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
// //                         return <span>{formattedDate}</span>;
// //                     }} style={{ width: '15%' }}></Column>
// //                     <Column field="amount" header="Amount" body={(rowData) => (
// //                         <span>
// //                             {rowData.amount.toLocaleString('en-IN', {
// //                                 style: 'currency',
// //                                 currency: 'INR',
// //                             })}
// //                         </span>
// //                     )} style={{ width: '15%' }}></Column>
        
// //                     <Column field="nextCall" header="NextCall" body={(rowData) => {
// //                         const dateParts = rowData.nextCall.split('-');
// //                         const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
// //                         return <span>{formattedDate}</span>;
// //                     }} style={{ width: '15%' }}></Column>
// //                     <Column field="action" header="Action" body={(rowData) => handledIcons(rowData)} style={{ width: '15%' }}></Column>
// //                 </DataTable>


// //                 <Modal
// //                     isOpen={isModalOpen}
// //                     onRequestClose={closeModal}
// //                     contentLabel="Modal"
// //                     style={{
// //                         overlay: overlayStyle,
// //                         content: contentStyle,
// //                     }}
// //                 >
// //                     <Formik
// //                         initialValues={initialValues}
// //                         validationSchema={validationSchema}
// //                         onSubmit={handleSubmit}
// //                     >
// //                         <Form>
// //                             <div>
// //                                 <label htmlFor="name">Name:</label>
// //                                 <Field
// //                                     type="text"
// //                                     id="name"
// //                                     name="name"
// //                                     onChange={handleInputChange}
// //                                 />
// //                                 <ErrorMessage name="name" component="div" className="error" />
// //                             </div>

// //                             <div>
// //                                 <label htmlFor="mobile">Mobile:</label>
// //                                 <Field
// //                                     type="text"
// //                                     id="mobile"
// //                                     name="mobile"
// //                                     onChange={handleInputChange}
// //                                 />
// //                                 <ErrorMessage name="mobile" component="div" className="error" />
// //                             </div>

// //                             <div>
// //                                 <label htmlFor="expiry">Expiry:</label>
// //                                 <Field
// //                                     type="text"
// //                                     id="expiry"
// //                                     name="expiry"
// //                                     onChange={(e) => handleDateChange('expiry', e.value)}
// //                                 />
// //                                 <ErrorMessage name="expiry" component="div" className="error" />
// //                             </div>

// //                             <div>
// //                                 <label htmlFor="domain">Domain:</label>
// //                                 <Field
// //                                     type="text"
// //                                     id="domain"
// //                                     name="domain"
// //                                     onChange={handleInputChange}
// //                                 />
// //                                 <ErrorMessage name="domain" component="div" className="error" />
// //                             </div>

// //                             <div>
// //                                 <label htmlFor="amount">Amount:</label>
// //                                 <Field
// //                                     type="text"
// //                                     id="amount"
// //                                     name="amount"
// //                                     onChange={handleInputChange}
// //                                 />
// //                                 <ErrorMessage name="amount" component="div" className="error" />
// //                             </div>

// //                             <div>
// //                                 <label htmlFor="nextCall">Next Call:</label>
// //                                 <Field
// //                                     type="text"
// //                                     id="nextCall"
// //                                     name="nextCall"
// //                                     onChange={(e) => handleDateChange('nextCall', e.value)}
// //                                 />
// //                                 <ErrorMessage name="nextCall" component="div" className="error" />
// //                             </div>

// //                             <div>
// //                                 <label htmlFor="action">Action:</label>
// //                                 <Field type="text" id="action" name="action" />
// //                                 <ErrorMessage name="action" component="div" className="error" />
// //                             </div>

// //                             <button type="submit">Submit</button>
// //                             <button type="button" onClick={closeModal}>
// //                                 Cancel
// //                             </button>
// //                         </Form>
// //                     </Formik>

// //                 </Modal>
// //             </div>
    
// //         );
// //     }
// // }

// import React, { useState, useEffect } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { Button } from 'primereact/button';
// import { Calendar } from 'primereact/calendar';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import Modal from 'react-modal';
// import EditNoteIcon from '@mui/icons-material/EditNote';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/primereact.min.css';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { InputText } from 'primereact/inputtext';

// const validationSchema = Yup.object({
//   name: Yup.string().required('Name is required'),
//   mobile: Yup.string().required('Mobile is required'),
//   expiry: Yup.date().required('Expiry date is required'),
//   domain: Yup.string().required('Domain is required'),
//   amount: Yup.number().required('Amount is required'),
//   nextCall: Yup.date().required('Next call date is required'),
//   action: Yup.string().required('Action is required'),
// });

// export default function Payments() {
//   const ProductService = [
//     {
//       id: '1',
//       name: 'sujith',
//       mobile: '9056095182',
//       expiry: '2023-06-02',
//       domain: 'sujithr@god.com',
//       amount: 7,
//       nextCall: '2023-05-30',
//       action: '',
//     },
//     {
//       id: '2',
//       name: 'amirtha',
//       mobile: '7056095182',
//       expiry: '2023-05-31',
//       domain: 'amirthas@logo.com',
//       amount: 766,
//       nextCall: '2023-09-18',
//       action: '',
//     },
//     {
//       id: '3',
//       name: 'Kannan',
//       mobile: '0056095182',
//       expiry: '2023-05-29',
//       domain: 'chennai@host.in',
//       amount: 3,
//       nextCall: '2023-05-29',
//       action: '',
//     },
//   ];

//   const initialValues = {
//     name: '',
//     mobile: '',
//     expiry: '',
//     domain: '',
//     amount: '',
//     nextCall: '',
//     action: '',
//   };

//   const [products, setProducts] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState(initialValues);
//   const [selectedRow, setSelectedRow] = useState(null);

//   useEffect(() => {
//     setProducts(ProductService);
//   }, []);

//   const handleDelete = (rowData) => {
//     const updatedProducts = products.filter((product) => product.id !== rowData.id);
//     setProducts(updatedProducts);
//   };

//   const handleEdit = (rowData) => {
//     setSelectedRow(rowData);
//     setFormData(rowData); // Populate the form data with the selected row data
//     setIsModalOpen(true);
//   };

//   const handledIcons = (rowData) => {
//     return (
//       <div>
//         <EditNoteIcon onClick={() => handleEdit(rowData)} />
//         <DeleteOutlineIcon onClick={() => handleDelete(rowData)} />
//       </div>
//     );
//   };

//   const handleSubmit = (values, { resetForm }) => {
//     if (selectedRow) {
//       // Update existing row
//       const updatedProducts = products.map((product) =>
//         product.id === selectedRow.id ? values : product
//       );
//       setProducts(updatedProducts);
//     } else {
//       // Add new row
//       const newProduct = { ...values, id: (products.length + 1).toString() };
//       setProducts([...products, newProduct]);
//     }

//     closeModal();
//     resetForm();
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleDateChange = (name, value) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value ? value.toISOString().split('T')[0] : '',
//     }));
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setFormData(initialValues);
//   };

//   return (
//     <div className='card'>
//       <Button onClick={openModal}>Open Modal</Button>

//       <DataTable value={products} stripedRows rows={4} tableStyle={{ minWidth: '50rem' }}>
//         <Column field='id' header='S.No' style={{ width: '10%' }}></Column>
//         <Column field='name' header='Name' style={{ width: '15%' }}></Column>
//         <Column field='mobile' header='Mobile' style={{ width: '15%' }}></Column>
//         <Column field='domain' header='Domain' style={{ width: '15%' }}></Column>
//         <Column
//           field='expiry'
//           header='Expiry'
//           body={(rowData) => {
//             const dateParts = rowData.expiry.split('-');
//             const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
//             return <span>{formattedDate}</span>;
//           }}
//           style={{ width: '15%' }}
//         ></Column>
//         <Column
//           field='amount'
//           header='Amount'
//           body={(rowData) => (
//             <span>
//               {rowData.amount.toLocaleString('en-IN', {
//                 style: 'currency',
//                 currency: 'INR',
//               })}
//             </span>
//           )}
//           style={{ width: '15%' }}
//         ></Column>
//         <Column
//           field='nextCall'
//           header='NextCall'
//           body={(rowData) => {
//             const dateParts = rowData.nextCall.split('-');
//             const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
//             return <span>{formattedDate}</span>;
//           }}
//           style={{ width: '15%' }}
//         ></Column>
//         <Column field='action' header='Action' body={(rowData) => handledIcons(rowData)} style={{ width: '15%' }}></Column>
//       </DataTable>

//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel='Modal'
//       >
//       <div  style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '90vh',
//           border: '3px solid #ccc',
//           width: '100%',
//           padding: '8px',
//           borderRadius: '4px',
//           marginBottom: '10px'
//         }}>
//         <Formik initialValues={formData} validationSchema={validationSchema} onSubmit={handleSubmit}>
//           <Form>
//                         <div>
//                     <label htmlFor='name'>Name:</label>
//                     <Field type='text' as={InputText} id='name' name='name' onChange={handleInputChange} />
//                     <ErrorMessage name='name' component='div' className='error' />
//                     </div>

//             <div>
//               <label htmlFor='mobile'>Mobile:</label>
//               <Field type='text' id='mobile' name='mobile' onChange={handleInputChange} />
//               <ErrorMessage name='mobile' component='div' className='error' />
//             </div>

//             <div>
//               <label htmlFor='expiry'>Expiry:</label>
//               <Field type='text' id='expiry' name='expiry' onChange={(e) => handleDateChange('expiry', e.value)} />
//               <ErrorMessage name='expiry' component='div' className='error' />
//             </div>

//             <div>
//               <label htmlFor='domain'>Domain:</label>
//               <Field type='text' id='domain' name='domain' onChange={handleInputChange} />
//               <ErrorMessage name='domain' component='div' className='error' />
//             </div>

//             <div>
//               <label htmlFor='amount'>Amount:</label>
//               <Field type='text' id='amount' name='amount' onChange={handleInputChange} />
//               <ErrorMessage name='amount' component='div' className='error' />
//             </div>

//             <div>
//               <label htmlFor='nextCall'>Next Call:</label>
//               <Field type='text' id='nextCall' name='nextCall' onChange={(e) => handleDateChange('nextCall', e.value)} />
//               <ErrorMessage name='nextCall' component='div' className='error' />
//             </div>

//             <div>
//               <label htmlFor='action'>Action:</label>
//               <Field type='text' id='action' name='action' />
//               <ErrorMessage name='action' component='div' className='error' />
//             </div>

//             <button type='submit'>Submit</button>
//             <button type='button' onClick={closeModal}>
//               Cancel
//             </button>
//           </Form>
//                   </Formik>
//                   </div>
//       </Modal>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Modal from 'react-modal';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  mobile: Yup.string().required('Mobile is required'),
  expiry: Yup.string().required('Expiry is required'),
  domain: Yup.string().required('Domain is required'),
  amount: Yup.number().required('Amount is required'),
  nextCall: Yup.string().required('Next Call is required'),
});

const initialValues = {
  id: '',
  name: '',
  mobile: '',
  expiry: '',
  domain: '',
  amount: '',
  nextCall: '',
  action: '',
};

const App = () => {
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'sujith',
      mobile: '9056095182',
      expiry: '2023-06-02',
      domain: 'sujithr@god.com',
      amount: 7,
      nextCall: '2023-05-30',
      action: '',
    },
    {
      id: '2',
      name: 'amirtha',
      mobile: '7056095182',
      expiry: '2023-05-31',
      domain: 'amirthas@logo.com',
      amount: 766,
      nextCall: '2023-09-18',
      action: '',
    },
    {
      id: '3',
      name: 'Kannan',
      mobile: '0056095182',
      expiry: '2023-05-29',
      domain: 'chennai@host.in',
      amount: 3,
      nextCall: '2023-05-29',
      action: '',
    },
  ]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialValues);

  const handleEdit = (rowData) => {
    setSelectedRow(rowData);
    setFormData(rowData);
    openModal();
  };

  const handledIcons = (rowData) => {
    return (
      <>
        <i
          className='pi pi-pencil'
          style={{ marginRight: '10px', cursor: 'pointer' }}
          onClick={() => handleEdit(rowData)}
        ></i>
        <i
          className='pi pi-trash'
          style={{ cursor: 'pointer' }}
          onClick={() => handleDelete(rowData)}
        ></i>
      </>
    );
  };

  const handleDelete = (rowData) => {
    const updatedProducts = products.filter((product) => product.id !== rowData.id);
    setProducts(updatedProducts);
  };

  const handleSubmit = (values) => {
    if (selectedRow) {
      // Edit existing row
      const updatedProducts = products.map((product) =>
        product.id === selectedRow.id ? values : product
      );
      setProducts(updatedProducts);
    } else {
      // Add new row
      const newProduct = { ...values, id: (products.length + 1).toString() };
      setProducts([...products, newProduct]);
    }

    closeModal();
    setFormData(initialValues);
  };

  const handleDateChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value ? value.toISOString().split('T')[0] : '',
    }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData(initialValues);
  };

  return (
    <div className='card'>
      <Button onClick={openModal}>Open Modal</Button>

      <DataTable
        value={products}
        stripedRows
        rows={4}
        tableStyle={{ minWidth: '50rem' }}
        selectionMode='single'
        onSelectionChange={(e) => setSelectedRow(e.value)}
      >
        <Column field='name' header='Name'></Column>
        <Column field='mobile' header='Mobile'></Column>
        <Column field='expiry' header='Expiry'
         body={(rowData) =>
          rowData.expiryDate instanceof Date
            ? rowData.expiryDate.toLocaleDateString()
            : rowData.expiryDate
        }
        
        ></Column>
        <Column field='domain' header='Domain'></Column>
        <Column field='amount' header='Amount'></Column>
        <Column field='nextCall' header='Next Call'     body={(rowData) =>
                  rowData.nextCall instanceof Date
                    ? rowData.nextCall.toLocaleDateString()
                    : rowData.nextCall
                }></Column>
        <Column body={handledIcons}></Column>
      </DataTable>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel='Product Form'>
        <div className='modal-content'           style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          border: '3px solid #ccc',
          width: '100%',
          padding: '8px',
          borderRadius: '4px',
          marginBottom: '10px'
        }}>
          <h2>{selectedRow ? 'Edit Product' : 'Add Product'}</h2>
          <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div>
                <label htmlFor='name'>Name:</label>
                <Field type='text' id='name' name='name' as={InputText} />
                <ErrorMessage name='name' component='div' className='error' />
              </div>

              <div>
                <label htmlFor='mobile'>Mobile:</label>
                <Field type='text' id='mobile' name='mobile' as={InputText} />
                <ErrorMessage name='mobile' component='div' className='error' />
              </div>

              <div>
                <label htmlFor='expiry'>Expiry:</label>
                <Field
                  id='expiry'
                  name='expiry'
                  value={formData.expiry}
                  onChange={(e) => handleDateChange('expiry', e.target.value)}
                  dateFormat='yy-mm-dd'
                  showIcon
                  component={Calendar}
                />
                <ErrorMessage name='expiry' component='div' className='error' />
              </div>
              {/* <div>
            <label htmlFor="expiryDate" >Expiry Date</label><br/>
            <Field name="expiryDate"  >
              {({ field, form }) => (
                <Calendar
                  id="expiryDate"
                  name="expiryDate"
                  value={field.value}
                  onChange={(e) => form.setFieldValue('expiryDate', e.value)}
                  dateFormat="dd/mm/yy"
                    showIcon
                    style={{
                      width: '100%',
                     
                    }}
                  />
                  
                )}
                
            </Field>
            <ErrorMessage name="expiryDate" component="div"  style={{ color: 'red', marginTop: '5px' }}/>
          </div> */}
              <div>
                <label htmlFor='domain'>Domain:</label>
                <Field type='text' id='domain' name='domain' as={InputText} />
                <ErrorMessage name='domain' component='div' className='error' />
              </div>

              <div>
                <label htmlFor='amount'>Amount:</label>
                <Field type='text' id='amount' name='amount' as={InputText} />
                <ErrorMessage name='amount' component='div' className='error' />
              </div>

              <div>
                <label htmlFor='nextCall'>Next Call:</label>
                <Field
                  id='nextCall'
                  name='nextCall'
                  value={formData.nextCall}
                  onChange={(e) => handleDateChange('nextCall', e.target.value)}
                  dateFormat='yy-mm-dd'
                  showIcon
                  component={Calendar}
                />
                <ErrorMessage name='nextCall' component='div' className='error' />
              </div>

              <div>
                <label htmlFor='action'>Action:</label>
                <Field type='text' id='action' name='action' as={InputText} />
                <ErrorMessage name='action' component='div' className='error' />
              </div>

              <div>
                <button type='submit'>Submit</button>
                <button type='button' onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default App;
