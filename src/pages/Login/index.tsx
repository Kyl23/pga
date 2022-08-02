import { InputProps, TextField } from '@mui/material'
import useScript from '~src/utils/useScript'
import Input from '@mui/material/Input'

const inputStyle = {
  borderRadius: '100px'
}

function Login() {
  const logFunc = useScript('log')
  return (
    <p>
      <Input style={{ zIndex: 2 }} />
    </p>
  )
}

export default Login