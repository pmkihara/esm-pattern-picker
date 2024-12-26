type ErrorMessageProps = {
  message?: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return message ? <div className='text-red-500 text-xs'>{message}</div> : null
}

export default ErrorMessage
