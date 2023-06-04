

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
      expiry: '02-06-2023 ',
      domain: 'sujithr@god.com',
      amount: 7,
      nextCall: ' 30-05-2023',
      action: '',
    },
    {
      id: '2',
      name: 'amirtha',
      mobile: '7056095182',
      expiry: '31-05-2023',
      domain: 'amirthas@logo.com',
      amount: 766,
      nextCall: '18-09-2018',
      action: '',
    },
    {
      id: '3',
      name: 'Kannan',
      mobile: '0056095182',
      expiry: ' 29-05-2023',
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
        <Column body={handledIcons} header='Action'></Column>
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
                  dateFormat=' dd-mm-yy'
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
