import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'react-datepicker/dist/react-datepicker.css';



const validationSchema = Yup.object().shape({
  supplier: Yup.string().required('Supplier is required'),
  invoiceNo: Yup.string().required('Invoice No is required'),
  invoiceDate: Yup.string().required('Invoice Date is required'),
  amount: Yup.number().required('Amount is required'),
  product: Yup.string().required('Product is required'),
  qty: Yup.string().required('Qty is required'), 
  lotNo: Yup.string().required('Lot No is required'),
  expiryDate: Yup.string().required('Expiry Date is required'),
});

const initialValues = {
  supplier: '',
  invoiceNo: '',
  invoiceDate: '',
  amount: '',
  product: '',
  qty: '',
  lotNo: '',
  expiryDate: '',
};



const FormComponent = () => {
  const [formData, setFormData] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    setFormData((prevData) => [...prevData, values]);
    resetForm();
  };

  return (
    
    <div>
    <div   style={{
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
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
         
      >
        <Form    >  
     
          <div>
            <label htmlFor="supplier">Supplier</label>
            <Field as={Dropdown} name="supplier" id="supplier" options={[
              { label: 'Select Supplier', value: '' },
              { label: 'Sun', value: 'sun' },
              { label: 'Mic', value: 'mic' },
              { label: 'App', value: 'app' },
            ]}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
            />
            <ErrorMessage name="supplier" component="div" style={{ color: 'red', marginTop: '5px' }} />
          </div>

          <div>
            <label htmlFor="invoiceNo">Invoice No</label>
            <Field as={InputText} type="text" name="invoiceNo" id="invoiceNo"   style={{
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }} />
            <ErrorMessage name="invoiceNo" component="div" style={{ color: 'red',  marginTop: '5px' }}/>
          </div>

          <div>
            <label htmlFor="invoiceDate">Invoice Date</label><br/>
           < Field name="invoiceDate"  >
              {({ field, form }) => (
                <Calendar
                  id="invoiceDate"
                  name="invoiceDate"
                  value={field.value}
                  onChange={(e) => form.setFieldValue('invoiceDate', e.value)}
                  dateFormat="dd/mm/yy"
                    showIcon
                    style={{
                      width: '100%',
                     
                    }}
                  />
                  
                )}
                
            </Field>
            <ErrorMessage name="invoiceDate" component="div" style={{ color: 'red', marginTop: '5px' }} />
          </div>

          <div>
            <label htmlFor="amount">Amount</label>
            <Field as={InputText} type="number" name="amount" id="amount"   style={{
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }} />
            <ErrorMessage name="amount" component="div" style={{ color: 'red', marginTop: '5px' }} />
          </div>

          <div>
            <label htmlFor="product">Product</label>
            <Field as={Dropdown} name="product" id="product" options={[
              { label: 'Select Product', value: '' },
              { label: 'Sun', value: 'sun' },
              { label: 'Mic', value: 'mic' },
              { label: 'App', value: 'app' },
            ]}    style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}/>
            <ErrorMessage name="product" component="div"  style={{ color: 'red', marginTop: '5px' }}/>
          </div>

          <div>
            <label htmlFor="qty">Qty</label>
            <Field as={InputText} type="text" name="qty" id="qty"    style={{
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}/>
            <ErrorMessage name="qty" component="div" style={{ color: 'red', marginTop: '5px' }} />
          </div>

          <div>
            <label htmlFor="lotNo">Lot No</label>
            <Field as={InputText} type="text" name="lotNo" id="lotNo"   style={{
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }} />
            <ErrorMessage name="lotNo" component="div" style={{ color: 'red', marginTop: '5px' }} />
          </div>

          <div>
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
          </div><br/>

          <Button type="submit" label="Add" className="p-button-primary"  />

        </Form>
        </Formik>
          </div>
      <DataTable value={formData}>
        <Column field="product" header="Product" />
        <Column field="qty" header="Qty" />
        <Column field="lotNo" header="Lot No" />
        <Column
                field="expiryDate"
                header="Expiry Date"
                body={(rowData) =>
                  rowData.expiryDate instanceof Date
                    ? rowData.expiryDate.toLocaleDateString()
                    : rowData.expiryDate
                }
              />

      </DataTable>
    </div>
  );
};

export default FormComponent;
