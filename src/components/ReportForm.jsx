import { useForm } from 'react-hook-form';

const ReportForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Report submitted:', data);
    alert('Report submitted successfully!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form" id="report">
      <label>
        Location:
        <input {...register('location')} required />
      </label>
      <label>
        Description:
        <textarea {...register('description')} required />
      </label>
      <button type="submit">Submit Report</button>
    </form>
  );
};

export default ReportForm;