import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import dayjs from 'dayjs'

// MUI Components
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

// Date Picker
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import CustomButton from './CustomButton'

// Yup Validation
const validationSchema = Yup.object({
  fileNumber: Yup.string().required('File Number is required'),
  matter:     Yup.string().required('Matter is required'),
  payee:      Yup.string().required('Payee/Payer is required'),
  transDate:  Yup.string().required('Transaction Date is required'),
  type:       Yup.string().required('Type is required'),
  clearDate:  Yup.string().required('Clear Date is required'),
  amount:     Yup.number()
                 .typeError('Amount must be a number')
                 .required('Amount is required')
                 .positive('Amount must be positive'),
})

const MATTER_OPTIONS = [
  'Rent Act Matters',
  'Labour Matters',
  'Family Law Matters',
  'Direct Taxes Matter',
  'Criminal Matters',
  'Election Matters',
  'Indirect Taxes Matters',
  'Service Matters',
]

const inputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    fontSize: '0.875rem',
    backgroundColor: '#fff',
    '&:hover fieldset': { borderColor: '#7c3aed' },
    '&.Mui-focused fieldset': { borderColor: '#7c3aed', borderWidth: '1.5px' },
  },
  '& .MuiInputLabel-root.Mui-focused': { color: '#7c3aed' },
}

const AddTransactionModal = ({ open, onClose, onSubmit }) => {

  const formik = useFormik({
    initialValues: {
      fileNumber: '',
      matter:     '',
      payee:      '',
      transDate:  '',   
      type:       '',
      clearDate:  '',   
      amount:     '',
      notes:      '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values)
      resetForm()
      onClose()
    }
  })

  const handleClose = () => {
    formik.resetForm()
    onClose()
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
          }
        }}
      >
        {/* HEADER */}
        <DialogTitle sx={{
          background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 2.5,
          px: 3,
        }}>
          <div>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>
              Add Transaction
            </p>
            <p style={{ fontSize: '0.75rem', opacity: 0.8, margin: 0, marginTop: 2 }}>
              Fill in the details to record a new transaction
            </p>
          </div>
          <IconButton onClick={handleClose} sx={{ color: 'rgba(255,255,255,0.8)' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {/* FORM FIELDS */}
        <DialogContent sx={{ px: 3, py: 3, backgroundColor: '#fafafa' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginTop: '18px'
          }}>

            {/* File Number */}
            <TextField
              label="File Number"
              placeholder="e.g. TNHC01-17891-2023"
              name="fileNumber"
              value={formik.values.fileNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fileNumber && Boolean(formik.errors.fileNumber)}
              helperText={formik.touched.fileNumber && formik.errors.fileNumber}
              fullWidth
              size="small"
              sx={inputSx}
            />

            {/* Matter Dropdown */}
            <FormControl
              fullWidth
              size="small"
              error={formik.touched.matter && Boolean(formik.errors.matter)}
              sx={inputSx}
            >
              <InputLabel>Matter</InputLabel>
              <Select
                label="Matter"
                name="matter"
                value={formik.values.matter}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {MATTER_OPTIONS.map((m) => (
                  <MenuItem key={m} value={m}>{m}</MenuItem>
                ))}
              </Select>
              {formik.touched.matter && formik.errors.matter && (
                <FormHelperText>{formik.errors.matter}</FormHelperText>
              )}
            </FormControl>

            {/* Payee/Payer */}
            <TextField
              label="Payee / Payer"
              placeholder="e.g. Oliver Elijah"
              name="payee"
              value={formik.values.payee}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.payee && Boolean(formik.errors.payee)}
              helperText={formik.touched.payee && formik.errors.payee}
              fullWidth
              size="small"
              sx={inputSx}
            />

            {/* Type Dropdown */}
            <FormControl
              fullWidth
              size="small"
              error={formik.touched.type && Boolean(formik.errors.type)}
              sx={inputSx}
            >
              <InputLabel>Type</InputLabel>
              <Select
                label="Type"
                name="type"
                value={formik.values.type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <MenuItem value="Deposit">Deposit</MenuItem>
                <MenuItem value="Withdrawal">Withdrawal</MenuItem>
              </Select>
              {formik.touched.type && formik.errors.type && (
                <FormHelperText>{formik.errors.type}</FormHelperText>
              )}
            </FormControl>

            {/* Transaction Date — MUI DatePicker */}
            <div>
              <DatePicker
                label="Transaction Date"
                value={formik.values.transDate ? dayjs(formik.values.transDate) : null}
                onChange={(newValue) => {
                  formik.setFieldValue(
                    'transDate',
                    newValue ? newValue.format('MM/DD/YY') : ''
                  )
                }}
                onClose={() => formik.setFieldTouched('transDate', false)}
                slotProps={{
                  textField: {
                    size: 'small',
                    fullWidth: true,
                    error: formik.touched.transDate && Boolean(formik.errors.transDate),
                    helperText: formik.touched.transDate && formik.errors.transDate,
                    sx: inputSx
                  }
                }}
              />
            </div>

            {/* Clear Date — MUI DatePicker */}
            <div>
              <DatePicker
                label="Clear Date"
                value={formik.values.clearDate ? dayjs(formik.values.clearDate) : null}
                onChange={(newValue) => {
                  formik.setFieldValue(
                    'clearDate',
                    newValue ? newValue.format('MM/DD/YY') : ''
                  )
                }}
                onClose={() => formik.setFieldTouched('clearDate', false)}
                slotProps={{
                  textField: {
                    size: 'small',
                    fullWidth: true,
                    error: formik.touched.clearDate && Boolean(formik.errors.clearDate),
                    helperText: formik.touched.clearDate && formik.errors.clearDate,
                    sx: inputSx
                  }
                }}
              />
            </div>

            {/* Amount */}
            <TextField
              label="Amount"
              placeholder="0.00"
              name="amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.amount && Boolean(formik.errors.amount)}
              helperText={formik.touched.amount && formik.errors.amount}
              fullWidth
              size="small"
              sx={inputSx}
            />

          </div>

          <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '12px' }}>
            * All fields except Notes are required.
          </p>
        </DialogContent>

        {/* FOOTER BUTTONS */}
        <DialogActions sx={{
          px: 3,
          py: 2.5,
          borderTop: '1px solid #f0f0f0',
          backgroundColor: '#fff',
          gap: 1
        }}>
          <CustomButton
            text="Cancel"
            backgroundColor="#ffffff"
            hoverColor="#f9fafb"
            textColor="#6b7280"
            border="1px solid #e5e7eb"
            onClick={handleClose}
          />
          <CustomButton
            text="Save Transaction"
            backgroundColor="#7c3aed"
            hoverColor="#6d28d9"
            textColor="#ffffff"
            onClick={formik.handleSubmit}
          />
        </DialogActions>

      </Dialog>
    </LocalizationProvider>
  )
}

export default AddTransactionModal