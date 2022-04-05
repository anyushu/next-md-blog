import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  label: string
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement>
}

export const Button = ({ label, buttonProps }: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      className="py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-300 ease-in-out"
    >
      {label}
    </button>
  )
}
