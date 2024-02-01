import { useField, type FieldAttributes } from 'formik';

interface InputProps extends FieldAttributes<any> {
  label: string;
}

const Input = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props as any);

  return (
    <div className="mb-4">
      <label htmlFor={props.id || props.name} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        className={`form-input w-full border-2 border-${meta.touched && meta.error ? 'red-500' : 'gray-300'} p-2 rounded focus:outline-none focus:shadow-outline-primary`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <p className="text-red-500 text-xs mt-1">{meta.error}</p>}
    </div>
  );
};

export default Input;
