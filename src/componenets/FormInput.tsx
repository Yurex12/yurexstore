import React, { ReactNode } from 'react';

type FormInputProps = {
  label: string;
  children: ReactNode;
  error: string | undefined;
  addProps?: boolean;
};

export default function FormInput({
  label,
  children,
  error,
  addProps,
}: FormInputProps) {
  let childId: string | undefined;

  if (React.isValidElement(children)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const child = children as React.ReactElement<any>;
    if (child.props && typeof child.props.id === 'string') {
      childId = child.props.id;
    }
  }

  return (
    <div className='mt-2'>
      {addProps ? (
        <div className='flex items-center justify-between'>
          <label
            htmlFor={childId}
            className='block text-sm font-medium leading-6 text-brandBlack'
          >
            {label}
          </label>
          <div className='text-sm'>
            <a
              href='#'
              className='font-semibold text-brandBrown hover:text-brandBrown/90'
            >
              Forgot password?
            </a>
          </div>
        </div>
      ) : (
        <label
          htmlFor={childId}
          className='block text-sm font-medium leading-6 text-brandBlack'
        >
          {label}
        </label>
      )}

      <div>{children}</div>
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  );
}
