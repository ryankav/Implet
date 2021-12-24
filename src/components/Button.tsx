import React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

interface ButtonProps {
  /**
   * Button contents
   */
  text: string;
  /**
   * Click handler
   */
  onClick: () => void;
  /**
   * Click handler
   */
  disabled?: boolean;
  /**
   * Style for button
   */
  style?: MuiButtonProps['sx'];
  /**
   * Override providing access to underlying Mui Button Api
   */
  overrides?: MuiButtonProps;
}

const Button = ({ text, style, overrides, ...props }: ButtonProps) => {
  return (
    <MuiButton
      color="primary"
      size="medium"
      variant="contained"
      sx={style}
      {...props}
      {...overrides}
    >
      {text}
    </MuiButton>
  )
}

export default Button;