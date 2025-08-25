// Icons
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

// Components
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Paper, Stack, TextField, Button, Box } from '@mui/material';
import DropList from '../DropList/DropList.jsx';

const validationSchema = Yup.object({
  userName: Yup.string().min(3).max(20).required("Required"),
  city: Yup.string().required("Required"),
});

const palestinianCities = [
  "Ramallah",
  "Gaza",
  "Nablus",
  "Hebron",
  "Jenin",
  "Tulkarm",
  "Jericho",
  "Khan Yunis",
  "Rafah",
  "Salfit",
  "Tubas",
  "Jerusalem",
];

export default function SignUpForm({ userName, setUserName, setClick, city, setCity }) {
  
  return (
    <Paper  
        sx={{ 
            width: { xs: '70%'}, 
            padding: { xs: 3, sm: 5 },
            mx: 'auto', 
            mt: 6, 
            boxShadow: "0px 10px 20px rgba(0,0,0,0.1), 0px 6px 6px rgba(0,0,0,0.08)",

        }}
    >
      <Formik
        initialValues={{ userName: userName || "", city: city || "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setUserName(values.userName);
          setCity(values.city);
          setClick(true);
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, setFieldValue, isSubmitting }) => (
        <Form>
          <Stack spacing={7}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={2}>
              {/* Name field */}
              <TextField
                label="Enter Your Name"
                name="userName"
                variant="outlined"
                fullWidth
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.userName && Boolean(errors.userName)}
                helperText={touched.userName && errors.userName}
              />

              {/* DropList for City */}
              <DropList
                palestinianCities={palestinianCities}
                city={values.city}
                setCity={(newCity) => setFieldValue("city", newCity)}
                message={touched.city && errors.city ? errors.city : "Select Your City"}
              />
            </Stack>

            {/* Submit button */}
            <Box width="100%">
              <Button
                type="submit"
                variant="contained"
                fullWidth
                startIcon={<PersonAddAltIcon />}
                disabled={isSubmitting}
                sx={{
                  bgcolor: '#f8d000',
                  color: 'black',
                  p: '10px 10px',
                  fontWeight: 'bold',
                }}
              >
                Sign-Up
              </Button>
            </Box>
          </Stack>
        </Form>
      )}

      </Formik>
    </Paper>
  );
}
