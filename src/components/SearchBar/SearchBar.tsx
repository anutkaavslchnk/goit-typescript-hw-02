
import { Field, Form, Formik, FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import s from './SearchBar.module.css';
import { BsFillSearchHeartFill, BsSearchHeartFill } from 'react-icons/bs';

type FormValues = {
  query: string;
};

type Props = {
  onSubmit: (values: FormValues, actions: FormikHelpers<FormValues>) => void;
};

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const initialValues: FormValues = {
    query: '',
  };

  
  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    if (!values.query) {
      toast.error("You should search for something! Type something here");
    } else {
      onSubmit(values, actions);  
    }
    actions.setSubmitting(false);
  };

  return (
    <header className={s.header}>
      <Toaster position="top-right" reverseOrder={false} />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className={s.wrapper}>
            <Field 
              name="query" 
              placeholder='Search images and photos' 
              type='search' 
              className={s.input} 
            />
            <button 
              type="submit" 
              className={s.button} 
              disabled={isSubmitting}
            >
              <BsFillSearchHeartFill size='30px' color="white" className={s.icon} />
            </button>
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default SearchBar;