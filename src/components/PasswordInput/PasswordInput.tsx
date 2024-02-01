import { useState } from 'react';
import { useField, type FieldAttributes } from 'formik';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordInputProps extends FieldAttributes<any> {
  label: string;
  name: string;
  placeholder?: string;
  showToggle?: boolean;
}

const PasswordInput = ({ label, showToggle = true, ...props }: PasswordInputProps) => {
  const [field, meta] = useField(props as any);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <label htmlFor={props.id || props.name} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          className={`form-input w-full border-2 border-${meta.touched && meta.error ? 'red-500' : 'gray-300'} p-2 rounded focus:outline-none focus:shadow-outline-primary`}
          type={showPassword ? 'text' : 'password'}
          {...field}
          {...props}
        />
        {showToggle && (
          <button
            type="button"
            className="absolute top-0 right-0 mt-2.5 mr-2 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        )}
      </div>
      {meta.touched && meta.error && <p className="text-red-500 text-xs mt-1">{meta.error}</p>}
    </div>
  );
};

export default PasswordInput;
