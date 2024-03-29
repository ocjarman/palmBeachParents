import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import MuiButton, { ButtonProps } from '@mui/material/Button';

const ButtonRoot = styled(MuiButton)(({ theme, size }) => ({
  borderRadius: 4,
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: theme.typography.h1.fontFamily,
  padding: '2%',
  fontSize: theme.typography.pxToRem(14),
  color: 'black',
  boxShadow: 'none',
  '&:active, &:focus': {
    boxShadow: 'none',
  },
  ...(size === 'small' && {
    padding: '2%',
    fontSize: theme.typography.pxToRem(13),
  }),
  ...(size === 'large' && {
    padding: '2%',
    fontSize: theme.typography.pxToRem(16),
  }),
}));

// See https://mui.com/guides/typescript/#usage-of-component-prop for why the types uses `C`.
function Button<C extends React.ElementType>(
  props: ButtonProps<C, { component?: C }>,
) {
  return <ButtonRoot {...props} />;
}

export default Button;